// 헤더 - 로고 누르면 홈페이지 리로드
document.querySelector(".logo").addEventListener("click", () => location.reload());

// 헤더 - 앵커 눌러도 페이지 최상단으로 이동하지 않음
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

// 소스코드 편집기(라이브러리) 시작
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
// 소스코드 편집기(라이브러리) 끝

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
  new RandomQuiz("보기에 주어진 h1의 스타일을 빨간색으로 변경하시오.", "imgsrc1", ["color: rgb(255, 0, 0);", "color: red;", "color: #ff0000;", "color: hsl(0, 100%, 50%);"]),
  new RandomQuiz("문제예시2", "imgsrc2", ["display: none;", "visibility: hidden;", "opacity: 0;"]),
]

const question = document.querySelector(".random-title");
const testarray = ["orange", "red", "tomato", "green", "purple"];
const quizguide = document.querySelector(".guide");
let ChangeImg = Math.floor(Math.random() * testarray.length);
let i = 0;
let answerIndex = 0;

document.querySelector("#btn1").addEventListener("click", () => {
  let confirm = editor.getValue();
  for (let cssAnswer of cssQuiz[i].thisAnswer) {
    if (confirm == cssAnswer) {
      quizguide.style.backgroundColor = testarray[ChangeImg];
      console.log(cssAnswer);
    } else {
      console.log("역시나 실패..", cssQuiz[i].thisAnswer[i]);
    }
  }
});

window.onload = () => {
  question.innerHTML = cssQuiz[i].quizTitle;
  quizguide.style.backgroundColor = testarray[ChangeImg];
}

// 배열에 한 번씩 접근하여 (OR) 일치하는 것이 있으면 실행

// document.querySelector("#btn1").onclick = () => {
//   let confirm = editor.getValue();
//   for (let cssAnswer of cssQuiz[i].thisAnswer) {
//     while (i < 2) {
//       i++;
//       if (confirm == cssAnswer) {
//         quizguide.style.backgroundColor = testarray[ChangeImg];
//         console.log(cssAnswer);
//       } else {
//         console.log("역시나 실패..", cssQuiz[i].thisAnswer[i]);
//       }
//     }
//   }
// }

// document.querySelector("#btn1").onclick = () => {
//   let confirm = editor.getValue();
//   for (let cssAnswer of cssQuiz[i].thisAnswer) {
//     if (confirm == cssAnswer) {
//       quizguide.style.backgroundColor = testarray[ChangeImg];
//     }
//   }
// }