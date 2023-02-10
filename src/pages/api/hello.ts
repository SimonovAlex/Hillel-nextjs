// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { db } from "@/configs/firebaseApp";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import path from "path";
import HelloController from "@/controllers/HelloController";
import HelloService from "@/services/HelloService";
import HelloRepositor from "@/repositors/firebase/HelloRepositor";

type Data = {
  name: string;
};

// test_posts

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const rep = new HelloRepositor();
  const service = new HelloService(rep);
  const controller = new HelloController(service);

  if (req.method === "GET") {
    try {
      controller.add({
        name: "Los Angeles",
        id: "dsad,",
        age: 13,
      });

      // const docs = await getDoc(docRef);
      // docs.forEach((doc) => {
      //   console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
      // });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  if (req.method === "POST") {
    try {
      // const storage = getStorage();
      // const storageRef = ref(storage, 'images/rivers.jpg');
      // fs.appendFile( path.resolve(__dirname, 'tmp.jpg'), Buffer.from(req.body), () => {
      //   // console.log(__dirname,'save to tmp')
      // });
      // // const uploadTask = uploadBytesResumable(storageRef, req.body);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  res.status(200).json({ name: "asd Doe" });
}
