import Post from "./_component/Post";
import PostForm from "./_component/PostForm";
import Tab from "./_component/Tab";
import style from "./home.module.css";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";

export default function Home(): JSX.Element {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
      </TabProvider>
    </main>
  );
}
