import styled from "styled-components";

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0px 30px;
  .loginInput {
    width: 100%;
    border: none;
    :hover {
      cursor: pointer;
      background-color: #fae100;
    }
  }
  .signInput {
    border: none;
    :hover {
      cursor: pointer;
      background-color: #fae100;
    }
  }
  input {
    border: none;
    padding: 15px 0px;
    font-size: 18px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 25px;
    outline: none;
    ::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
    :focus {
      border-color: #fae100;
    }
  }
`;

export const FindText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;
