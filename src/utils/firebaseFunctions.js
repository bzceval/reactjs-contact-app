// Data Reading and Writing in Firebase DB
import firebase from './firebase'
import { getDatabase, ref, push, set } from "firebase/database";

export const AddUser=(info)=>{
  const db = getDatabase(firebase);
  const userRef=ref(db,"users/")
  const newUserRef=push(userRef);
  set(newUserRef,{
      username:info.username,
      phoneNumber:info.phoneNumber,
      gender:info.gender
  })

}