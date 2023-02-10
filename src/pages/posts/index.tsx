import Head from "next/head";
import { NextPageContext } from "next";
import Link from 'next/link';
import { Post } from "./types";
import app, { firebaseConfig } from "@/configs/firebaseApp";

interface Props {
  posts: Array<Post>;
}

export default function Users({ posts }: Props) {
  return (
    <>
      <Head>
        <title>users</title>
      </Head>
      <ul data-testid="Posts-list">
        {posts?.map((d) => (
          <li key={d.id}>
            <Link href={`/posts/${d.id}`}>{d.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  // console.log(firebaseConfig);

  const dataFetch = async () => {
    const data = await (
      await fetch("https://jsonplaceholder.typicode.com/posts")
    ).json();

    return data;
  };
  const posts = await dataFetch();
  return {
    props: { posts }, // will be passed to the page component as props
  };
}
