"use client";
import styles from "@/app/page.module.css";

import zLogo from "../../../../public/zlogo.png";
import Image from "next/image";
import Link from "next/link";
// 클라이언트에서 리다이렉트 하는 방법
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return (
    <>
      <div className={styles.left}>
        {/* next의 Image tag를 사용하면 next가 Image를 자동으로 최적화 해준다. */}
        <Image src={zLogo} alt="logo" />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하게요.</h2>
        <Link href="/i/flow/signup" className={styles.signup}>
          계정 만들기
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/login" className={styles.login}>
          로그인
        </Link>
      </div>
    </>
  );
}

//router.push
// localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login

//router.replace
// localhost:3000 -> localhost:3000/i/flow/login
