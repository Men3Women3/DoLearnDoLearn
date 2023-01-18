package com.example.dolearn.controller;

import com.example.dolearn.domain.Board;
import com.example.dolearn.dto.BoardDto;
import com.example.dolearn.service.BoardService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/board")
public class BoardController {

    @Autowired
    private BoardService bService;

    @PostMapping
    public ResponseEntity<?> insert(@RequestBody BoardDto boardDto){
        try {
            Board board = bService.insert(boardDto);
            return new ResponseEntity<Board>(board, HttpStatus.CREATED);
        } catch (Exception e){
            return ExceptionHandling("글 등록 과정에서 오류가 발생했습니다!!");
        }
    }

    @GetMapping("/list")
    public ResponseEntity<?> selectAll(){
        try {
            List<Board> bList= bService.selectAll();
            return new ResponseEntity<List<Board>>(bList,HttpStatus.OK);
        } catch (Exception e){
            return ExceptionHandling("조회 과정에서 오류가 발생했습니다!!");
        }
    }

//    @GetMapping
//    public ResponseEntity<?> getDetails(@PathVariable Long board_id){
//
//    }
//
//    @DeleteMapping
//    public ResponseEntity<?> delete(@PathVariable Long board_id){
//
//    }
//
//    @GetMapping("/instructor-list")
//    public ResponseEntity<?> getInstructors(@RequestAttribute Long board_id){
//
//    }
//
//    @GetMapping("/search")
//    public ResponseEntity<?> search(@PathVariable String keyword){
//
//    }
//
//    @PostMapping("/student")
//    public ResponseEntity<?> applyClass(@RequestBody Map <String, Long> userApplyInfo){
//
//    }
//
//    @PostMapping("/instructor")
//    public ResponseEntity<?> applyInstructor(@RequestBody Map <String, Long> userApplyInfo){
//
//    }
//
//    @DeleteMapping
//    public ResponseEntity<?> cancelClass(@RequestBody Map <String, Long> userApplyInfo){
//
//    }
//
    public ResponseEntity<String> ExceptionHandling(String errorMessage){
        return new ResponseEntity<String>(errorMessage,HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
