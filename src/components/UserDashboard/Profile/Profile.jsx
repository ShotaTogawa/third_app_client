import React, { useState } from 'react';
import styled from 'styled-components';
import userImage from '../../../assets/images/user.svg';
import UpdateProfileForm from './UpdateProfileForm';
import UserModal from '../UserModal';

const Profile = ({ user, follower, followee, setCurrentUser, posts }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ProfileWrapper>
      {user ? (
        <>
          <ProfileImageBox>
            <UserImage
              src={
                user.image
                  ? process.env.REACT_APP_S3_AVATAR_ACCESS_POINT + user.image
                  : userImage
              }
            />
          </ProfileImageBox>
          <ProfileInfoBox>
            <Name>
              <h2>{user.name}</h2>
              <UpdateButton onClick={() => setIsOpen(true)}>
                Edit User
              </UpdateButton>
              <UserModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <UpdateProfileForm
                  currentUser={user}
                  setIsOpen={setIsOpen}
                  setCurrentUser={setCurrentUser}
                />
              </UserModal>
            </Name>
            <Counter>
              <UL>
                <ListItem>Posts {posts}</ListItem>
                <ListItem>Follow {followee}</ListItem>
                <ListItem>Followers {follower}</ListItem>
              </UL>
            </Counter>
            <Introduction>{user.introduction}</Introduction>
          </ProfileInfoBox>
        </>
      ) : (
        ''
      )}
    </ProfileWrapper>
  );
};

export default Profile;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 70rem;
  height: 20rem;
  margin: 3rem auto 0 auto;
  padding-top: 5rem;
`;

const ProfileImageBox = styled.div`
  display: flex;
  width: 40%;
`;

const UserImage = styled.img`
  width: 18rem;
  height: 18rem;
  margin: 1rem auto 0 auto;
  border-radius: 50%;
  border: 0.2rem solid rgba(109, 213, 250, 0.5);
`;

const ProfileInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const Name = styled.div`
  height: 5rem;
  font-size: 2rem;
  padding-top: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Counter = styled.div`
  display: flex;
  height: 5rem;
`;

const UL = styled.ul`
  display: flex;
  flex-direction: row;
`;

const ListItem = styled.li`
  display: flex;
  list-style: none;
  font-size: 1.5rem;
  padding: 2rem 2rem;
  :first-child {
    padding-left: 0;
  }
`;

const Introduction = styled.div`
  height: 10rem;
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
`;

const UpdateButton = styled.button`
  display: block;
  width: 100px;
  margin-left: 1rem;
  padding: 3px 3px;
  background-color: rgba(109, 213, 250, 0.8);
  color: #fff;
  border: 2px solid #fff;
  border-radius: 50px;
  outline: none;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 15px;
  letter-spacing: 1px;
  cursor: pointer;
  :hover {
    background: linear-gradient(
      rgba(41, 128, 185, 0.3),
      rgba(109, 213, 250, 0.8)
    );
  }
`;
