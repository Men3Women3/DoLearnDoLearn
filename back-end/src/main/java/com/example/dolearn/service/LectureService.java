package com.example.dolearn.service;

import com.example.dolearn.domain.*;
import com.example.dolearn.dto.BoardDto;
import com.example.dolearn.dto.LectureDto;
import com.example.dolearn.dto.UserLectureDto;
import com.example.dolearn.exception.CustomException;
import com.example.dolearn.exception.error.ErrorCode;
import com.example.dolearn.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class LectureService {

    private final LectureRepository lectureRepository;

    private final UserLectureRepository userLectureRepository;

    private final BoardRepository boardRepository;

    private final UserBoardRepository userBoardRepository;

    private final UserRepository userRepository;

    public LectureDto getDetail(Long lecture_id) {
        Optional<Lecture> lecture = lectureRepository.findById(lecture_id);

        //null이 아니면
        if(lecture.isPresent()) {

            return lecture.get().toMessageDto();
        }

        throw new CustomException(ErrorCode.NO_MESSSAGE);
    }

    public LectureDto save(Lecture lecture){
        return lectureRepository.save(lecture).toDto();
    }

    public UserLectureDto save(UserLecture userLecture) {
        return userLectureRepository.save(userLecture).toDto();
    }

    @Transactional
    public LectureDto update(Long bid, Long Luid) throws Exception{
        Optional<Board> result = boardRepository.findById(bid); //수정할 글 읽어오기

        if(result.isEmpty()) throw new CustomException(ErrorCode.NO_BOARD);//수정할 글이 없는 경우 오류 발생

        if(result.get().getIsFixed()==1) throw new CustomException(ErrorCode.FIXED_LECTURE); //이미 확정된 강의의 경우 오류 발생

        BoardDto board = result.get().toDto();//수정할 글 dto로 변환
        board.setFixed(1);//is_fixed 1로 변환

        Board updatedBoard = boardRepository.save(board.toEntity());//수정한 정보 저장

        Lecture lecture = Lecture.builder()
                .userCnt(0).isDeleted(0).board(updatedBoard).build(); //Lecture 생성

        Lecture updatedLecture = lectureRepository.save(lecture);//생성되었던 lecture 저장

        List<UserBoard> applicantList = userBoardRepository.findStudents(bid); //신청했던 학생 목록 가져오기
        Optional<User> lecturerData = userRepository.findOneById(Luid); //강사의 User 데이터 가져오기

        if(lecturerData.isEmpty()) throw new CustomException(ErrorCode.NO_USER); //강사 데이터가 없는 경우 에러 발생

        UserBoard lecturer = UserBoard.builder()
                .uid(Luid).user(lecturerData.get()).board(updatedBoard).userType("강사").build();//UserBoard 형식으로 강사 데이터 구성

        applicantList.add(lecturer);//목록에 강사 추가

        for(UserBoard userBoard: applicantList){
            UserLecture userLecture = UserLecture.builder()
                    .user(userBoard.getUser()).lecture(updatedLecture).memberType(userBoard.getUserType()).build();//member_board table에 저장하기 위해 UserLecture로 재구성

            userLectureRepository.save(userLecture);//member_board table에 저장
        }

        return updatedLecture.toDto();//확정된 강의 반환
    }
}
