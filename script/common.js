// 헤더 - 로고 누르면 홈페이지 리로드
document.querySelector(".header__logo").addEventListener("click", () => location.reload());

const logo = document.querySelector(".logo");
const search = document.querySelector(".search");
const language = document.querySelector(".language-change");

// 다크모드 이벤트 시작
document.querySelector("#theme-change").addEventListener("click", event => {
  if (event.target.checked == true) {
    document.documentElement.classList.add("dark-theme");
    search.style.backgroundImage = "url(../img/night_search.png)";
    language.style.backgroundImage = "url(../img/night_language.png)";
  } else {
    document.documentElement.classList.remove("dark-theme");
    search.style.backgroundImage = "url(../img/search.png)";
    language.style.backgroundImage = "url(../img/language.png)";
  }
})
// 다크모드 이벤트 끝