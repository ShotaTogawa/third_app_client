import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { api } from '../../api';
import userImage from '../../assets/images/user.svg';
import moment from 'moment';

const Comment = ({ image_id, setOpenComment }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState();
  const [isLoading, setLoding] = useState(false);

  useEffect(() => {
    const fetchComment = async () => {
      setLoding(true);
      const response = await api.get(`/api/comment/${image_id}`);
      setComments(response.data);
      setLoding(false);
    };
    fetchComment();
  }, [image_id]);

  const handleSubmit = async e => {
    await api.post(`/api/comment/${image_id}`, { comment });
  };

  const renderComments = comments => {
    if (comments === undefined) return '';
    if (typeof comments === 'string')
      return <CommentList>{comments}</CommentList>;
    return comments.map(comment => (
      <CommentList key={comment.id}>
        <CommentUserWrapper>
          {comment.User.image ? (
            <UserImage
              image={
                process.env.REACT_APP_S3_AVATAR_ACCESS_POINT +
                comment.User.image
              }
            />
          ) : (
            <DefaultUserImage src={userImage} />
          )}
          {comment.comment}
        </CommentUserWrapper>
        <p>{moment(comment.createdAt).format('MMM D YYYY')}</p>
      </CommentList>
    ));
  };

  return isLoading ? (
    ''
  ) : (
    <CommentBox key={image_id}>
      <ul>{renderComments(comments)}</ul>
      <Form onSubmit={e => handleSubmit(e)}>
        <TextArea
          placeholder="comment"
          onChange={e => setComment(e.target.value)}
          value={comment}
        ></TextArea>
        <ButtonLine>
          <Button type="submit">Create</Button>
          <CloseButton onClick={() => setOpenComment(false)}>X</CloseButton>
        </ButtonLine>
      </Form>
    </CommentBox>
  );
};

export default Comment;

const CommentBox = styled.div`
  position: fixed;
  margin: -2.2rem 0 2rem 0;
  width: 30rem;
  background: linear-gradient(
    rgba(41, 128, 185, 0.3),
    rgba(109, 213, 250, 0.8)
  );
`;

const Form = styled.form`
  padding: 1rem 2rem;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 8rem;
  margin: 1rem 0;
  background-color: transparent;
  font-size: 2rem;
  outline: none;
  border: 0.05rem solid #9f9591;
  &::placeholder {
    color: #9f9591;
    fonst-size: 2rem;
    padding: 1rem;
  }
`;

const Button = styled.button`
  width: 10rem;
  padding: 6px 3px;
  background-color: #009aff;
  color: #fff;
  border-radius: 50px;
  outline: none;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    background: linear-gradient(
      rgba(41, 128, 185, 0.3),
      rgba(109, 213, 250, 0.8)
    );
  }
`;

const CommentList = styled.li`
  list-style: none;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border-bottom: 0.1rem dot #000;
`;

const UserImage = styled.img`
  width: 3rem;
  height: 3rem;
  margin: 0 1rem 1rem 0;
  background: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  cursor: pointer;
  border: 0.2rem solid rgba(109, 213, 250, 0.5);
`;

const DefaultUserImage = styled.img`
  width: 2rem;
  height: 2rem;
  margin: 0 1rem 1rem 0;
  border-radius: 50%;
  border: 0.2rem solid rgba(109, 213, 250, 0.5);
`;

const CommentUserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const ButtonLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const CloseButton = styled.button`
  background-color: #fff;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  width: 3rem;
  height: 3rem;
  font-weight: bold;
`;
