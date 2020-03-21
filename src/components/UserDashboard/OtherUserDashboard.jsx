import React, { useState, useEffect } from 'react';
import OtherUserProfile from './OtherUserDashboard/OtherUserProfile';
import OthersImages from './OtherUserDashboard/OthersImages';
import NavbarWrapper from './NavBar/NavbarWrapper';
import { withRouter } from 'react-router-dom';
import { api } from '../../api';
import { setAuthorizedHeader } from '../../components/Landing/Auth';

const OtherUserDashboard = ({ location }) => {
  const userId = location.pathname.substring(6);
  const [user, setUser] = useState(null);
  const [countFollowee, setCountFollowee] = useState(0);
  const [countFollower, setCountFollower] = useState(0);
  const [followee, setFollowee] = useState(false);
  const [posts, setPosts] = useState(0);

  const fetchUserData = async () => {
    const response = await api.get(`/api/user/${userId}`);
    setUser(response.data[0]);
    if (response.data[0].Photos.length === 0) {
      setPosts(0);
    } else {
      setPosts(response.data[0].Photos[0].posts);
    }
    setCountFollower(response.data[1].followee.length);
    setCountFollowee(response.data[2].follower.length);

    const res = await api.get('/api/user');
    setFollowee(res.data[1].followee);
  };

  useEffect(() => {
    setAuthorizedHeader();
    const fetchUser = async () => {
      fetchUserData();
    };

    fetchUser();
  }, []);

  const handleFollow = async userId => {
    await api.post(`/api/follow/${userId}`);
    await fetchUserData();
  };

  const handleUnfollow = async userId => {
    await api.delete(`api/unfollow/${userId}`);
    await fetchUserData();
  };

  return (
    <NavbarWrapper>
      <OtherUserProfile
        user={user}
        countFollowee={countFollowee}
        countFollower={countFollower}
        followee={followee}
        posts={posts}
        handleFollow={handleFollow}
        handleUnfollow={handleUnfollow}
      />
      <OthersImages userId={userId} posts={posts} />
    </NavbarWrapper>
  );
};

export default withRouter(OtherUserDashboard);
