import { useState, useEffect } from "react";
import firebase from 'utils/firebase';

// GET ITEMS LIST FROM DATABASE
const useDatabaseCalls = (collection) => {
    const [entries, setEntries] = useState([]);
    
    useEffect(() => {
        const unsubscribe = firebase.firestore()
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

    return {
        entries
    };
};

export default useDatabaseCalls;