import React, { useState, useEffect } from 'react';
import Profile from './Profile/Profile';
import ImageLine from './ImageLine/ImageLine';
import NavbarWrapper from './NavBar/NavbarWrapper';
import { setAuthToken, isAuthenticated } from '../Landing/Auth';
import { api } from '../../api';

const UserDashboard = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [followee, setFollowee] = useState(0);
  const [follower, setFollower] = useState(0);
  const [posts, setPosts] = useState(0);
  const { accessToken } = isAuthenticated();

  useEffect(() => {
    setAuthToken(accessToken);
    const fetchUser = async () => {
      const response = await api.get('/api/user');
      setCurrentUser(response.data[0]);
      setPosts(response.data[0].Photos[0].posts);
      setFollowee(response.data[1].followee.length);
      setFollower(response.data[2].follower.length);
    };
    fetchUser();
  }, [accessToken]);

  return (
    <NavbarWrapper>
      <Profile
        user={currentUser}
        posts={posts}
        followee={followee}
        follower={follower}
        setCurrentUser={setCurrentUser}
      />
      <ImageLine />
    </NavbarWrapper>
  );
};

export default UserDashboard;
