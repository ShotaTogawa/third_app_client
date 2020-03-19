import React, { useState, useEffect } from 'react';
import OtherUserProfile from './OtherUserDashboard/OtherUserProfile';
import OthersImages from './OtherUserDashboard/OthersImages';
import NavbarWrapper from './NavBar/NavbarWrapper';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { api } from '../../api';
import { setAuthorizedHeader } from '../../components/Landing/Auth';

const OtherUserDashboard = ({ location }) => {
  const userId = location.pathname.substring(6);
  const [user, setUser] = useState(null);
  const [followee, setFollowee] = useState(0);
  const [follower, setFollower] = useState(0);
  const [posts, setPosts] = useState(0);

  useEffect(() => {
    setAuthorizedHeader();
    const fetchUser = async () => {
      const response = await api.get(`/api/user/${userId}`);
      setUser(response.data[0]);
      if (!setPosts(response.data[0].Photos[0])) {
        setPosts(0);
      } else {
        setPosts(response.data[0].Photos[0].posts);
      }
      setFollowee(response.data[1].followee.length);
      setFollower(response.data[2].follower.length);
    };
    fetchUser();
  }, [userId]);

  return (
    <NavbarWrapper>
      <OtherUserProfile
        user={user}
        followee={followee}
        follower={follower}
        posts={posts}
      />
      <OthersImages userId={userId} posts={posts} />
    </NavbarWrapper>
  );
};

export default withRouter(OtherUserDashboard);
