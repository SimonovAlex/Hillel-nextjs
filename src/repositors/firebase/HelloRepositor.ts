import {db} from '@/configs/firebaseApp';
import { collection, addDoc, getDocs, getDoc, doc, setDoc } from "firebase/firestore"; 

export default class HelloRepositor {
    constructor () {
        
    }

    async add (data) {
     
      await setDoc(doc(db, "test_users", "my_test_id"), data);
    }
}