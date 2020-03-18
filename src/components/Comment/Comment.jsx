import React from 'react';
import styled from 'styled-components';
import { api } from '../../api';
import userImage from '../../assets/images/user.svg';
import moment from 'moment';

const Comment = ({ id, comment, comments, setComment }) => {
  const handleSubmit = async e => {
    await api.post(`/api/comment/${id}`, { comment });
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

  return (
    <Wrapper>
      <Form onSubmit={e => handleSubmit(e)}>
        <TextArea
          placeholder="comment"
          onChange={e => setComment(e.target.value)}
          value={comment}
        ></TextArea>
        <ButtonLine>
          <Button type="submit">
            <i className="fas fa-plus"></i>
          </Button>
        </ButtonLine>
      </Form>
      <UL>{renderComments(comments)}</UL>
    </Wrapper>
  );
};

export default Comment;

const Wrapper = styled.div`
  margin-top: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  padding-left: 1.5rem;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 3rem;
  margin: 1rem 0;
  padding: 0.2rem 0 0 0.5rem;
  background-color: transparent;
  font-size: 2rem;
  outline: none;
  border-radius: 3rem;
  border: 0.05rem solid #9f9591;
  &::placeholder {
    color: #9f9591;
    fonst-size: 2rem;
    padding-left: 1rem;
  }
`;

const Button = styled.button`
  margin: 1rem 0 0 0.5rem;
  width: 3rem;
  height: 3rem;
  background-color: #009aff;
  color: #fff;
  background: 1da1f2;
  border-radius: 50%;
  outline: none;
  font-family: 'Roboto Condensed', sans-serif;
  cursor: pointer;
  :hover {
    background: linear-gradient(
      rgba(41, 128, 185, 0.3),
      rgba(109, 213, 250, 0.8)
    );
  }
`;

const UL = styled.ul`
  width: 90%;
  height: 24.5rem;
  margin: 0 auto;
  overflow: auto;
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
