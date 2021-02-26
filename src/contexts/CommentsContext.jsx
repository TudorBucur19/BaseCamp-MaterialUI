import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../utils/firebase';
export const CommentsContext = createContext();

const CommentsContextProvider = (props) => {    
    const db = firebase.firestore();
    const history = useHistory();
    const [comment, setComment] = useState({});
    const allComments = useEntries('Comments');


    const handleChangeComment = (event) => {
        setComment({
            commentID: event.target.id,
            commentText: event.target.value
        });   
    }

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

    const values = {
        comment,
        handleChangeComment,
        handleSubmitComment,
        allComments
    }

    return ( 
            <CommentsContext.Provider value={values}>
                {props.children}
            </CommentsContext.Provider>
     );
}
 
export default CommentsContextProvider;

