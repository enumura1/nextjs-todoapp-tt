// クライアント側で実行
"use client"

// 外部ライブラリのインポート
import { useState } from 'react';

// 外部ファイルのインポート
import styles from '../css/addTask.module.css';

// 外部関数のインポート
import { postTodoTask, fetchTodoLists } from '../utils/supbaseFunctions';

// updateTodoLists関数の型を定義
interface AddTaskProps {
  updateTodoLists: () => void;
}

const AddTask = ({ updateTodoLists }: AddTaskProps) => {

  const [title, setTitle] =useState<string>('');

  const clickedAddBtn = async (e:any) => {

    if (title === ''){
      alert('追加タスクの内容が入力されていません。')
      return;
    }

    e.preventDefault();

    await postTodoTask(title);
    updateTodoLists();
    setTitle('');
  }


  return (
    <form className={styles.formStyle} onSubmit={(e) => clickedAddBtn(e)}>
      <input
        type="text"
        className={styles.inputTextStyle}
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button className={styles.formBtnStyle}>追加</button>
    </form>
  )
}

export default AddTask