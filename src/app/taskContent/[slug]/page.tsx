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


export default function Page({ params }: { params: { slug: string } }) {
  console.log('params '+params.slug)

  return (
    <h1>My Page</h1>
  );
}