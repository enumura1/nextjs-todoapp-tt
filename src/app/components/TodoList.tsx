// 外部ファイルのインポート
import styles from '../css/todo.module.css';

const TodoList = () => {
  return (
    <div className={styles.todoList}>
      <ul className={styles.ulstyle}>
        <li className={styles.listElementStyle}>
          <p>ほげ</p>
          <div>
            <button className="text-blue-300 mr-4">編集</button>
            <button className="text-red-300">削除</button>
          </div>
        </li>
      </ul>
    </div>

  )
}

export default TodoList