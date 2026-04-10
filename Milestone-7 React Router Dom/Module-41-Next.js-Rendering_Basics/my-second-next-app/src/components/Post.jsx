// "use client"
import React, { use } from 'react';

const Post = ({ postsPromise }) => {
  const allPosts = use(postsPromise)
  console.log('All posts', allPosts)
  return <div>
      <h2>All Post: {allPosts.length} </h2>
  </div>;
};

export default Post;