$(function () {
    $('ul.tabs li').click(function () {
        let tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })
});

let aTag = document.querySelectorAll("a");
let divTag = document.querySelectorAll("div");
let liTag = document.querySelectorAll("li");
let logo = document.querySelector(".home");
let search = document.getElementById("search");
let language = document.getElementById("language");

document.querySelector("#nightmode").addEventListener("click", function () {
    if (this.checked == true) {
        document.querySelector("body").style.backgroundColor = "#000";
        document.querySelector("body").style.color = "#fff";
        for (let i = 0; i < 100; i++) {
            aTag[i].style.color = "#fff";
            divTag[i].style.color = "#fff";
            liTag[i].style.color = "#fff";
            logo.style.backgroundImage = "url(../img/night_logo.png)";
            search.style.backgroundImage = "url(../img/night_search.png)";
            language.style.backgroundImage = "url(../img/night_language.png)";
        }
    } else if (this.checked == false) {
        document.querySelector("body").style.backgroundColor = "#fff";
        document.querySelector("body").style.color = "#000";
        for (let i = 0; i < 100; i++) {
            aTag[i].style.color = "#000";
            divTag[i].style.color = "#000";
            liTag[i].style.color = "#000";
            logo.style.backgroundImage = "url(../img/day_logo.png)";
            search.style.backgroundImage = "url(../img/search.png)";
            language.style.backgroundImage = "url(../img/language.png)";
        }
    }
})