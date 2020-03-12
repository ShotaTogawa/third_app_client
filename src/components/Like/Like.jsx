import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { api } from '../../api';

const Like = ({ photoId }) => {
  const [isLike, setIsLike] = useState(false);
  const [countLike, setCountLike] = useState(0);
  useEffect(() => {
    const fetchLike = async () => {
      const response = await api.get(`/api/like/${photoId}`);
      setIsLike(response.data);
    };
    const fetchCountLike = async () => {
      const response = await api.get(`/api/likes/${photoId}`);
      if (response.data.length === 0) {
        setCountLike(0);
      } else {
        const count = response.data[0];
        setCountLike(count.likes);
      }
    };
    fetchLike();
    fetchCountLike();
  }, [photoId]);

  const like = async e => {
    e.preventDefault();
    await api.post(`/api/like/${photoId}`);
    setCountLike(countLike + 1);
    setIsLike(true);
  };

  const unlike = async e => {
    e.preventDefault();
    await api.delete(`/api/unlike/${photoId}`);
    setCountLike(countLike - 1);

    setIsLike(false);
  };
  return (
    <LikeWrapper>
      {isLike ? (
        <Heart
          className="fas fa-heart"
          onClick={e => unlike(e)}
          color={'red'}
        />
      ) : (
        <Heart className="fas fa-heart" onClick={e => like(e)} color={'#fff'} />
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

const Heart = styled.i`
  margin-left: 1.5rem;
  font-size: 2rem;
  color: ${props => props.color};
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
