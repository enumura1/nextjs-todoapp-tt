// クライアント側で実行
"use client"

// 外部ファイルのインポート
import styles from '../css/todo.module.css';

// 外部関数のインポート
import { deleteTask } from '../utils/supbaseFunctions';

// todoListsの型を指定
interface TodoListProps {
  todoLists: any[]; // 実際の型に合わせて修正してください
}

const TodoList = ({ todoLists }: TodoListProps) => {

  const clickedDeleteBtn =async (taskId:number) => {
    await deleteTask(taskId);
  }

  return (
    <div className={styles.todoList}>
      <ul className={styles.ulstyle}>

        {todoLists.map((todotask:any) => (
          // eslint-disable-next-line react/jsx-key
          <li
            key={todotask.id} 
            className={styles.listElementStyle}>
            <p>{todotask.title}</p>
            <div>
              <button className="text-blue-300 mr-4">編集</button>
              <button className="text-red-300" onClick={() => clickedDeleteBtn(todotask.id)}>削除</button>
            </div>
          </li>
        ))};
      </ul>
    </div>
  )
}

export default TodoList