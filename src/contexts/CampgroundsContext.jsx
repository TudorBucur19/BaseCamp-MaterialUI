import React, { createContext, useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import firebase, { storage } from 'utils/firebase';
import { AuthenticationContext } from 'contexts/AuthenticationContext';

export const CampgroundsContext = createContext();

const CampgroundsContextProvider = (props) => {
    const { user } = useContext(AuthenticationContext);
    const db = firebase.firestore();
    const history = useHistory();
    const campgroundsList = useEntries('Campgrounds');      
    const [campground, setCampground] = useState({
        image: []
    });   
    const [userAvatar, setUserAvatar] = useState({
        image: [],
    });
    const [image, setImage] = useState(null);
    const [avatar, setAvatar] = useState(null);
    const [comment, setComment] = useState({});
    const [commentState, setCommentState] = useState();
    const [currentID, setCurrentID] = useState();
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentPosition, setCurrentPosition] = useState();

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
      image && handleUpload('images', setCampground, campground, image);
      avatar && handleUpload('usersAvatars', setUserAvatar, userAvatar, avatar);
    }, [image, avatar]);

    const handleUpload = (collectionName, callback, state, img) => {
        const uploadTask = storage.ref(`${collectionName}/${img.name}`).put(img);
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error);
            },
            () =>{
                storage
                .ref(collectionName)
                .child(img.name)
                .getDownloadURL()
                .then(url => {
                    callback({
                        ...state,
                        image: [...state.image, {name: img.name, url: url}],
                    })
                });
            }
        )
    };

    // SET CAMPGROUND GPS COORDINATES
    const getClickCoords = (e) => {
        setCampground({
            ...campground,
            coords: {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
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
               name: "",
               price: "",
               description: ""
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
        console.log(campground)
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
    }
    
    // GETTING CAMPGROUNDS LIST FROM DATABASE
    function useEntries(collection) {
        const [entries, setEntries] = useState([]);
        
        useEffect(() => {
            const unsubscribe = db
            .collection(collection)
            .onSnapshot((snapshot) => {
                const newEntry = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setEntries(newEntry);
                })
            return () => unsubscribe();
        }, [])
    
        return entries;
    };

    //REMOVE DOCUMENTS FROM DATABASE
    const removeItem = (id) => {
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
        useEntries,
        image,
        setImage,
        avatar,
        setAvatar,
        campground,
        setCampground,
        campgroundsList,
        userAvatar,
        setUserAvatar,
        submitCampgroundDB,
        removeItem,
        handleFileChange,
        handleUpload,
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
        currentPosition
    };

    return ( 
        <CampgroundsContext.Provider value={values}>
            {props.children}
        </CampgroundsContext.Provider>
     );
}
 
export default CampgroundsContextProvider;