import Head from "next/head";
import { NextPageContext } from "next";
import Link from 'next/link';
import { Todo } from "./types";

interface Props {
  todos: Todo[];
}

export default function Users({ todos }: Props) {
  console.log('envs', process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE);
  
  return (
    <>
      <Head>
        <title>users</title>
      </Head>
      <ul>
        {todos.map((d) => (
          <li key={d.id}>
            <Link href={`/todos/${d.id}`}>{d.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps(context: NextPageContext) {
  const dataFetch = async () => {
    const data = await (
      await fetch("https://jsonplaceholder.typicode.com/todos")
    ).json();

    return data;
  };
  const todos = await dataFetch();
  return {
    props: { todos }, // will be passed to the page component as props
  };
}
