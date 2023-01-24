import React from "react";
import { SNav, SButton } from "./styles";

const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit); // 필요한 페이지 개수

  const currentSet = Math.ceil(page / limit); // 현재의 페이징 세트
  const lastSet = Math.ceil(numPages / limit); // 마지막 페이징 세트
  const stPage = limit * (currentSet - 1) + 1;
  const numOfPagesPerSet = currentSet === lastSet ? numPages % limit : limit; // 한 페이지에 보일 페이지 세트 수

  return (
    <>
      <SNav>
        <SButton onClick={() => setPage(1)} disabled={page < 7}>
          &lt;&lt;
        </SButton>
        <SButton onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </SButton>
        {Array(numOfPagesPerSet)
          .fill(stPage)
          .map((_, i) => (
            <SButton key={stPage + i} onClick={() => setPage(stPage + i)}>
              {stPage + i}
            </SButton>
          ))}
        <SButton onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </SButton>
        <SButton
          onClick={() => setPage(numPages)}
          disabled={page > numPages - 7}
        >
          &gt;&gt;
        </SButton>
      </SNav>
    </>
  );
};

export default Pagination;
