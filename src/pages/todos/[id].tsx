import { GetStaticPropsContext } from "next/types";
import { Todo } from "./types";

interface Props {
  todo: Todo;
}

export default function Id({ todo }: Props) {
  
  return (
    <div>
      <h3>
        {todo.id}
        {todo.title}
      </h3>
      <p>{todo.completed}</p>
    </div>
  );
}

export async function getStaticPaths() {

  const dataFetch = async () => {
    const data = await (
      await fetch(`https://jsonplaceholder.typicode.com/todos/`)
    ).json();

    return data;
  };

  const todos: Todo[] = await dataFetch();
  
  return {
    paths: todos.map(todo => ({ params: { id: todo.id.toString() } })),
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context.params?.id as string

  const dataFetch = async () => {
    const data = await (
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    ).json();

    return data;
  };
  const todo = await dataFetch();
  return {
    props: { todo }, // will be passed to the page component as props
  };
}
