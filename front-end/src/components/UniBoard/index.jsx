import LectureModal from "../LectureModal";
import { SImg, SUniBoard } from "./styles";
import { SLectureModalButton } from "../LectureModalButton/styles";
import { useState } from "react";

// 개별 게시물 component
const UniBoard = ({ data }) => {
  const handleOpen = () => setOpen(true);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <SUniBoard>
      <SImg src={data.thumbnailUrl} />
      <h4 writer={data.writer}>{data.id}</h4>
      <h3 title={data.title}>{data.title}</h3>
      <p summary={data.summary}>{data.title}</p>
      <p end_time={data.end_time}>{data.title}</p>
      <p deadline={data.deadline}>{data.title}</p>
      <SLectureModalButton onClick={handleOpen}>살펴보기</SLectureModalButton>
      <LectureModal
        data={data}
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
      ></LectureModal>
    </SUniBoard>
  );
};

export default UniBoard;
