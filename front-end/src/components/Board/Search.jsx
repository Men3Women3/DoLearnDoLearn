import React, { useState } from 'react';
// import Input from '@mui/joy/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = () => {
  const [search, setSearch] = useState('');

  // input에 입력된 값을 search에 저장
  const onChange = (e) => {
    setSearch(e.currentTarget.value);
  };

  // 검색을 눌렀을 때의 작업 처리
  const onClick = (e) => {
    e.preventDefault();
    console.log(search);
    // 검색~
  };

  // 검색 버튼 대신 enter 키를 눌렀을 때의 작업 처리
  const onEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log(search);
      // 검색~
    }
  };

  return (
    <>
      {/* 어디갔어 내 돋보기..아니..;; */}
      {/* <FontAwesomeIcon icon='fa-solid fa-magnifying-glass' /> */}
      <form className='search-bar'>
        <input
          onChange={onChange}
          onEnter={onEnter}
          value={search}
          placeholder='원하는 강의를 검색하세요'
          aria-label='Search'
          style={{ width: '230px' }}
        />
        <button onClick={onClick} type='submit'>
          검색
        </button>
      </form>
    </>
  );
};

export default Search;
