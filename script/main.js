// 헤더 - 로고 누르면 홈페이지 리로드
document.querySelector(".logo").addEventListener("click", () => location.reload());

document.querySelector("a").addEventListener("click", function () {
  return false;
});

const liTag = document.querySelectorAll("li");
const logo = document.querySelector(".logo");
const search = document.querySelector("label:nth-of-type(1)");
const language = document.querySelector("a");
const quizcontainer = document.querySelector(".quiz-container");

// 다크모드 이벤트 시작
document.querySelector("#nightmode").addEventListener("click", function () {
  if (this.checked == true) {
    document.querySelector("body").style.backgroundColor = "#000";
    document.querySelector("body").style.color = "#bdc1c6";
    for (let i = 0; i < liTag.length; i++) {
      liTag[i].classList.add("colorChange");
      logo.style.backgroundImage = "url(./img/night_logo.png)";
      search.style.backgroundImage = "url(./img/night_search.png)";
      language.style.backgroundImage = "url(./img/night_language.png)";
      quizcontainer.style.boxShadow = "none";
    }
  } else if (this.checked == false) {
    document.querySelector("body").style.backgroundColor = "#fff";
    document.querySelector("body").style.color = "#000";
    for (let i = 0; i < liTag.length; i++) {
      liTag[i].classList.remove("colorChange");
      logo.style.backgroundImage = "url(./img/day_logo.png)";
      search.style.backgroundImage = "url(./img/search.png)";
      language.style.backgroundImage = "url(./img/language.png)";
      quizcontainer.style.boxShadow = "5px 5px 5px #cbcbcb";
    }
  }
})
// 다크모드 이벤트 끝

// 메인 - 문제 객체(생성자 함수)
function Question(text, choice, answer) {
  this.text = text; // 질문 텍스트
  this.choice = choice; // 선택할 답들(배열)
  this.answer = answer; // 정답 정보
}

// 퀴즈 정보 객체
function Quiz(questions) {
  this.score = 0; // 점수
  this.questions = questions; // 문제
  this.questionIndex = 0; // 문제 번호
}

// 정답 확인 메서드
Quiz.prototype.correctAnswer = function (answer) {
  return answer == this.questions[this.questionIndex].answer;
}

let questions = [
  new Question("보기에 주어진 수학 객체 중 정수를 변환하지 않는 객체는?", ["Math.random()", "Math.round()", "Math.ceil()", "Math.floor()"], "Math.random()"),
  new Question("다음 HTML 태그 중 종료태그가 필요없는 요소는?", ["li", "p", "tr", "input"], "input"),
  new Question("img 태그의 alt 속성에 대한 올바르지 않은 설명은?", ["이미지를 보여줄 수 없을 때 해당 이미지를 대체할 텍스트를 명시한다.", "만약 이미지가 정보를 포함하고 있다면, 텍스트는 이미지를 묘사해야 함.", "만약 이미지가 <a> 요소 내에 위치하고 있다면, 텍스트는 링크가 어디와 연결되어 있는지를 설명해야 함.", "만약 이미지가 단순한 장식이라면 alt 속성을 생략할 수 있다."], "만약 이미지가 단순한 장식이라면 alt 속성을 생략할 수 있다."),
  new Question("다음 css 적용 우선순위 중 올바른 것을 고르시오.", ["inherit-element-class-id", "element-inherit-id-class", "class-id-inherit-element", "id-class-element-inherit"], "id-class-element-inherit"),
  new Question("json 데이터 타입 중 사용할 수 없는 데이터 타입은?", ["a boolean", "undefined", "an object", "null"], "undefined"),
  new Question("class에 대한 설명으로 틀린 것은?", ["클래스 선언은 함수 선언과 달리 Hoisting되지 않습니다.", "new를 사용하지 않고 클래스 생성자를 호출하면 오류가 발생합니다.", "클래스에서 letructor 이름을 갖는 메소드는 여러 번 만들 수 있다.", "extends 키워드를 통하여 클래스를 상속 받아, 자식 클래스를 만들 수 있습니다."], "클래스에서 letructor 이름을 갖는 메소드는 여러 번 만들 수 있다."),
  new Question("ajax에 대하여 설명으로 틀린 것은?", ["Ajax는 클라이언트가 서버에 데이터를 요청하는 클라이언트 풀링 방식을 사용하므로, 서버 푸시 방식의 실시간 서비스는 만들 수 없습니다.", "웹 페이지가 로드된 후에 서버로 데이터 요청을 보낼 수 있습니다.", "클라이언트의 PC로 Ajax 요청을 보낼 수 있습니다.", "Ajax 스크립트가 포함된 서버가 아닌 다른 서버로 Ajax 요청을 보낼 수는 없습니다."], "클라이언트의 PC로 Ajax 요청을 보낼 수 있습니다."),
  new Question("Git 명령어와 내용 설명 중 옳은 것은?", ["git status - 파일 상태 확인", "git add - 원격 서버로 전송", "git init - 각 파일을 병합", "git branch - 원격 서버 저장소 복제"], "git status - 파일 상태 확인"),
  new Question("CSS 속성 중 축약할 수 없는 속성은?", ["animation", "background", "font", "text"], "text"),
  new Question("HTML 태그 중 윗첨자 텍스트를 표현할 때 쓰는 태그는?", ["sub", "sup", "svg", "samp"], "sup")
];

// 퀴즈 객체 생성
let quiz = new Quiz(questions);

// 문제 출력 함수
function updateQuiz() {
  let question = document.getElementById('question');
  let idx = quiz.questionIndex + 1;
  let choice = document.querySelectorAll('.btn');

  // 문제 출력
  question.innerHTML = '문제' + idx + ') ' + quiz.questions[quiz.questionIndex].text;

  // 선택 출력
  for (let i = 0; i < 4; i++) {
    choice[i].innerHTML = quiz.questions[quiz.questionIndex].choice[i];
  }

  progress();
}

function progress() {
  let progress = document.getElementById('progress');
  progress.innerHTML = '문제 ' + (quiz.questionIndex + 1) + '/ ' + quiz.questions.length;
}

let btn = document.querySelectorAll('.btn');

// 입력 및 정답 확인 함수
function checkAnswer(i) {
  btn[i].addEventListener('click', () => {
    let answer = btn[i].innerText;

    if (quiz.correctAnswer(answer)) {
      alert('정답입니다!');
      quiz.score++;
    } else {
      alert('틀렸습니다!');
    }

    if (quiz.questionIndex < quiz.questions.length - 1) {
      quiz.questionIndex++;
      updateQuiz();
    } else {
      result();
    }
  });
}

function result() {
  let quizDiv = document.querySelector(".quiz-container");
  let per = parseInt((quiz.score * 100) / quiz.questions.length);
  let txt = '<h1>결과</h1>' + '<h2 id="score">당신의 점수: ' + quiz.score + '/' + quiz.questions.length + '<br><br>' + per + '점' + '</h2>';

  quizDiv.innerHTML = txt;

  // 점수별 결과 텍스트
  if (per < 60) {
    txt += '<h2>더 분발하세요</h2>';
    quizDiv.innerHTML = txt;
  } else if (per >= 60 && per < 80) {
    txt += '<h2>무난한 점수네요</h2>'
    quizDiv.innerHTML = txt;
  } else if (per >= 80) {
    txt += '<h2>훌륭합니다</h2>'
    quizDiv.innerHTML = txt;
  }
}

for (let i = 0; i < btn.length; i++) {
  checkAnswer(i);
}

updateQuiz();

const textarea = document.getElementById("editor");
const editor = CodeMirror.fromTextArea(textarea, {
  firstLineNumber: 1, // 시작 줄 번호 설정
  lineNumbers: true, // 줄번호 표시 설정
  lineWrapping: true, // true면 줄넘김O, false면 줄넘김X
  tabSize: 2, // 들여쓰기 사이즈 설정
  mode: "javascript", // 언어 설정
  theme: "darcula", // 테마 설정
  autoRefresh: true, // 초기화할 때 편집기가 표시되지 않은 경우 처음 표시될 때 새로 고쳐지도록 true로 설정할 수 있는 옵션
  smartIndent: true,
  matchbrackets: true,
  autofocus: false, // 포커스 설정
  autoCloseBrackets: true, // 괄호 자동으로 닫기 설정
  lint: true,
  extraKeys: { "Ctrl-Space": "autocomplete" }, // 컨트롤 스페이스를 누르면 자동완성 기능이 나옴.
});
editor.setSize("500", "300");

// 랜덤 문제 객체(생성자 함수)
function RandomQuiz(quizTitle, randomImage, thisAnswer) {
  this.quizTitle = quizTitle;
  this.randomImage = randomImage;
  this.thisAnswer = thisAnswer;
}

RandomQuiz.prototype.confirmAnswer = function (answer1) {
  return answer1 == this.thisAnswer;
}

let cssQuiz = [
  new RandomQuiz("보기에 주어진 h1의 속성을 빨간색으로 변경하시오.", "asdf1", ["color: rgb(255, 0, 0);", "color: red;", "color: #ff0000;", "color: hsl(0, 100%, 50%);"]),
  new RandomQuiz("테스트2.", "asdf2", ["display: none", "visibility: hidden;"]),
]

document.querySelector("#btn1").onclick = () => {
  let testarray = ["orange", "red", "tomato", "green", "purple"];
  let ChangeImg = Math.floor(Math.random() * testarray.length);
  let quizguide = document.querySelector(".guide");
  let confirm = editor.getValue();
  let i = 0;
  for (let cssAnswer of cssQuiz[i].thisAnswer) {
    if (confirm == cssAnswer) {
      quizguide.style.backgroundColor = testarray[ChangeImg];
      console.log(cssQuiz);
    }
  }
}

// 배열에 한 번씩 접근하여 (OR) 일치하는 것이 있으면 실행