import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { User } from "./types";

export default function Id() {
  const {
    query: { id },
  } = useRouter();

  const [data, setData] = useState<User>();

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      ).json();

      // set state when the data received
      setData(data);
    };
    dataFetch();
  }, []);

  return (
    <div>
      <h3>
        {data?.id}
        {data?.name}
      </h3>
      <p>{data?.email}</p>
    </div>
  );
}
