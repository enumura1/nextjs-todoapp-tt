// ser/app配下はデフォルトでSSRレンダリングされている

// 外部ファイルのインポート
import './globals.css'
import styles from './css/page.module.css';

// 外部関数のインポート
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export default function Home() {
  return(
    <main className={styles.mainStyle}>
      <h1 className={styles.titleText}>タイトル</h1>
      <div className={styles.taskListStyle}>
        <AddTask></AddTask>
        <TodoList></TodoList>
      </div>
    </main>
  );
}
