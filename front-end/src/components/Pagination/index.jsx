import React from 'react';
import { SNav, SButton } from './styles';

const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit); // 필요한 페이지 개수

  return (
    <>
      <SNav>
        <SButton onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </SButton>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <SButton key={i + 1} onClick={() => setPage(i + 1)}>
              {i + 1}
            </SButton>
          ))}
        <SButton onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </SButton>
      </SNav>
    </>
  );
};

export default Pagination;
