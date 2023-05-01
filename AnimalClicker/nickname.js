import { useState,useEffect } from 'react';
import { firestore } from "./firebase";
import {
    collection,
    query,
    where,
    getDocs,
} from 'firebase/firestore';

export default function Nickname({id}) {  
    /*The state variable hold the array of reviews fetched from the Firestore database */
    const [nickname,setNickname]=useState([]); 

    /* We'll learn more about the useEffect hook when we look at React Native
       useEffect() is a function that is executed BEFORE the React component is
       rendered. We need it to render before the component is rendered because
       we need the data returned so we can use it in the component. */

    useEffect(() => {
      fetchNickname();
    }, []);

    async function fetchNickname() {    
        //query the collection reviews from our firestore instance
        //get only the reviews for the given id
        const q = query(collection(firestore, "nickname"), where("id", "==", id));
        //an array of documents with the reviews are returned
        const querySnapshot = await getDocs(q);
        const r=[]
        //forEach is similar to map
        //it calls a function for each element in an array
        //it doesn't return a new array with the results like map does
        querySnapshot.forEach((doc) => {
            r.push(doc.data().content);
        });
        /* This is called spread syntax it adds the array r to the reviews array */
        //setReviews([...reviews , ...r]);   
        //add the array of reviews gotten from firestore to any reviews we already have
        setNickname(nickname.concat(r));
        console.log(nickname);
    }
    return (
        <div className="App">
         { /* Use the map function to display the reviews in the reviews array  */ }
        {
            nickname.map((nickname) =>
             <p>{nickname}</p>)
        }
        
    </div>    
  );
}