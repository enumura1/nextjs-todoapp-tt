import { supabase } from "../utils/supabase";

// 取得
export const fetchTodoLists = async () => {
  const todos = await supabase.from('todo').select('*');
  return todos.data;
};

// タスク追加
export const postTodoTask = async (title:string) => {
  console.log('test: '+title)
  await supabase.from('todo').insert({title:title});
}

// 削除
export const deleteTask =async (id:number) => {
  await supabase.from('todo').delete().eq('id',id);
}

// descriptionを更新
export const updateDesc = async(id : number, dscrp: string) => {
  await supabase.from('todo').update({dscription:dscrp}).eq('id',id);
}