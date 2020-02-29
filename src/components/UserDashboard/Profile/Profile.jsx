import React from "react";
import styled from "styled-components";
import userImage from "../../../assets/images/user.svg";

const Profile = () => {
  const a =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ";
  return (
    <ProfileWrapper>
      <ProfileImageBox>
        <UserImage src={userImage} />
      </ProfileImageBox>
      <ProfileInfoBox>
        <Name>
          <h2>Amazon kindle</h2>
        </Name>
        <Counter>
          <UL>
            <ListItem>Posts 10000</ListItem>
            <ListItem>Follow 10000</ListItem>
            <ListItem>Followers 10000</ListItem>
          </UL>
        </Counter>
        <Introduction>{a}</Introduction>
      </ProfileInfoBox>
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
  margin: 0 auto;
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
  font-size: 3rem;
  padding-top: 0.5rem;
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
