package com.example.dolearn.controller;

import com.example.dolearn.domain.Board;
import com.example.dolearn.domain.UserBoard;
import com.example.dolearn.dto.BoardDto;
import com.example.dolearn.dto.UserBoardDto;
import com.example.dolearn.dto.UserDto;
import com.example.dolearn.jwt.JwtTokenProvider;
import com.example.dolearn.service.BoardService;
import com.example.dolearn.service.UserBoardService;
import com.example.dolearn.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import java.util.*;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(controllers = BoardController.class)
@WithMockUser
public class BoardControllerTest {

    @MockBean
    private BoardService bService;

    @MockBean
    private UserBoardService ubService;

    @MockBean
    private UserService userService;

    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    JwtTokenProvider jwtTokenProvider;

    BoardDto boardDto1 = BoardDto.builder()
            .id(1L).uid(1L).tid(1L).content("content").deadline("2023-01-18 14:31:59")
            .startTime("2023-01-18 14:31:59").endTime("2023-01-18 14:31:59")
            .isFixed(0).maxCnt(5).summary("summary").title("title").build();

    BoardDto boardDto2 = BoardDto.builder()
            .id(2L).uid(2L).tid(1L).content("content").deadline("2023-01-18 14:31:59")
            .startTime("2023-01-18 14:31:59").endTime("2023-01-18 14:31:59")
            .isFixed(0).maxCnt(5).summary("summary").title("title").build();

    @DisplayName("글 생성 테스트")
    @Test
    public void insertBoardTest() throws Exception{
        BoardDto boardDto = BoardDto.builder()
                .id(1L).uid(1L).tid(1L).content("content").deadline("2023-01-18 14:31:59")
                .startTime("2023-01-18 14:31:59").endTime("2023-01-18 14:31:59")
                .isFixed(0).maxCnt(5).summary("summary").title("title").build();

        when(bService.insert(any())).thenReturn(boardDto);

        mockMvc.perform(post("/board").with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(new ObjectMapper().writeValueAsString(boardDto.toEntity())))
                .andExpect(status().isCreated())
                .andDo(print());

    }

    @DisplayName("강의 요청 게시물 불러오기 테스트")
    @Test
    public void  boardListTest() throws Exception{
        List<BoardDto> boardList = new ArrayList<>();

        boardList.add(boardDto1);
        boardList.add(boardDto2);

        when(bService.selectAll()).thenReturn(boardList);

        mockMvc.perform(get("/board/list"))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @DisplayName("글 상세보기")
    @Test
    public void boadDetilTest() throws Exception{

        when(bService.selectDetail(any())).thenReturn(Optional.ofNullable(boardDto1));

        mockMvc.perform(get("/board/{board_id}",1))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @DisplayName("글 삭제 테스트")
    @Test
    public void boardDeleteTest() throws Exception{
        when(bService.deleteBoard(any())).thenReturn(1);

        mockMvc.perform(delete("/board/{board_id}",2).with(csrf()))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @DisplayName("강사 목록")
    @Test
    public void getInstructorsTest() throws Exception{
        List<UserBoard> result = new ArrayList<>();

        UserDto userDto = UserDto.builder().name("name").email("email").password("password").build();

        UserBoardDto userBoardDto = UserBoardDto.builder()
                .id(1L).board(boardDto1.toEntity()).user(userDto.toEntity()).user_type("강사").build();

        result.add(userBoardDto.toEntity());

        when(ubService.getInstructors(any())).thenReturn(result);

        mockMvc.perform(get("/board/instructor-list/{board_id}",1))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @DisplayName("학생 목록")
    @Test
    public void getStudentsTest() throws Exception{
        List<UserBoard> result = new ArrayList<>();

        UserDto userDto = UserDto.builder().name("name").email("email").password("password").build();

        UserBoardDto userBoardDto = UserBoardDto.builder()
                .id(1L).board(boardDto1.toEntity()).user(userDto.toEntity()).user_type("학생").build();

        result.add(userBoardDto.toEntity());

        when(ubService.getStudents(any())).thenReturn(result);

        mockMvc.perform(get("/board/student-list/{board_id}",1))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @DisplayName("강의 검색")
    @Test
    public void searchBoardTest() throws Exception{
        List<Board> result = new ArrayList<>();

        result.add(boardDto1.toEntity());
        result.add(boardDto2.toEntity());

        when(bService.searchBoardContent(any())).thenReturn(result);
        when(bService.searchBoardTitle(any())).thenReturn(result);

        mockMvc.perform(get("/board/search/{keyword}","title"))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @DisplayName("수강 신청")
    @Test
    public void applyStudentTest() throws Exception{
        Map<String,Long> data =new HashMap<>();

        UserDto userDto = UserDto.builder().id(1L).name("name").email("email").password("password").build();

        UserBoardDto userBoardDto = UserBoardDto.builder()
                .id(1L).bid(1L).uid(1L).board(boardDto1.toEntity()).user(userDto.toEntity()).user_type("학생").build();

        when(userService.signup(any())).thenReturn(userDto);
        when(bService.insert(any())).thenReturn(boardDto1);

        when(ubService.applyClass(any())).thenReturn(userBoardDto);

        data.put("uid",1L);
        data.put("bid",1L);

        mockMvc.perform(post("/board/student").with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(new ObjectMapper().writeValueAsString(data)))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @DisplayName("강사 신청")
    @Test
    public void applyInstructorTest() throws Exception{
        Map<String,Long> data =new HashMap<>();

        UserDto userDto = UserDto.builder().id(1L).name("name").email("email").password("password").build();

        UserBoardDto userBoardDto = UserBoardDto.builder()
                .id(1L).bid(1L).uid(1L).board(boardDto1.toEntity()).user(userDto.toEntity()).user_type("강사").build();

        when(userService.signup(any())).thenReturn(userDto);
        when(bService.insert(any())).thenReturn(boardDto1);

        when(ubService.applyClass(any())).thenReturn(userBoardDto);

        data.put("uid",1L);
        data.put("bid",1L);
        mockMvc.perform(post("/board/instructor").with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(new ObjectMapper().writeValueAsString(data)))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @DisplayName("강의 신청 취소")
    @Test
    public void cancelApplyTest() throws Exception{
        Map<String,Long> data = new HashMap<>();

        data.put("uid",1L);
        data.put("bid",1L);

        when(ubService.cancelApply(any(),any())).thenReturn(1);

        mockMvc.perform(delete("/board/apply/{uid}/{bid}",data.get("uid"),data.get("bid")).with(csrf()))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @DisplayName("강의 확정 업데이트")
    @Test
    public void updateFixedTest() throws Exception{

        when(bService.update(any())).thenReturn(boardDto1);

        mockMvc.perform(put("/board/{board_id}",1).with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(boardDto1.toEntity())))
                .andExpect(status().isOk())
                .andDo(print());
    }
}
