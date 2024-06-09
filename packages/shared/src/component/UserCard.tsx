import React from 'react';

const UserCard = ({username} : {username?: string}) => {
  return (
    <div style={{border: '1px solid black', padding: '20'}}>
      username : {username ?? 'user'}
      <div>password: 123</div>
    </div>
  );
};

export default UserCard;
