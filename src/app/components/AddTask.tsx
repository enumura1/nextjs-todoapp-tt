// 外部ファイルのインポート
import styles from '../css/addTask.module.css';

const AddTask = () => {
  return (
    <form className={styles.formStyle}>
      <input type="text" className={styles.inputTextStyle}/>
      <button className={styles.formBtnStyle}>追加</button>
    </form>
  )
}

export default AddTask