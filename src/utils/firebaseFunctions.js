// Data Reading and Writing in Firebase DB
import firebase from "./firebase";
import { getDatabase, ref, push, set, onValue, remove, update } from "firebase/database";
import { useEffect, useState } from "react";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "../helpers/ToastNotify";

//create new contact user
export const AddUser = (info) => {
  const db = getDatabase(firebase);
  const userRef = ref(db, "users/");
  const newUserRef = push(userRef);
  set(newUserRef, {
    username: info.username,
    phoneNumber: info.phoneNumber,
    gender: info.gender, 
  });
  toastSuccessNotify("New contact added successfully!");
};

// get data
export const useUser=()=>{
  const [isLoading,setIsLoading]=useState();
  const [contactList,setContactList]=useState();
 useEffect(() => {
     const db = getDatabase(firebase);
     const userRef=ref(db,"users/")
     onValue(userRef,(snapshot)=>{
         const data=snapshot.val();
         const userArray=[]

         for (let id in data){
             userArray.push({id,...data[id]})
         }
         setContactList(userArray)
         setIsLoading(false)
     })
 },[])
 return {isLoading,contactList}
}

//delete user
export const DeleteUser=(id)=>{
  const db = getDatabase(firebase);
  remove(ref(db,"users/"+id));
  toastErrorNotify("Deleted Successfully");
}

//edit user
export const UpdateUser = (info) => {
  const db = getDatabase();
  const updates = {};
  updates["users/" + info.id] = info;
  toastWarnNotify("Edit contact successfully!");
  return update(ref(db), updates);
};