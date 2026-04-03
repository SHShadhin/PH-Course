import React from 'react';
import { Link } from 'react-router';

const User = ({ user }) => {
  const { id, name, email, phone } = user
  const userStyle = {
    border: '2px solid green',
    borderRadius: '20px',
    padding: '20px',
    margin: '10px',
  }
  return (
    <div style={userStyle}>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone} </p>
      <Link to={`/users2/${id}`}>Details</Link>
    </div>
  );
};

export default User;