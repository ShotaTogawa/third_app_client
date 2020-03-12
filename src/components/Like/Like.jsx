import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { api } from '../../api';

const Like = ({ photoId }) => {
  const [isLike, setIsLike] = useState(false);
  const [countLike, setCountLike] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  useEffect(() => {
    const fetchLike = async () => {
      const response = await api.get(`/api/like/${photoId}`);
      setIsLike(response.data[0]);
      if (response.data[1].length === 0) {
        setCountLike(0);
      } else {
        const count = response.data[1][0];
        setCountLike(count.likes);
      }
    };
    fetchLike();
  }, []);

  const like = async e => {
    e.preventDefault();
    setIsDisabled(true);
    const response = await api.post(`/api/like/${photoId}`);
    setIsDisabled(false);
    setCountLike(response.data[0].likes);
    setIsLike(true);
  };

  const unlike = async e => {
    e.preventDefault();
    setIsDisabled(true);
    const response = await api.delete(`/api/unlike/${photoId}`);
    if (response.data.length === 0) {
      setCountLike(0);
    } else {
      setCountLike(response.data[0].likes);
    }
    setIsLike(false);
    setIsDisabled(false);
  };
  return (
    <LikeWrapper>
      {isLike ? (
        <Heart
          className="fas fa-heart"
          onClick={e => unlike(e)}
          color={'red'}
          disabled={isDisabled}
        />
      ) : (
        <Heart
          className="fas fa-heart"
          onClick={e => like(e)}
          color={'#fff'}
          disabled={isDisabled}
        />
      )}
      <Count>{countLike ? countLike : 0}</Count>
    </LikeWrapper>
  );
};

export default Like;

const LikeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Count = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  margin-left: 0.5rem;
`;

const Heart = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  margin-left: 1.5rem;
  font-size: 2rem;
  color: ${props => props.color};
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
