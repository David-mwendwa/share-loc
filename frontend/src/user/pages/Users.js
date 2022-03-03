import React from 'react';
import UsersList from '../components/UsersList';

const defaultImg = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png';
const Users = () => {
  const USERS = [
    { id: 'u1', name: 'David', image: defaultImg, places: 3 },
    { id: 'u2', name: 'James', image: defaultImg, places: 6 },
    { id: 'u3', name: 'Cate', image: defaultImg, places: 2 },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
