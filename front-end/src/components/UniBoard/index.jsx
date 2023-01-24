import LectureModal from '../LectureModal';
import { SImg, SUniBoard } from './styles';

// 개별 게시물 component
const UniBoard = ({ data }) => {
  return (
    <SUniBoard>
      <SImg src={data.thumbnailUrl} />
      <h4 writer={data.writer}>{data.id}</h4>
      <h3 title={data.title}>{data.title}</h3>
      <p summary={data.summary}>{data.title}</p>
      <p end_time={data.end_time}>{data.title}</p>
      <p deadline={data.deadline}>{data.title}</p>
      <LectureModal data={data}></LectureModal>
    </SUniBoard>
  );
};

export default UniBoard;
