import React from "react";
import StatusComponent from "../components/StatusComponent";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaSearch, FaCommentDots, FaMusic, FaCog } from "react-icons/fa";
import {
  ScreenHeader,
  ScreenIcons,
  ScreenTitle,
} from "../styles/chats-header-style";

import {
  AlertNum,
  User,
  UserColumn,
  UserImage,
  UserSubTitle,
  UserTime,
  UserTitle,
} from "../styles/chat-style";
import FootNav from "../components/FootNav";

const MainDiv = styled.div`
  padding: 0px 15px;
`;

const ChatList = () => {
  const { pathname } = useLocation();
  return (
    <>
      <StatusComponent pathname={pathname} />
      <ScreenHeader>
        <ScreenTitle class="screen-header__title">Chats</ScreenTitle>
        <ScreenIcons class="screen-header__icons">
          <FaSearch className="icons" />
          <FaCommentDots className="icons" />
          <FaMusic className="icons" />
          <FaCog className="icons" />
        </ScreenIcons>
      </ScreenHeader>
      <MainDiv>
        <User>
          <UserColumn>
            <UserImage src="https://play-lh.googleusercontent.com/Ob9Ys8yKMeyKzZvl3cB9JNSTui1lJwjSKD60IVYnlvU2DsahysGENJE-txiRIW9_72Vd" />
            <div>
              <UserTitle>KaKaoTalk</UserTitle>
              <UserSubTitle>Please check My Kakao Account Info</UserSubTitle>
            </div>
          </UserColumn>
          <UserColumn>
            <UserTime>21:22</UserTime>
            <AlertNum>1</AlertNum>
          </UserColumn>
        </User>
      </MainDiv>
      <FootNav />
    </>
  );
};

export default ChatList;
