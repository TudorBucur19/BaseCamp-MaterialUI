import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import firebase, { storage } from '../utils/firebase';

export const CampgroundsContext = createContext();

const CampgroundsContextProvider = (props) => {
    const db = firebase.firestore();
    const history = useHistory();
    const [campground, setCampground] = useState({
        image: [],
    });   
    const [userAvatar, setUserAvatar] = useState({
        image: [],
    });
    const campgroundsList = useEntries('Campgrounds');      
    const [image, setImage] = useState(null);
    const [avatar, setAvatar] = useState(null);
    const [comment, setComment] = useState({});
    
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
        //const collectionRef = firebase.firestore().collection('MainImages');
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
    }

    // ADDING THE OTHER CAMPGROUND INFO
    const handleChange = (event) => {
        const value = event.target.value;
        setCampground({
            ...campground,
            [event.target.name]: value,
        });
    };

    //ADD NEW COMMENT TO CAMPGROUND
    const handleCommentChange = (event, currentUser, date) => {
        const value = event.target.value;
        setComment({
            [event.target.name]: value,
            author: currentUser,
            createdAt: date,
        })
    };

    const handleCommentSubmit = (collection, docID) => {
        firebase.firestore()
        .collection(collection)
        .doc(docID)
        .update({
            comments: firebase.firestore.FieldValue.arrayUnion(comment),
        });
        setComment('')
    }


    
    //ADDING CAMPGROUNDS TO DATABASE
    const handleSubmit = (event) => {
        event.preventDefault();

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

    //REMOVE ITEMS FROM DATABASE
    const removeItem = (id) => {
        db.collection('Campgrounds')
        .doc(id)
        .delete()
        .then(() => console.log("Document was deleted"))
        .catch((error) => console.error("Error deleting document", error));
        history.push("/campgrounds");
    };

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
        handleChange,
        handleSubmit,
        removeItem,
        handleFileChange,
        handleUpload,
        removeStorageFile,
        handleCommentChange,
        handleCommentSubmit
    }
    return ( 
        <CampgroundsContext.Provider value={values}>
            {props.children}
        </CampgroundsContext.Provider>
     );
}
 
export default CampgroundsContextProvider;