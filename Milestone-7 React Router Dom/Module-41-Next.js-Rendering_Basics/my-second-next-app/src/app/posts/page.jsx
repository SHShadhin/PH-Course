import Post from "@/components/Post";
import { Suspense } from "react";


const PostsPage = () => {
  const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

  return (
    <div>
      <Suspense fallback={<h2 className="text-2xl text-red-500">Post Loading...</h2>
      }>
        <Post postsPromise={postsPromise}></Post>
      </Suspense>
    </div>
  );
};

export default PostsPage;