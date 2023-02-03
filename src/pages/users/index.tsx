import Head from "next/head";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { User } from "./types";

 

export default function Users() {
    const [data, setData] = useState<Array<User>>([]);

    useEffect(() => {
      const dataFetch = async () => {
        const data = await (
          await fetch("https://jsonplaceholder.typicode.com/users")
        ).json();

        // set state when the data received
        setData(data);
      };
      dataFetch();
    }, []);

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
    </>
  );
}
