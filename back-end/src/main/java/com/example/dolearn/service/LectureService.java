package com.example.dolearn.service;

import com.example.dolearn.domain.Lecture;
import com.example.dolearn.dto.LectureDto;
import com.example.dolearn.exception.CustomException;
import com.example.dolearn.exception.error.ErrorCode;
import com.example.dolearn.repository.LectureRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class LectureService {

    private final LectureRepository lectureRepository;

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
}
