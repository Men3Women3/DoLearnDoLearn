<div align="center">
  <br />
  <img src="./readme_assets/logo.png" width="550px" height="300px"/>
  <br />
  <h1>Do Learn Do Learn Project</h1>
  <br />
</div>

## 목차

1. [**서비스 소개**](#서비스-소개)
2. [**기술 스택**](#기술-스택)
3. [**시스템 아키텍처**](#시스템-아키텍처)
4. [**주요기능 및 데모영상**](#4주요기능-및-데모영상)
5. [**UCC 보러가기**](#UCC-보러가기)
6. [**협업 관리**](#협업-관리)
7. [**개발 멤버 소개**](#개발-멤버-소개)
8. [**프로젝트 기간**](#프로젝트-기간)
9. [**프로젝트 관련 문서**](#프로젝트-관련-문서)

<br/>


## 💡 서비스 소개

### 서비스 슬로건

> 넘쳐나는 강의😥 그러나 내게 꼭 맞는 강의 찾기가 힘들지 않으신가요?<br />
원하는 강의가 없다면 이젠 찾지말고 직접 만들어보세요!!<br />
즉각적인 소통을 통해 주도적인 학습을 진행할 수 있습니다. 
>
#### 더 나은 학습경험을 위한 공간, Dolearn에서 함께 공부하세요! 

<br/>


## 🛠️ 기술 스택

<img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=Java&logoColor=#007396" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <img src="https://img.shields.io/badge/JSON Web Tokens-000000?style=for-the-badge&logo=JSON Web Tokens&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <img src="https://img.shields.io/badge/Spring Security-6DB33F?style=for-the-badge&logo=Spring Security&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <br>
<img src="https://img.shields.io/badge/Gradle-02303A?style=for-the-badge&logo=Gradle&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=NGINX&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <img src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=Ubuntu&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/><br>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <img src="https://img.shields.io/badge/Node.js-339939?style=for-the-badge&logo=Node.js&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <img src="https://img.shields.io/badge/GitLab-FCA121?style=for-the-badge&logo=GitLab&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <br/>

<details><summary> <b> 상세 기술스택 및 버전</b> </summary>

| 구분       | 기술스택                    | 상세내용                 | 버전          |
| -------- | ----------------------- | -------------------- | ----------- |
| 공통     | 형상관리                 | Gitlab               | \-          |
|          | 이슈관리                 | Jira                 | \-          |
|          | 커뮤니케이션             | Mattermost, Notion   | \-          |
| BackEnd  | DB                      | MySQL                | 8.0.21      |
|          |                         | JPA                  | \-          |
|          |                         | QueryDSL             | \-          |
|          | Java                    | OpenJDK              | 11.0.16.1   |
|          | Spring                  | Spring Boot          | 2.4.5       |                
|          | IDE                     | IntelliJ             | \-          |
|          | Build                   | Gradle               | 7.5.1       |
|          | WebRTC                  | Kurento Media Server | 6.18.0      |
|          | WebRTC                  | Kurento              | \-          |
| FrontEnd | HTML5                   |                      | \-          |
|          | CSS3                    |                      | \-          |
|          | JavaScript(ES6)         |                      |\-           |
|          | React                   | React                | 18.2.0      |
|          |                         | styled-components    | 5.3.6       |
|          |                         | axios                | 1.2.3       |
|          | WebSocket               | kurento-utils        | 6.18.0      |
|          | WebSocket               | stompjs              | 2.3.3       |
|          | WebSocket               | sockjs-client        | 1.6.1       |
|          | IDE                     | Visual Studio Code   | 1.75.1      |
| Server   | Server                   | AWS EC2              | \-          |
|          | Server                   | Nginx                 | 1.18.0      |
|          | 플랫폼                    | Ubuntu               | 20.04 LTS   |
|          | 배포                      | Docker               | 20.10.23    |
|          | 배포                      | Jenkins              | 2.375.3     |
|          | IDE                       | MobaXterm            | 23.0        |
| Test     | test                      | Postman              | 10.9.4      |
|          | test                      | JUnit5               | \-          |
|          | test                      | Mockito              | \-          |
|          | test                      | Jacoco               | toolVersion 0.8.7|
|          | test                      | Sonarqube            | \-          |

</details>

<br />


## 🗂️ 시스템 아키텍처

|                              시스템 아키텍처                           |
| :------------------------------------------------------------------------------: |
| ![image](./readme_assets/System Architecture.png) |


|                              CI/CD 배포 흐름도                           |
| :------------------------------------------------------------------------------: |
| ![image](./readme_assets/배포 아키텍처.png) |

<br/>

## 디렉토리 구조 (Front-end)

``` java
C:.
+---assets
|   \---images
|       +---login
|       +---rank
|       +---sns
|       \---thumbnail
+---components
|   +---BoardList
|   +---Calendar
|   +---CardBox
|   +---LectProfile
|   +---LectureCameraContainer
|   +---LectureCancleModal
|   +---LectureChattingContainer
|   +---LectureFixedModal
|   +---LectureModal
|   +---LectureModalButton
|   +---LecturerList
|   +---LiveEvaluationModal
|   +---LiveOptionContainer
|   +---Message
|   +---MessageContainer
|   +---MessageDeleteModal
|   +---MessageDetailModal
|   +---MessageItem
|   +---Navbar
|   +---NewBoard
|   +---Pagination
|   +---Profile
|   +---ProfileCardBox
|   +---ProfileClock
|   +---ProfileEdit
|   +---ProfileSidebar
|   +---RankingItem
|   +---RankingList
|   +---SearchBar
|   +---SimpleSnackbar
|   +---SmallSchedule
|   +---SmallScheduleToggle
|   +---Timer
|   +---TodayScheduleItem
|   +---TotalScheduleItem
|   +---Typing
|   +---UniBoard
|   +---UnScheduleLecture
|   +---UnScheduleLectureItem
|   +---WarningModal
|   \---WriteButton
+---hooks
+---pages
|   +---Board
|   +---Home
|   +---Lecture
|   +---LecturerProfile
|   +---Loading
|   +---Login
|   +---NotFound
|   +---OauthRedirect
|   +---SignUp
|   +---User
|   \---WriteBoard
\---utils
    \---api
```

## 디렉토리 구조 (Back-end)

``` java
C:.
+---main
|   +---generated
|   +---java
|   |   \---com
|   |       \---example
|   |           \---dolearn
|   |               +---config
|   |               +---controller
|   |               +---domain
|   |               +---dto
|   |               +---exception
|   |               |   \---error
|   |               +---handler
|   |               +---jwt
|   |               +---repository
|   |               +---response
|   |               \---service
|   \---resources
\---test
    +---java
    |   \---com
    |       \---example
    |           \---dolearn
    |               +---config
    |               +---controller
    |               +---dto
    |               +---handler
    |               +---repository
    |               \---service
    \---resources
```


<br />


## 🖥️ 주요기능

### 기능1
- 선생님이 수업을 개설하면 해당 수업을 수강하는 학생이 수업에 참여할 수 있습니다.
- 사용자는 비디오, 오디오 ON/OFF를 설정할 수 있습니다.
- 선생님은 원활한 수업진행을 위해 화면공유를 할 수 있습니다. 

### 기능2
- 교사가 시간표에 맞춰 온라인 수업을 개설하면, 해당 수업을 수강하는 학생의 화면에 수업알림 모달창이 나타납니다.
- 또한, 수업 자료(첨부파일)를 확인할 수 있으며, [지금 들어가기] 버튼을 통해 해당 온라인수업에 입장할 수 있습니다.

|                              기능2                       |
| :---------------------------------------------------------------------------: |
|  <img src="./readme_assets/onlineclass.gif" alt="온라인수업" />  |

### 기능3
- 학생, 선생님과 채팅이 가능하며, 지난 채팅 기록도 확인 가능합니다.
- 다른 유저가 채팅을 보내면 채팅 아이콘(말풍선)에 알림 표시가 나타납니다.

|                              기능3                       |
| :---------------------------------------------------------------------------: |
|  <img src="./readme_assets/chat.gif" alt="채팅" />  |

### 기능4
- 교사는 알림장(공지)을 작성할 수 있습니다.
- 카테고리 설정으로, 원하는 학생(학교 전체, 학년, 반)에게 보여지도록 설정합니다.
- toast-ui 에디터를 사용해서 글을 쉽게 편집할 수 있으며, Drag&Drop 으로 편리하게 첨부파일을 추가할 수 있습니다.  

|                              기능4                  |
| :---------------------------------------------------------------------------: |
|  <img src="./readme_assets/notice_teacher.gif" alt="알림장(선생님) " />  |

|                              기능4                  |
| :---------------------------------------------------------------------------: |
|  <img src="./readme_assets/notice_student.gif" alt="알림장(학생) " />  |
    
### 기능5 
- 메인 페이지에서 [설정 > 홈 화면 설정] 을 클릭하면 홈 화면에 배치되는 위젯들을 관리할 수 있습니다.
- 배치를 원하는 위젯을 원하는 순서로 구성할 수 있습니다.

|                              기능5                      |
| :---------------------------------------------------------------------------: |
|  <img src="./readme_assets/widget.gif" alt="홈 화면 설정" />  |

### 기능6
- 사용자의 눈 건강 및 취향을 고려하여 다크모드를 지원합니다.
- 메인 페이지에서 [설정 > 다크모드 on/off] 를 클릭하면 다크모드를 적용할 수 있습니다. 

|                              기능6                     |
| :---------------------------------------------------------------------------: |
|  <img src="./readme_assets/dark_mode.gif" alt="다크모드" />  |

<br/>


## 🎥 [UCC 보러가기](https://youtu.be/Rg4kOlrdI78) 

<br />

<div id="6"></div>

## 👥 협업 관리 

|                            [Jira BurnDown Chart](https://ssafy.atlassian.net/jira/software/c/projects/S08P12A802/boards/1321)                      |
| :---------------------------------------------------------------------------: |
| ![image](./readme_assets/burnDown.png)<br>|

|                            [Notion](https://www.notion.so/881849199de84e15bc1cd665e629d700)                      |
| :---------------------------------------------------------------------------: |
| ![image](./readme_assets/notion2.PNG)   |

<br />


## 👪 개발 멤버 소개 
<table>
    <tr>
        <td height="140px" align="center"> <a href="https://lab.ssafy.com/cksgnlcjswoo">
            <img src="https://secure.gravatar.com/avatar/799af63053cab927de4ec38f390b63eb?s=800&d=identicon" width="140px" /> <br><br> 👑 김찬휘 <br>(Back-End) </a> <br></td>
            <td height="140px" align="center"> <a href="https://lab.ssafy.com/ydg8732">
            <img src="https://secure.gravatar.com/avatar/bc47c2dd995290eab3cbaa296109ba65?s=800&d=identicon" width="140px" /> <br><br> 😶 윤동균 <br>(Back-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://lab.ssafy.com/angly97">
            <img src="https://secure.gravatar.com/avatar/94da6ade3953da8957512d768f812e15?s=800&d=identicon" width="140px" /> <br><br> 😆 민초현 <br>(Back-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://lab.ssafy.com/moxnox63">
            <img src="https://lab.ssafy.com/uploads/-/system/user/avatar/7501/avatar.png?width=400" width="140px" /> <br><br> 😁 정소영 <br>(Front-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://lab.ssafy.com/wjddnjs0528">
            <img src="https://secure.gravatar.com/avatar/a763070ae3b6ebec545dfab0cf0b6430?s=800&d=identicon" width="140px" /> <br><br> 🙄 김정원 <br>(Front-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://lab.ssafy.com/pjw2369">
            <img src="https://secure.gravatar.com/avatar/74eb94ec8232d32ba8ab5b3d0686fe78?s=800&d=identicon" width="140px" /> <br><br> 🙂 박중원 <br>(Front-End) </a> <br></td>
    </tr>
    <tr>
        <td align="center">REST API<br/>WebRTC<br/>WebSocket<br/>Infra<br/>Message<br/>Social Login</td>
        <td align="center">REST API<br/>DataBase<br/>Infra<br/>WebRTC<br/>Board<br/>Lecture<br/></td>
        <td align="center">REST API<br/>CI/CD<br/>Infra<br/>DataBase<br/>JWT Login<br/>User</td>
        <td align="center">UI/UX<br/>React<br/>UCC<br/>Board<br/>Test<br/>Lecture</td>
        <td align="center">UI/UX<br/>React<br/>Design<br/>Message<br/>Profile<br/>MyPage</td>
        <td align="center">UI/UX<br/>React<br/>WebRTC<br/>WebSocket<br/>User<br/>JWT Login</td>
    </tr>
</table>

<br />

## 📆 프로젝트 기간
### 23.01.02 ~ 23.02.17
- 기획 및 설계 : 23.01.02 ~ 23.01.06
- 프로젝트 구현 : 23.01.09 ~ 23.02.10
- 버그 수정 및 산출물 정리 : 23.02.13 ~ 23.02.17

<br />

## 📋 프로젝트 관련 문서
|  구분  |  링크  |
| :--------------- | :---------------: |
| 공통코드 | [공통코드 바로가기](/docs/공통코드.md) |
| 와이어프레임 | [와이어프레임 바로가기](/docs/와이어프레임.md) |
| 컨벤션목록 | [컨벤션목록 바로가기](/docs/컨벤션목록.md) |
| 테스트데이터 | [테스트데이터 바로가기](/docs/테스트데이터.md) |
| ERD | [ERD 바로가기](/docs/ERD.md) |
| 빌드/배포 | [빌드/배포 바로가기](/exec/01_서울_6반_A607_빌드및배포.pdf) |
| 외부서비스 정보 | [외부서비스 정보 바로가기](/exec/02_서울_6반_A607_외부서비스_정보.pdf) |
| 시연 시나리오 | [시연 시나리오 바로가기](/exec/04_서울_6반_A607_시연시나리오.pdf) |
| 발표자료 | [발표자료 바로가기](/docs/서울_6반_A607_발표자료.pdf) |
