import styled from "styled-components";

export const StatusBar = styled.div`
  display: flex;
  justify-content: center;
`;

export const StatusBarCol = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
  &:first-child {
    margin: 0px 5px;
    span {
      margin-right: 5px;
    }
  }
  &:nth-child(2) {
    display: flex;
    font-weight: bold;
    justify-content: center;
  }
  &:last-child {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .bolt {
    font-size: 10px;
  }
  .battery {
    margin: 0px 3px;
    font-size: 24px;
  }
  .lock {
    margin: 0px 5px;
  }
`;
