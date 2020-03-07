import React from 'react';
import Profile from './Profile/Profile';
import ImageLine from './ImageLine/ImageLine';
import NavbarWrapper from './NavBar/NavbarWrapper';

const UserDashboard = () => {
  return (
    <NavbarWrapper>
      <Profile />
      <ImageLine />
    </NavbarWrapper>
  );
};

export default UserDashboard;
