import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 9px;

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }
  button {
    margin-top: 20px;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const ProfilePicture = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: relative;

  img {
    height: 180px;
    width: 180px;
    border-radius: 50%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 0;
    color: #fff;
    background-color: ${colors.primaryColor};
    width: 46px;
    height: 46px;
    border-radius: 50%;
  }
`;
