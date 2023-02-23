import React from "react";
import StatusComponent from "../components/StatusComponent";
import { useLocation } from "react-router-dom";

const ChatList = () => {
  const { pathname } = useLocation();
  return (
    <>
      <StatusComponent pathname={pathname} />
      <h1>gg</h1>
    </>
  );
};

export default ChatList;
