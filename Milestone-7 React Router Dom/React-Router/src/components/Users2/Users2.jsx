import React, { use } from 'react';

const Users2 = ({ usersPromise }) => {
  const usersData = use(usersPromise)
  console.log('Users-2 data loading',usersData)
  return (
    <div>
      <h2>This is Users-2</h2>
    </div>
  );
};

export default Users2;