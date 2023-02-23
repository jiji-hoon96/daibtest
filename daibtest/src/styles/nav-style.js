import styled from "styled-components";

export const Nav = styled.div`
  position: fixed;
  display: grid;
  gap: 20%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  bottom: 0;
  width: 100%;
  background-color: #f9f9fa;
  padding: 20px 50px;
  box-sizing: border-box;
  border-top: 1px solid rgba(121, 121, 121, 0.3);
`;

export const NavLink = styled.button`
  position: relative;
  border: none;
  background-color: transparent;
  font-size: 24px;
  :hover {
    transform: scale(1.05);
  }
  cursor: pointer;
`;

export const NavAlert = styled.span`
  position: absolute;
  font-size: 16px;
  left: 18px;
  bottom: 18px;
  background-color: tomato;
  color: white;
  width: 18px;
  height: 18px;
  border-radius: 50%;
`;

export const NavAlertDot = styled.span`
  position: absolute;
  font-size: 16px;
  left: 30px;
  bottom: 25;
  background-color: tomato;
  width: 5px;
  height: 5px;
  border-radius: 50%;
`;

export const GridCenter = styled.div`
  display: flex;
  justify-content: center;
`;
