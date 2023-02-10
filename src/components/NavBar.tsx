import Link from "next/link";
import { Button, Stack } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <>
      <Stack direction="row">
        <Link href={"/users"}>
          <Button variant="link" color="customBlue.light">users</Button>
        </Link>

        <Link href={"/posts"}>
          <Button variant="link" color="customBlue.dark">posts</Button>
        </Link>

        <Link href={"/todos"}>
          <Button variant="link">todos</Button>
        </Link>
      </Stack>
    </>
  );
}
