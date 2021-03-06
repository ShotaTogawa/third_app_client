import React, { useState } from 'react';
import styled from 'styled-components';
import Spinner from '../../Common/Spinner';
import { api } from '../../../api';
import { ErrorMessage } from '../../Common/ErrorMessage';
import { withRouter } from 'react-router-dom';
import { isAuthenticated, setAuthToken } from '../../Landing/Auth';

const UpdateProfileForm = ({ currentUser, setIsOpen, setCurrentUser }) => {
  const { accessToken } = isAuthenticated();
  const [values, setValues] = useState({
    name: currentUser.name,
    email: currentUser.email,
    introduction: currentUser.introduction
  });

  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { name, email, introduction } = values;

  const onFileChange = event => {
    setFile(event.target.files[0]);
  };

  const handleChange = name => event => {
    setError('');
    setValues({ ...values, [name]: event.target.value });
  };

  const putImageToBucket = async uploadConfig => {
    await delete api.defaults.headers.common['Authorization'];
    try {
      await api.put(uploadConfig.data.url, file, {
        headers: {
          'Content-Type': file.type
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  const updateProfileWithPicture = async () => {
    try {
      let uploadConfig = await api.get('/api/upload/avatar');
      await putImageToBucket(uploadConfig);
      setAuthToken(accessToken);
      const response = await api.patch('/api/user/edit', {
        ...values,
        image: uploadConfig.data.key
      });
      setCurrentUser(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const updateProfile = async () => {
    try {
      const response = await api.patch('/api/user/edit', {
        ...values
      });
      setCurrentUser(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      if (file) {
        await updateProfileWithPicture();
      } else {
        await updateProfile();
      }
      setLoading(false);
      setIsOpen(false);
      // history.push('/user')
    } catch (e) {
      // TODO error処置を書く
      setLoading(false);
    }
  };
  return (
    <>
      {loading ? <Spinner /> : ''}
      <H2>Edit Profile</H2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="NAME"
          value={name}
          onChange={handleChange('name')}
        />
        <Input
          type="email"
          placeholder="EMAIL ADDRESS"
          value={email}
          onChange={handleChange('email')}
        />
        <TextArea
          placeholder="INTRODUCTION YOURSELF"
          onChange={handleChange('introduction')}
          value={introduction}
        ></TextArea>
        <Label>
          <i className="fas fa-cloud-upload-alt">&ensp;PROFILE IMAGE UPLOAD</i>
          <FileInput type="file" accept="image/*" onChange={onFileChange} />
        </Label>
        <UpdateButton type="submit">Update</UpdateButton>
        {error ? <ErrorMessage>{error}</ErrorMessage> : ''}
      </Form>
    </>
  );
};

export default withRouter(UpdateProfileForm);

const H2 = styled.h2`
  font-size: 3rem;
  color: #eee;
  margin-top: 2rem;
  text-align: center;
`;

const Form = styled.form`
  width: 100%;
  padding: 30px 50px;
  box-sizing: border-box;
`;

const Input = styled.input`
  width: 60%;
  margin-right: 1rem;
  font-family: 'Oswald', sans-serif;
  font-size: 2rem;
  letter-spacing: 1px;
  color: #eee;
  background-color: transparent;
  border: none;
  outline: none;
  font-weight: bold;
  border-bottom: 2px solid #fff;
  margin-bottom: 30px;
  padding: 10px 0;
  transition: border-bottom-color 0.8s;
  &::placeholder {
    color: #eee;
  }
`;

const UpdateButton = styled.button`
  display: block;
  width: 150px;
  padding: 8px 5px;
  background-color: transparent;
  margin-top: 2rem;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 50px;
  outline: none;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 15px;
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

const TextArea = styled.textarea`
  width: 93%;
  height: 10rem;
  margin-bottom: 2rem;
  background-color: transparent;
  color: #fff;
  font-size: 2rem;
  outline: none;
  border: 0.2rem solid #fff;
  &::placeholder {
    color: #eee;
    fonst-size: 2rem;
    padding: 1rem;
  }
`;

const Label = styled.label`
  color: #fff;
  cursor: pointer;
`;

const FileInput = styled.input`
  // display: none;
  width: 100%;
  margin-right: 1rem;
  font-family: 'Oswald', sans-serif;
  font-size: 2rem;
  color: #eee;
  font-weight: bold;
  transition: border-bottom-color 0.8s;
  &::placeholder {
    color: #eee;
  }
`;
