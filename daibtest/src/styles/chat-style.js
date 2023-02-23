import styled from "styled-components";

export const User = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

export const UserColumn = styled.div`
  :first-child {
    display: flex;
    align-items: center;
  }
  :last-child {
    color: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const UserImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 30px;
  margin-right: 20px;
`;

export const UserTitle = styled.h4`
  font-weight: 600;
  font-size: 22px;
`;

export const UserSubTitle = styled.h5`
  margin-top: 8px;
  font-size: 17px;
  color: rgba(0, 0, 0, 0.5);
`;

export const UserTime = styled.span`
  margin-bottom: 10px;
  display: block;
`;

export const AlertNum = styled.div`
  background-color: tomato;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
`;
