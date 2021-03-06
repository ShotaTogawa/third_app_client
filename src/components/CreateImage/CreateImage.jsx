import React, { useState } from 'react';
import NavbarWrapper from '../UserDashboard/NavBar/NavbarWrapper';
import styled from 'styled-components';
import Spinner from '../../components/Common/Spinner';
import { api } from '../../api';
import { ErrorMessage } from '../../components/Common/ErrorMessage';
import { withRouter } from 'react-router-dom';
import { isAuthenticated, setAuthToken } from '../../components/Landing/Auth';

const CreateImage = ({ history }) => {
  const { accessToken } = isAuthenticated();
  const [description, setDescription] = useState('');

  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onFileChange = event => {
    setFile(event.target.files[0]);
  };

  const putImageToBucket = async uploadConfig => {
    await delete api.defaults.headers.common['Authorization'];
    await api.put(uploadConfig.data.url, file, {
      headers: {
        'Content-Type': file.type
      }
    });
    await setAuthToken(accessToken);
    await api.post('/api/photo', {
      description,
      photoUrl: uploadConfig.data.key
    });
  };

  const uploadImage = async () => {
    const uploadConfig = await api.get('/api/upload/image');
    try {
      await putImageToBucket(uploadConfig);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      if (file) {
        await uploadImage();
        setLoading(false);
        history.push('/user');
      } else {
        setError('Photo is required.');
      }
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };
  return (
    <NavbarWrapper>
      <FormWrapper>
        {loading ? <Spinner /> : ''}
        <H2>Share your moment</H2>
        <Form onSubmit={handleSubmit}>
          <Label>
            <Icon className="fas fa-cloud-upload-alt"></Icon>
            UPLOAD Image
            <FileInput type="file" accept="image/*" onChange={onFileChange} />
          </Label>

          <TextArea
            placeholder="Description the moment"
            onChange={e => setDescription(e.target.value)}
            value={description}
          ></TextArea>
          <UploadButton type="submit">Update</UploadButton>
          {error ? <ErrorMessage>{error}</ErrorMessage> : ''}
        </Form>
      </FormWrapper>
    </NavbarWrapper>
  );
};

export default withRouter(CreateImage);

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10rem auto -10rem auto;
  width: 50%;
  height: 50%;
  background-color: #fff;
`;

const Icon = styled.i`
  color: #009aff;
`;

const H2 = styled.h2`
  font-size: 3rem;
  margin-top: 2rem;
  text-align: center;
`;

const Form = styled.form`
  padding: 30px 50px;
  box-sizing: border-box;
`;

const UploadButton = styled.button`
  display: block;
  width: 150px;
  padding: 8px 5px;
  background-color: #009aff;
  color: #fff;
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
  width: 100%;
  height: 10rem;
  margin: 2rem 0;
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

const Label = styled.label`
  font-size: 2rem;
`;

const FileInput = styled.input`
  width: 100%;
  margin-right: 1rem;
  font-family: 'Oswald', sans-serif;
  font-size: 1.5rem;
  color: #000;
  font-weight: bold;
  transition: border-bottom-color 0.8s;
`;
