import React from 'react';

const UserDetails = async ({ params }) => {
  const { userId } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = await res.json();
  console.log(userId, 'show me userid')
  return (
    <div className='text-3xl text-red-400'>
      <h2>{user.email}</h2>
      <h2>{user.phone}</h2>
    </div>
  );
};

export default UserDetails;