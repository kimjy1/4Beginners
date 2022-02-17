// 헤더 - 로고 누르면 홈페이지 리로드
document.querySelector(".logo").addEventListener("click", () => location.reload());

let logo = document.querySelector(".logo");
let liTag = document.querySelectorAll("li");
let search = document.querySelector(".option button:nth-of-type(1)");
let language = document.querySelector(".option button:nth-of-type(2)");
let quizcontainer = document.querySelector(".solution-container");

// 소스코드 편집기(라이브러리) 시작
window.onload = () => {
  const textarea = document.getElementById("editor");
  const editor = CodeMirror.fromTextArea(textarea, {
    firstLineNumber: 1, // 시작 줄 번호 설정
    lineNumbers: true, // 줄번호 표시 설정
    lineWrapping: true, // true면 줄넘김O, false면 줄넘김X
    tabSize: 2, // 들여쓰기 사이즈 설정
    autoRefresh: true, // 초기화할 때 편집기가 표시되지 않은 경우 처음 표시될 때 새로 고쳐지도록 true로 설정할 수 있는 옵션
    autofocus: false, // 포커스 설정
    theme: "lucario", // 테마 설정(CDN)
    autoCloseBrackets: true, // 괄호 자동으로 닫기 설정(CDN)
    mode: "javascript", // 언어 설정(CDN)
  });
  editor.setSize("100%", "400");
}
// 소스코드 편집기(라이브러리) 끝

// 다크모드 이벤트 시작
document.querySelector(".nightmode").addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  document.documentElement.style.transition = "all 0.3s";
})
// 다크모드 이벤트 끝

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

// document.querySelector("#submit-btn").addEventListener("click", () => {
//   let confirm = editor.getValue();
//   for (let cssAnswer of cssQuiz[i].thisAnswer) {
//     if (confirm == cssAnswer) {
//       quizguide.style.backgroundColor = testarray[ChangeImg];
//       console.log(cssAnswer);
//     } else {
//       console.log("역시나 실패..", cssQuiz[i].thisAnswer[i]);
//     }
//   }
// });

// window.onload = () => {
//   question.innerHTML = cssQuiz[i].quizTitle;
//   quizguide.style.backgroundColor = testarray[ChangeImg];
// }

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



