import React from 'react';
import UsersList from '../components/UsersList';

const defaultImg = 'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-grey-photo-518740741';
const Users = () => {
  const USERS = [
    { id: 'u1', name: 'David', image: defaultImg, places: 3 },
    { id: 'u2', name: 'James', image: defaultImg, places: 6 },
    { id: 'u3', name: 'Cate', image: defaultImg, places: 2 },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
