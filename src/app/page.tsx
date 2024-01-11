
// ser/app配下はデフォルトでSSRレンダリングされている

// 外部関数のインポート
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export default function Home() {
  return(
    <main className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-2xl font-bold text-gray-800">App Title</h1>
      <div className="w-2/4 px-4 py-8 bg-pink-200 shadow-md rounded-lg">
        <AddTask></AddTask>
        <TodoList></TodoList>
      </div>
    </main>
  );
}
