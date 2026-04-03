import React, { use } from 'react';
import User from '../User/User';

const Users2 = ({ usersPromise }) => {
  const usersData = use(usersPromise)
  console.log('Users-2 data loading',usersData)
  return (
    <div>
      <h2>This is Users-2</h2>
      <div>
        {usersData.map(user => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users2;