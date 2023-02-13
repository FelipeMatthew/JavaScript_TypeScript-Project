import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  input {
    font-size: 18px;
    margin-bottom: 20px;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #ddd;
    border-radius: 4px;

    &:focus {
      border: 1px solid ${primaryColor};
    }
  }
`;
