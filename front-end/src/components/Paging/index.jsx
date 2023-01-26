import { useState } from "react";
import Pagination from "react-js-pagination";
import "./paging.css";
// import { SPaging } from "../Board/styles";

const Paging = () => {
  const [page, setPage] = useState(1);

  // 페이지 전환 handling
  const handlePageChange = (page) => {
    // page 번호를 누르면 그 page로 이동 by active page change
    setPage(page);
  };

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={6} // 한 페이지에 보이는 항목 개수
      totalItemsCount={10} // 총 항목 수(나중에 보드 리스트.length 계산) - count
      pageRangeDisplayed={5} // 한 번에 보이는 페이지 총 개수
      prevPageText={"<"}
      nextPageText={">"}
      onChange={setPage}
    />
  );
};

export default Paging;
