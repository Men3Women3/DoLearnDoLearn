package com.example.dolearn.controller;

import com.example.dolearn.domain.Board;
import com.example.dolearn.domain.UserBoard;
import com.example.dolearn.dto.BoardDto;
import com.example.dolearn.exception.CustomException;
import com.example.dolearn.exception.error.ErrorCode;
import com.example.dolearn.response.ErrorResponse;
import com.example.dolearn.response.SuccessResponse;
import com.example.dolearn.service.BoardService;
import com.example.dolearn.service.UserBoardService;
import com.example.dolearn.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/board")
@Slf4j
public class BoardController {

    @Autowired
    private BoardService boardService;

    @Autowired
    private UserBoardService userBoardService;

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<?> insert(@RequestBody BoardDto boardDto){
        try {
            Board board = boardService.insert(boardDto).toEntity();
            log.info("글 등록: {}",boardDto);

            return new ResponseEntity<>(new SuccessResponse(board), HttpStatus.CREATED);
        } catch (Exception e){
            e.printStackTrace();
            return ExceptionHandling("글 등록 과정에서 오류가 발생했습니다!!");
        }
    }

    @GetMapping("/list")
    public ResponseEntity<?> selectAll(){
        try {
            List<BoardDto> boardDtoList = boardService.selectAll();

            for(BoardDto boardDto:boardDtoList){
                boardDto.setCounts(userBoardService.getInstructors(boardDto.getId()).size(),userBoardService.getStudents(boardDto.getId()).size());
            }

            return new ResponseEntity<>(new SuccessResponse(boardDtoList),HttpStatus.OK);
        }catch (CustomException e){
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.NO_BOARD), HttpStatus.NOT_FOUND);
        } catch (Exception e){
            e.printStackTrace();
            return ExceptionHandling("조회 과정에서 오류가 발생했습니다!!");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getDetails(@PathVariable Long id){
        try{
            BoardDto boardDto = boardService.selectDetail(id);

            log.info("글 상세정보 조회: {}",boardDto);

            return new ResponseEntity<>(new SuccessResponse(boardDto),HttpStatus.OK);
        }catch (CustomException e){
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.NO_BOARD), HttpStatus.NOT_FOUND);
        } catch (Exception e){
            e.printStackTrace();
            return ExceptionHandling("해당 글을 조회하는 과정에서 오류가 발생했습니다!!");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        try{
            boardService.deleteBoard(id);

            log.info("삭제할 id: {}",id);

            return new ResponseEntity<>(new SuccessResponse("삭제가 완료되었습니다!!"),HttpStatus.OK);
        }catch (CustomException e){
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.NO_BOARD), HttpStatus.NOT_FOUND);
        }catch (Exception e){
            e.printStackTrace();
            return ExceptionHandling("삭제하는 과정에서 오류가 발생했습니다");
        }
    }

    @GetMapping("/instructor-list/{bid}")
    public ResponseEntity<?> getInstructors(@PathVariable Long bid){
        try{
            log.info("강사 목록 가져오기 요청: {}",bid);
            List<UserBoard> applicants= userBoardService.getInstructors(bid);
            log.info("목록: {}",applicants);

            if(applicants.isEmpty()) return new ResponseEntity<>(new SuccessResponse("신청한 강사가 없습니다"),HttpStatus.OK);
            return new ResponseEntity<>(new SuccessResponse(applicants),HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.NO_INSTRUCTORS), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/student-list/{bid}")
    public ResponseEntity<?> getStudents(@PathVariable Long bid){
        try{
            log.info("학생 목록 가져오기 요청: {}",bid);
            List<UserBoard> applicants = userBoardService.getStudents(bid);

            if(applicants.isEmpty()) return new ResponseEntity<>(new SuccessResponse("신청한 학생이 없습니다."),HttpStatus.OK);
            return new ResponseEntity<>(new SuccessResponse(applicants),HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.NO_STUDENTS), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/search/{keyword}")
    public ResponseEntity<?> search(@PathVariable String keyword){
        try{
            List<Board> bListByTitle = boardService.searchBoardTitle(keyword);
            List<Board> bListByContent = boardService.searchBoardContent(keyword);
            List<Board> bListBySummary = boardService.searchBoardSummary(keyword);

            List<BoardDto> result = boardService.searchResult(bListByTitle,bListByContent,bListBySummary);

            return new ResponseEntity<>(new SuccessResponse(result),HttpStatus.OK);
        }catch (CustomException e){
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.NO_BOARD), HttpStatus.NOT_FOUND);
        }catch (Exception e){
            e.printStackTrace();
            return ExceptionHandling("검색 결과를 가져오는 과정에서 오류가 발생했습니다!!");
        }
    }

    @PostMapping("/student")
    public ResponseEntity<?> applyClass(@RequestBody Map <String, Long> userApplyInfo){
        try{
            Long uid = userApplyInfo.get("uid");
            Long bid = userApplyInfo.get("bid");

            log.info("수강신청: {}, {}",uid,bid);

            UserBoard userBoard = UserBoard.builder().bid(bid).uid(uid).user_type("학생").build();
            userBoardService.applyClass(userBoard);

            return new ResponseEntity<>(new SuccessResponse("강의 신청이 완료되었습니다!!"),HttpStatus.OK);
        }catch (CustomException e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.EXEED_STUDENTS), HttpStatus.CONFLICT);
        }catch (Exception e){
            e.printStackTrace();
            return ExceptionHandling("강의 신청 과정에서 오류가 발생했습니다!!");
        }
    }

    @PostMapping("/instructor")
    public ResponseEntity<?> applyInstructor(@RequestBody Map<String, Long> userApplyInfo){
        try{
            Long uid = userApplyInfo.get("uid");
            Long bid = userApplyInfo.get("bid");

            log.info("강의신청: {}, {}",uid,bid);

            UserBoard userBoard = UserBoard.builder().uid(uid).bid(bid).user_type("강사").build();
            userBoardService.applyClass(userBoard);

            return new ResponseEntity<>(new SuccessResponse("강사 신청이 완료되었습니다!!"),HttpStatus.OK);
        }catch (CustomException e){
            return new ResponseEntity<>(new ErrorResponse(e.getErrorCode()), HttpStatus.NOT_FOUND);
        }catch (Exception e){
            e.printStackTrace();
            return ExceptionHandling("강사 신청 과정에서 오류가 발생했습니다!!");
        }
    }

    @DeleteMapping("apply/{uid}/{bid}")
    public ResponseEntity<?> cancelApply(@PathVariable Long uid, @PathVariable Long bid){
        try{
            log.info("삭제요청: {}, {}",uid,bid);
            int result = userBoardService.cancelApply(uid,bid);

            return new ResponseEntity<>(new SuccessResponse("강의 신청 취소가 완료되었습니다!!"),HttpStatus.OK);
        }catch (CustomException e){
            return new ResponseEntity<>(new ErrorResponse(e.getErrorCode()), HttpStatus.NOT_FOUND);
        }catch (Exception e){
            e.printStackTrace();
            return ExceptionHandling("강의 신청 취소 과정에서 오류가 발생했습니다!!");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateFixed(@PathVariable Long id){
        try{
            BoardDto updateBoard = boardService.update(id);
            log.info("강의 업데이트 완료: {}",updateBoard);
            return new ResponseEntity<>(new SuccessResponse("강의 확정이 완료되었습니다!!"), HttpStatus.OK);
        }catch (CustomException e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.FIXED_LECTURE), HttpStatus.CONFLICT);
        }catch (Exception e){
            e.printStackTrace();
            return ExceptionHandling("강의 확정을 하는 과정에서 오류가 발생했습니다!!");
        }
    }

    public ResponseEntity<String> ExceptionHandling(String errorMessage){
        return new ResponseEntity<>(errorMessage,HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
