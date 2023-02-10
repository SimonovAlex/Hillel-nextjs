import { NextPageContext } from "next/types";
import { Post } from "./types";

interface Props {
  post: Post;
}

export default function Id({ post }: Props) {
  // console.log('post', post)

  return (
    <div>
      <h3>
        {post.id}
        {post.title}
      </h3>
      <p>{post.body}</p>
    </div>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const {id} = context.query;

  const dataFetch = async () => {
    const data = await (
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    ).json();

    return data;
  };
  const post = await dataFetch();
  return {
    props: { post }, // will be passed to the page component as props
  };
}
