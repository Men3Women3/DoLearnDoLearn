import React, { useState, useRef, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/joy/Input";
import { SLabel } from "./styles";

const Search = () => {
  // 검색 input값
  const [search, setSearch] = useState("");

  // 처음 렌더링 되면 검색바에 focus 되도록
  // ======= 작동 안하는거 확인해보기 =======
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // input에 입력된 값을 search에 저장
  const onChange = (e) => {
    setSearch(e.currentTarget.value);
  };

  // Enter 키를 눌렀을 때의 작업 처리
  const onEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log(search);
      // 검색~
      // 검색 하고 input은 비워줭
      setSearch("");
    }
  };

  return (
    <>
      <SLabel>
        <form className="search-bar">
          <Input
            className="input-box"
            ref={inputRef}
            onChange={onChange}
            onEnter={onEnter}
            value={search}
            placeholder="원하는 강의를 검색하세요"
            aria-label="Search"
            size="lg"
            endDecorator={<SearchIcon />}
          />
        </form>
      </SLabel>
    </>
  );
};

export default Search;
