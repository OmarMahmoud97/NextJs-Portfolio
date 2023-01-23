import { useRouter } from "next/router";

function ParentComponent() {
  const router = useRouter();

  return <ChildComponent router={router} />;
}
