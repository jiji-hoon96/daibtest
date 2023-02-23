import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      404 페이지입니다
      <Link to="/">
        <li>시작화면으로 돌아가기</li>
      </Link>
    </div>
  );
};

export default NotFound;
