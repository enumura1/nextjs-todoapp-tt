import { supabase } from "../utils/supabase";

export const fetchTodoLists = async () => {
  const todos = await supabase.from('todo').select('*');
  return todos.data;
};

export const postTodoTask = async (title:string) => {
  console.log('test: '+title)
  await supabase.from('todo').insert({title:title});
}

export const deleteTask =async (id:number) => {
  await supabase.from('todo').delete().eq('id',id);
}