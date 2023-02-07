import Head from "next/head";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { User } from "./types";

export default function Users() {
    const [data, setData] = useState<Array<User>>([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
      const dataFetch = async () => {
        const data = await (
          await fetch("https://jsonplaceholder.typicode.com/users")
        ).json();

        // console.log('d', d);
        // set state when the data received
        setData(data);
      };
      dataFetch();
    }, []);

    const submitHandle = () => {
      fetch('/api/hello', {
        method: "POST",
         body: selectedImage
      })
    }

    const changeHandle = (e) => {
      setSelectedImage(e.target.files[0]);
      console.log(e.target.files[0]);
    }

  return (
    <>
      <Head>
        <title>users</title>
      </Head>
      <ul>
        {data.map((d) => (
          <li key={d.id}><Link href={`/users/${d.id}`}>{d.name}</Link></li>
        ))}
      </ul>

      <input type="file" onChange={changeHandle} />
      {selectedImage && <img src={URL.createObjectURL(selectedImage)} />}
      <button onClick={submitHandle}>
        summit
      </button>
    </>
  );
}