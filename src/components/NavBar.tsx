import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <ul style={{display: "flex", gap: "1rem"}}>
        <li>
          <Link href={"/users"}><h3 style={{color: "blue"}}>users</h3></Link>
        </li>
        <li>
          <Link href={"/posts"}><h3 style={{color: "blue"}}>posts</h3></Link>
        </li>
        <li>
          <Link href={"/todos"}><h3 style={{color: "blue"}}>todos</h3></Link>
        </li>
      </ul>
    </>
  );
}
