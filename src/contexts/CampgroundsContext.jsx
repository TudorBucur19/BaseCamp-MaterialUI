import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../utils/firebase';

export const CampgroundsContext = createContext();

const CampgroundsContextProvider = (props) => {
    const db = firebase.firestore();
    const history = useHistory();
    const [campground, setCampground] = useState({});
    const campgroundsList = useEntries();


    const handleChange = (event) => {
        const value = event.target.value;
        setCampground({
            ...campground,
            [event.target.name]: value
        });
    };

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
    function useEntries() {
        const [entries, setEntries] = useState([]);
        
        useEffect(() => {
            const unsubscribe = db
            .collection('Campgrounds')
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


    //ADD COMMENTS TO CAMPGROUND
    const addComment = (id) => {
        firebase
        .firestore()
        .collection('Campgrounds')
        .doc(id)
        .update({...campground})
        .then(() => console.log("Document was updated"))
        .catch((error) => console.error("Error deleting document", error));
    };

    const values = {
        campground,
        campgroundsList,
        handleChange,
        handleSubmit,
        addComment,
        removeItem
    }
    return ( 
        <CampgroundsContext.Provider value={values}>
            {props.children}
        </CampgroundsContext.Provider>
     );
}
 
export default CampgroundsContextProvider;