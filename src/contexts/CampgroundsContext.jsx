import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../utils/firebase';

export const CampgroundsContext = createContext();

const CampgroundsContextProvider = (props) => {
    const db = firebase.firestore();
    const history = useHistory();
    const [campground, setCampground] = useState({});
    const [comment, setComment] = useState({});
    const campgroundsList = useEntries('Campgrounds');
    const allComments = useEntries('Comments');
        


    const handleChange = (event) => {
        const value = event.target.value;
        setCampground({
            ...campground,
            [event.target.name]: value
        });
    };

    const handleChangeComment = (event) => {
        setComment({
            commentID: event.target.id,
            commentText: event.target.value
        });
        
    }


    //ADDING CAMPGOUNDS TO DATABASE
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
               image: "",
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
        firebase
        .firestore()
        .collection('Campgrounds')
        .doc(id)
        .delete()
        .then(() => console.log("Document was deleted"))
        .catch((error) => console.error("Error deleting document", error));
        history.push("/campgrounds");
    };

    const handleSubmitComment = (event) => {
        event.preventDefault();

        db.collection('Comments')
        .add({
            comment
        })
        .then(() => {
           setComment({
               commentID: "",
               commentText: ""
           });
        })
        history.goBack();
    };


    const values = {
        campground,
        campgroundsList,
        handleChange,
        handleSubmit,
        removeItem,
        comment,
        handleChangeComment,        
        handleSubmitComment,
        allComments
    }
    return ( 
        <CampgroundsContext.Provider value={values}>
            {props.children}
        </CampgroundsContext.Provider>
     );
}
 
export default CampgroundsContextProvider;