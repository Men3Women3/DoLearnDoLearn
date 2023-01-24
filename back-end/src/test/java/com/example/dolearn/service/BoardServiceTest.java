package com.example.dolearn.service;

import com.example.dolearn.domain.Board;
import com.example.dolearn.domain.BoardApplicant;
import com.example.dolearn.domain.UserBoard;
import com.example.dolearn.dto.BoardApplicantDto;
import com.example.dolearn.dto.BoardDto;
import com.example.dolearn.dto.UserBoardDto;
import com.example.dolearn.repository.BoardRepository;
import com.example.dolearn.repository.UserBoardRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(SpringExtension.class)
public class BoardServiceTest {

    @InjectMocks
    BoardService boardService;

    @InjectMocks
    UserBoardService userBoardService;

    @Mock
    BoardRepository boardRepository;

    @Mock
    UserBoardRepository userBoardRepository;

    private BoardDto boardDto1 = BoardDto.builder()
        .id(1L).uid(1L).tid(1L).content("content").deadline("2023-01-18 14:31:59")
        .start_time("2023-01-18 14:31:59").end_time("2023-01-18 14:31:59")
        .is_fixed(0).max_cnt(5).summary("summary").title("title").build();

    private BoardDto boardDto2 = BoardDto.builder()
            .id(2L).uid(2L).tid(1L).content("content").deadline("2023-01-18 14:31:59")
            .start_time("2023-01-18 14:31:59").end_time("2023-01-18 14:31:59")
            .is_fixed(0).max_cnt(5).summary("summary").title("title").build();

    private UserBoardDto userBoardDto1 = UserBoardDto.builder()
            .id(1L).uid(1L).bid(1L).user_type("학생").build();

    private BoardApplicantDto boardApplicantDto = BoardApplicantDto.builder()
            .id(1L).bid(1L).email("email").blog("blog").facebook("facebook").gender("gender")
            .info("info").point(0).instagram("instagram").imgSrc("imgSrc").password("pwd").refreshToken("")
            .build();

    @DisplayName("글 생성 테스트")
    @Test
    public void BoardCreateTest() throws Exception {

        BoardDto boardDto = BoardDto.builder()
                .id(1L).uid(1L).tid(1L).content("content").deadline("2023-01-18 14:31:59")
                .start_time("2023-01-18 14:31:59").end_time("2023-01-18 14:31:59")
                .is_fixed(0).max_cnt(5).summary("summary").title("title").build();

        when(boardRepository.save(any(Board.class))).thenReturn(boardDto.toEntity());

        Board result = boardService.insert(boardDto);

        assertEquals(boardDto.getContent(),result.getContent());
    }

    @DisplayName("글 목록 전체 조회")
    @Test
    public void boardListTest() throws Exception{
        List<Board> boardList = new ArrayList<>();

        boardList.add(boardDto1.toEntity());
        boardList.add(boardDto2.toEntity());

        when(boardRepository.findAll()).thenReturn(boardList);

        List<Board> result = boardService.selectAll();

        assertEquals(boardList.size(),result.size());
    }

    @DisplayName("글 상세 조회")
    @Test
    public void detailBoardTest() throws Exception {
        when(boardRepository.findById(any())).thenReturn(Optional.ofNullable(boardDto1.toEntity()));

        Optional<Board> result = boardService.selectDetail(any());

        assertEquals(boardDto1.getId(),result.get().getId());
    }


    @DisplayName("제목으로 검색")
    @Test
    public void searchBoardTitleTest() throws Exception{
        List<Board> boardList = new ArrayList<>();

        boardList.add(boardDto1.toEntity());
        boardList.add(boardDto2.toEntity());

        when(boardRepository.findByTitleContaining(any())).thenReturn(boardList);

        List<Board> result = boardService.searchBoardTitle(any());

        assertEquals(boardList.size(),result.size());
    }

    @DisplayName("내용으로 검색")
    @Test
    public void searchBoardContentTest() throws Exception{
        List<Board> boardList = new ArrayList<>();

        boardList.add(boardDto1.toEntity());
        boardList.add(boardDto2.toEntity());

        when(boardRepository.findByContentContaining(any())).thenReturn(boardList);

        List<Board> result = boardService.searchBoardContent(any());

        assertEquals(boardList.size(),result.size());
    }

    @DisplayName("강의 확정 업데이트")
    @Test
    public void updateTest() throws Exception{
        Optional<Board> result = Optional.ofNullable(boardDto1.toEntity());

        when(boardRepository.findById(any())).thenReturn(result);

        when(boardRepository.save(any())).thenReturn(boardDto1.toEntity());

        boardService.update(boardDto1.getId());

        assertEquals(result.get().getIs_fixed(),1);
    }

}
