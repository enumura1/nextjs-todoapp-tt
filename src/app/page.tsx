// クライアント側で実行
"use client"

// ライブラリのインポート
import { useEffect, useState } from 'react';

// 外部ファイルのインポート
import './globals.css'
import styles from './css/page.module.css';

// 外部関数のインポート
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";


// 外部関数のインポート
import { fetchTodoLists } from './utils/supbaseFunctions';

export default function Home() {

  const [todoLists, setTodoLists] = useState<any>([]);
  
  const updateTodoLists = async () => {
    const updatedTodos = await fetchTodoLists();
    setTodoLists(updatedTodos);
  }

  useEffect(() =>{
    const fetchTodos = async () => {
      const todoLists = await fetchTodoLists();
      setTodoLists(todoLists);
      console.log(todoLists);
    }
    fetchTodos();
  },[]);


  return(
    <main className={styles.mainStyle}>
      <h1 className={styles.titleText}>タイトル</h1>
      <div className={styles.taskListStyle}>
        <AddTask updateTodoLists={updateTodoLists}/>
        <TodoList todoLists={todoLists} />
      </div>
    </main>
  );
}
