import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
  const user = useLoaderData()
  const {website, username} = user
  console.log(user)
  return (
    <div>
      <h2>This is userDetails</h2>
      <h2>UserName : {username} </h2>
      <h2>Website : {website} </h2>
    </div>
  );
};

export default UserDetails;