import React from 'react';
import { Link } from 'react-router-dom';

const WriteButton = () => {
  function handleWriteBoard() {
    // 글쓰기 게시판으로 보내줭
    return <Link to='/home' />;
  }

  return <button onClick={handleWriteBoard}>글쓰기</button>;
};

export default WriteButton;
