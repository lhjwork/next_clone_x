"use client";

// 클라이언트에서 리다이렉트 하는 방법
import { useRouter } from "next/navigation";
import Main from "../_component/Main";

export default function Login() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return <Main />;
}

//router.push
// localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login

//router.replace
// localhost:3000 -> localhost:3000/i/flow/login
