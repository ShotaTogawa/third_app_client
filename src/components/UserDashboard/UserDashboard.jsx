import React, { useState, useEffect } from 'react';
import Profile from './Profile/Profile';
import NavbarWrapper from './NavBar/NavbarWrapper';
import { setAuthorizedHeader } from '../Landing/Auth';
import { api } from '../../api';
import Image from './ImageLine/Image';

const UserDashboard = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [followee, setFollowee] = useState(0);
  const [follower, setFollower] = useState(0);
  const [posts, setPosts] = useState(0);

  useEffect(() => {
    setAuthorizedHeader();
    const fetchUser = async () => {
      const response = await api.get('/api/user');
      setCurrentUser(response.data[0]);
      console.log(response.data[0]);
      if (response.data[0].Photos.length === 0) {
        setPosts(0);
      } else {
        setPosts(response.data[0].Photos[0].posts);
      }
      setFollowee(response.data[1].followee.length);
      setFollower(response.data[2].follower.length);
    };
    fetchUser();
  }, []);

  return (
    <NavbarWrapper>
      <Profile
        user={currentUser}
        posts={posts}
        followee={followee}
        follower={follower}
        setCurrentUser={setCurrentUser}
      />
      <Image posts={posts} />
    </NavbarWrapper>
  );
};

export default UserDashboard;
