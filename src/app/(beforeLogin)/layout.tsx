import { ReactNode } from "react";
import styles from "@/app/page.module.css";
type Props = {
  children: ReactNode;
  //@ 붙은 이름이 그래로 props 페이지로 들어가게 된다.
  modal: ReactNode;
};

export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}
