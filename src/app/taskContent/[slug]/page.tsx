// import { useRouter } from 'next/router';

// const TaskContentPage = () => {
  
//   const router = useRouter();
//   const { post_id } = router.query;

//   return (
//     <div>
//       <h1>Task Content</h1>
//       <p>{post_id}</p>
//       {/* その他のコンテンツをここに追加 */}
//     </div>
//   );
// };

// export default TaskContentPage;



// クライアント側で実行
"use client"

// 外部関数のインポート
import { updateDesc } from "@/app/utils/supbaseFunctions";
import { useState } from "react";

export default function Page({ params }: { params: { slug: number } }) {
  console.log('params: '+ params.slug)


  const [generatedText, setgeneratedText] = useState('ー');
  const topicId: number = params.slug;

  // テキスト更新
  const handleDescription = async() => {
    updateDesc(topicId, generatedText);
    setgeneratedText('意味のない文章。意味のない文章。意味のない文章。意味のない文章。意味のない文章。')
    alert('登録完了しました')
  }

  return (
    <>
      <h1>トピック：{topicId}</h1>
      <p>{generatedText}</p>
      <button onClick={() => handleDescription()}>登録</button>
    </>
  );
}