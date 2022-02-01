import React, { createContext, useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import firebase, { storage } from 'utils/firebase';
import { AuthenticationContext } from 'contexts/AuthenticationContext';
import useDatabaseCalls from 'utils/cusomHooks/useDatabaseCalls';

export const CampgroundsContext = createContext();

const CampgroundsContextProvider = (props) => {
    const { user } = useContext(AuthenticationContext);
    const db = firebase.firestore();
    const history = useHistory(); 
    const [campground, setCampground] = useState({
        image: []
    });   
    const [userAvatar, setUserAvatar] = useState({
        image: [],
    });
    const [images, setImages] = useState(null);
    const [avatar, setAvatar] = useState(null);
    const [comment, setComment] = useState({});
    const [commentState, setCommentState] = useState();
    const [currentID, setCurrentID] = useState();
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentPosition, setCurrentPosition] = useState();
    const [searchWord, setSearchWord] = useState({
        searchWord: '', 
    });
    const { entries: campgroundsList } = useDatabaseCalls('Campgrounds');

    //GET CURRENT POSITION FROM BROWSER

    const getPosition = (position) => {
        setCurrentPosition({
            lat: parseFloat(position.coords.latitude),
            lng: parseFloat(position.coords.longitude)
        })
    };

    useEffect(() => {
        navigator.geolocation.watchPosition(getPosition);
    }, [])
    
    // UPLOADING PHOTOS IN FIREBASE STORAGE
    const handleFileChange = (file, callback) => {
        callback(file);
    };

    useEffect(() => {
      images && handleFileUpload('images', setCampground, campground, images);
      avatar && handleFileUpload('usersAvatars', setUserAvatar, userAvatar, avatar);
    }, [images, avatar]);

    const handleFileUpload = (collectionName, callback, state, img) => {
        img.map(file => {
            const uploadTask = storage.ref(`${collectionName}/${file.name}`).put(file);
            uploadTask.on(
                "state_changed",
                snapshot => {},
                error => {
                    console.log(error);
                },
                () =>{
                    storage
                    .ref(collectionName)
                    .child(file.name)
                    .getDownloadURL()
                    .then(url => {
                        callback(prevState => ({
                            ...prevState,
                            image: [...prevState.image, {name: file.name, url: url}],
                        }))
                    });
                }
            )
        })
    };

    // SET CAMPGROUND GPS COORDINATES

    const getClickCoords = async (e) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        const response = await fetch(`http://api.geonames.org/findNearbyPlaceNameJSON?lat=${lat}&lng=${lng}&username=tudor300`)
        const data = await response.json();
        const country = data.geonames[0];
        
        setCampground({
            ...campground,
            coords: {
            lat: lat,
            lng: lng
            },
            country: {
                name: country.countryName,
                code: country.countryCode
            }
        });
    };

    //SUBMIT CAMPGROUND FORM
    const submitCampground = (data) => {
        setCampground({
            ...campground,
            ...data,
            author: user.displayName,
        });
    };

    //ADD CAMPGROUNDS TO DATABASE
    const submitCampgroundDB = () => {
        db.collection('Campgrounds')
        .add({
            campground
        })
        .then(() => {
           setCampground({
            image: [],
           });
        })
        history.push("/campgrounds");
    };

    useEffect(() => {
        if(campground.name) {
            isEditMode && updateCamp(currentID);
            !isEditMode && submitCampgroundDB();
        }
    }, [campground]);

    //UPDATE CAMPGROUND IN DATABASE
    const updateCamp = (docID) => {
        db.collection('Campgrounds')
        .doc(docID)
        .update({
            "campground": {...campground}
        });
        history.push("/campgrounds");
    }

    //ADD NEW COMMENT TO CAMPGROUND
    const handleCommentChange = (data, campID, action, collection) => {
        setComment({
            ...data,
            author: {
                id: user.uid,
                name : user.displayName,
                avatar: user.photoURL,
            },
            createdAt: new Date().toDateString(),
        });
        setCommentState({
            campID: campID,
            action: action,
            collection: collection
        });
    };

    const updateCommentsArray = (action, content) => {
        if(action === 'remove') {
            return firebase.firestore.FieldValue.arrayRemove(content);
        }
        return firebase.firestore.FieldValue.arrayUnion(content);
    };

    const handleCommentsUpdate = (collection, docID, action, content) => {
        firebase.firestore()
        .collection(collection)
        .doc(docID)
        .update({
            comments: updateCommentsArray(action, content),
        });
        setComment({});
    };

    const editCommentsArray = (collection, docID, content) => {
        firebase.firestore()
        .collection(collection)
        .doc(docID)
        .update({
            comments: firebase.firestore.FieldValue.arrayRemove(content),
        });        
    };

    //this useEffect triggers the database upload after a comment is submitted
    useEffect(() => {
        if(comment && commentState)
        handleCommentsUpdate(commentState.collection, commentState.campID, commentState.action, comment);
    }, [commentState]);

    //ADD RATING TO CAMPGROUND

    const handleRatingUpdate = (collection, docID, content) => {
        firebase.firestore()
        .collection(collection)
        .doc(docID)
        .update({
            ratings: firebase.firestore.FieldValue.arrayUnion(content),
        });
        setComment({});
    };

    //REMOVE DOCUMENTS FROM DATABASE
    const removeDBItem = (id, filesToRemove = false) => {
        filesToRemove.map(file => storage.ref(`images/${file.name}`).delete());
        db.collection('Campgrounds')
        .doc(id)
        .delete()
        .then(() => console.log("Document was deleted"))
        .catch((error) => console.error("Error deleting document", error));
        history.push("/campgrounds");
    };

    //REMOVE FILE FROM STORAGE
    const removeStorageFile = (collectionName, fileName, index, state, callback) => {
        var imageRef = storage.ref(`${collectionName}/${fileName}`);
        try {
            imageRef.delete().then(() => {
                const currentUrls = state.image.filter(item => item !== state.image[index]);
                callback({
                    ...state,
                    image: [...currentUrls]
                });
            });            
        } 
        catch (error) {
            console.log(error)
        }
    };


    const values = {
        campgroundsList,
        images,
        setImages,
        avatar,
        setAvatar,
        campground,
        setCampground,
        userAvatar,
        setUserAvatar,
        submitCampgroundDB,
        removeDBItem,
        handleFileChange,
        handleFileUpload,
        removeStorageFile,
        handleCommentChange,
        getClickCoords,
        handleCommentsUpdate,
        comment,
        handleRatingUpdate,
        submitCampground,
        updateCamp,
        setCurrentID,
        setIsEditMode,
        editCommentsArray,
        currentPosition,
        searchWord,
        setSearchWord,
    };

    return ( 
        <CampgroundsContext.Provider value={values}>
            {props.children}
        </CampgroundsContext.Provider>
     );
}
 
export default CampgroundsContextProvider;