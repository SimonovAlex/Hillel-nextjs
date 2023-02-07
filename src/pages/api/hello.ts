// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {db} from '@/configs/firebaseApp';
import { collection, addDoc, getDocs, getDoc, doc, setDoc } from "firebase/firestore"; 
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from "fs";

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import path from 'path';


type Data = {
  name: string
}

// test_posts

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if(req.method === "GET"){
    try {

      const docRef = doc(db, "test_users", "oEIA81LGKSNdRJJY0EUN");
     
      await setDoc(doc(db, "test_users", "my_test_id"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA"
      });
  
      // const docs = await getDoc(docRef);
      // docs.forEach((doc) => {
      //   console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
      // });
    
    } catch (e) {
      console.error("Error adding document: ", e);
    }  
  }

  if(req.method === "POST"){

    try{
      const storage = getStorage();
      const storageRef = ref(storage, 'images/rivers.jpg');
  
      fs.appendFile( path.resolve(__dirname, 'tmp.jpg'), Buffer.from(req.body), () => {
        console.log(__dirname,'save to tmp')
      });
      
      // const uploadTask = uploadBytesResumable(storageRef, req.body);

      

    }catch (e) {
      console.error("Error adding document: ", e);
    }  
  }


  res.status(200).json({ name: 'asd Doe' })
}
