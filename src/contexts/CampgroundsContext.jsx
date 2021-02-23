import React, { createContext, useState, useEffect } from 'react';
import firebase from '../utils/firebase';

export const CampgroundsContext = createContext();

const CampgroundsContextProvider = (props) => {
    const db = firebase.firestore();
    const [newCampground, setNewCampground] = useState({});
    const campgroundsList = useEntries();

    const handleChange = (event) => {
        const value = event.target.value;
        setNewCampground({
            ...newCampground,
            [event.target.name]: value
        });
    };

    //ADDING CAMPGOUNDS TO DATABASE
    const handleSubmit = (event) => {
        event.preventDefault();

        db.collection('Campgrounds')
        .add({
            newCampground
        })
        .then(() => {
           setNewCampground({
               name: "",
               price: "",
               image: "",
               description: ""
           });
        })

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


    const values = {
        newCampground,
        campgroundsList,
        handleChange,
        handleSubmit
    }
    return ( 
        <CampgroundsContext.Provider value={values}>
            {props.children}
        </CampgroundsContext.Provider>
     );
}
 
export default CampgroundsContextProvider;