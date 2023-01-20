package com.example.dolearn.controller;

import com.example.dolearn.domain.Board;
import com.example.dolearn.domain.BoardApplicant;
import com.example.dolearn.domain.UserBoard;
<<<<<<< HEAD
import com.example.dolearn.dto.BoardApplicantDto;
import com.example.dolearn.dto.BoardDto;
import com.example.dolearn.dto.UserBoardDto;
=======
import com.example.dolearn.dto.BoardDto;
>>>>>>> 3aa42c5e6155d5b3b16e7ca6776799bcbb00100f
import com.example.dolearn.response.SuccessResponse;
import com.example.dolearn.service.BoardService;
import com.example.dolearn.service.UserBoardService;
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
    private BoardService bService;

    @Autowired
    private UserBoardService ubService;

    @PostMapping
    public ResponseEntity<?> insert(@RequestBody BoardDto boardDto){
        try {
            Board board = bService.insert(boardDto);
            log.info("글 등록: {}",boardDto);

            return new ResponseEntity<SuccessResponse>(new SuccessResponse(board), HttpStatus.ACCEPTED);
        } catch (Exception e){
            e.printStackTrace();
            return ExceptionHandling("글 등록 과정에서 오류가 발생했습니다!!");
        }
    }

    @GetMapping("/list")
    public ResponseEntity<?> selectAll(){
        try {
            List<Board> bList= bService.selectAll();
            List<BoardDto> boardDtoList = new ArrayList<>();

            for(int i=0;i<bList.size();i++){
                boardDtoList.add(bList.get(i).toDto());
            }

            return new ResponseEntity<SuccessResponse>(new SuccessResponse(boardDtoList),HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return ExceptionHandling("조회 과정에서 오류가 발생했습니다!!");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getDetails(@PathVariable Long id){
        try{
            Optional<Board> board = bService.selectDetail(id);
            BoardDto boardDto= board.get().toDto();

            log.info("글 상세정보 조회: {}",boardDto);

            return new ResponseEntity<SuccessResponse>(new SuccessResponse(boardDto),HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return ExceptionHandling("해당 글을 조회하는 과정에서 오류가 발생했습니다!!");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        try{
            bService.deleteBoard(id);

            log.info("삭제할 id: {}",id);

            return new ResponseEntity<SuccessResponse>(new SuccessResponse("삭제가 완료되었습니다!!"),HttpStatus.ACCEPTED);
        } catch (Exception e){
            e.printStackTrace();
            return ExceptionHandling("삭제하는 과정에서 오류가 발생했습니다");
        }
    }

    @GetMapping("/instructor-list/{bid}")
    public ResponseEntity<?> getInstructors(@PathVariable Long bid){
        try{
            log.info("강사 목록 가져오기 요청: {}",bid);
            List<BoardApplicant> applicants= ubService.getInstructors(bid);
            log.info("목록: {}",applicants.get(0));

            if(applicants.isEmpty()) return new ResponseEntity<SuccessResponse>(new SuccessResponse("신청한 강사가 없습니다"),HttpStatus.ACCEPTED);
            return new ResponseEntity<SuccessResponse>(new SuccessResponse(applicants),HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return ExceptionHandling("강사 목록을 가져오는 과정에서 오류가 발생했습니다!!");
        }
    }

    @GetMapping("/search/{keyword}")
    public ResponseEntity<?> search(@PathVariable String keyword){
        try{
            List<Board> bListByTitle = bService.searchBoardTitle(keyword);
            List<Board> bListByContent = bService.searchBoardContent(keyword);

            Set<Board> set = new LinkedHashSet<>(bListByTitle);
            set.addAll(bListByContent);

            List<Board> bListResult = new ArrayList<>(set);
            List<BoardDto> result = new ArrayList<>();

            for(int i=0;i<bListResult.size();i++){
                result.add(bListResult.get(i).toDto());
            }

            return new ResponseEntity<SuccessResponse>(new SuccessResponse(result),HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return ExceptionHandling("검색 결과를 가져오는 과정에서 오류가 발생했습니다!!");
        }
    }

    @PostMapping("/student")
    public ResponseEntity<?> applyClass(@RequestBody Map <String, Long> userApplyInfo){
        try{
            UserBoard userBoard = new UserBoard(userApplyInfo.get("uid"),userApplyInfo.get("bid"),"학생");
            ubService.applyClass(userBoard);

            return new ResponseEntity<SuccessResponse>(new SuccessResponse("강의 신청이 완료되었습니다!!"),HttpStatus.ACCEPTED);
        }catch (Exception e){
            e.printStackTrace();
            return ExceptionHandling("강의 신청 과정에서 오류가 발생했습니다!!");
        }
    }

    @PostMapping("/instructor")
    public ResponseEntity<?> applyInstructor(@RequestBody Map<String, Long> userApplyInfo){
        try{
            UserBoard userBoard = new UserBoard(userApplyInfo.get("uid"),userApplyInfo.get("bid"),"강사");
            ubService.applyClass(userBoard);

            return new ResponseEntity<SuccessResponse>(new SuccessResponse("강사 신청이 완료되었습니다!!"),HttpStatus.ACCEPTED);
        }catch (Exception e){
            e.printStackTrace();
            return ExceptionHandling("강사 신청 과정에서 오류가 발생했습니다!!");
        }
    }

    @DeleteMapping("apply/{uid}/{bid}")
    public ResponseEntity<?> cancelApply(@PathVariable Long uid, @PathVariable Long bid){
        try{
            log.info("삭제요청: {}, {}",uid,bid);
            ubService.cancelApply(uid,bid);

            return new ResponseEntity<SuccessResponse>(new SuccessResponse("강의 신청 취소가 완료되었습니다!!"),HttpStatus.ACCEPTED);
        }catch (Exception e){
            e.printStackTrace();
            return ExceptionHandling("강의 신청 취소 과정에서 오류가 발생했습니다!!");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateFixed(@PathVariable Long id){
        try{
            Board updateBoard = bService.update(id);
            log.info("강의 업데이트 완료: {}",updateBoard);
            return new ResponseEntity<SuccessResponse>(new SuccessResponse("강의 확정이 완료되었습니다!!"), HttpStatus.ACCEPTED);
        }catch (Exception e){
            e.printStackTrace();
            return ExceptionHandling("강의 확정을 하는 과정에서 오류가 발생했습니다!!");
        }
    }

    public ResponseEntity<String> ExceptionHandling(String errorMessage){
        return new ResponseEntity<String>(errorMessage,HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
