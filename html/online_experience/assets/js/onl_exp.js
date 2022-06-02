var check = document.querySelector(".check__here");
var header = document.querySelector("#header");
var customerCount = document.querySelectorAll(".customer__count");
var petService = document.querySelector(".pet__service");
var headerLogo = document.querySelector(".web__logo");
var navEnd = document.querySelector(".nav__end");
var navEndItem = document.querySelectorAll(".nav__end-item a");
var navEndRight = document.querySelector(".end__item-right");
var navMidItem = document.querySelectorAll(".nav__mid-item");
var changeLayout = document.querySelector(".change__language-layout");
var layoutItem = document.querySelectorAll(".layout__item");
var chooseLayout = document.querySelectorAll(".choose__languages");
var turnOnOff = document.querySelector(".turn__on-off");
var defaultScroll = 0;

//======================================================================
function start() {
    document.documentElement.addEventListener("click", clickToCloseAll);
    navEndRight.addEventListener("click", clickToSeeAccount);
    navEndItem[1].addEventListener("click", clickToSeeLayout);
    changeLayout.addEventListener("click", clickToCloseTranslate);
    changeLayout.querySelector(".close__layout-icon").addEventListener("click", clickToCloseTranslate);
    layoutItem[0].addEventListener("click", clickToChangeLayout1);
    layoutItem[1].addEventListener("click", clickToChangeLayout2);
}

start();
//===============================================================
function clickToCloseAll(e) {
    if(check.contains(header) == false) {
        document.querySelector(".custommer__account").classList.add("remove");
        petService.classList.add("remove");
    }
    e.stopPropagation();
}
//===============================================================
function clickToSeeAccount(e) {
    document.querySelector(".custommer__account").classList.toggle("remove");
    e.stopPropagation();
}
//===============================================================
changeLayout.querySelector(".layout__container").onclick = function(e){
    e.stopPropagation();
};

function clickToSeeLayout(e) {
    document.documentElement.style.overflowY = "hidden";
    changeLayout.style.display = "flex";
    e.stopPropagation();
};

function clickToCloseTranslate(e) {
    document.documentElement.style.overflowY = "auto";
    changeLayout.style.display = "none";
    e.stopPropagation();
};
//===============================================================

function clickToChangeLayout1(e) {
    changeLayout.querySelector(".translate__container").classList.remove("remove");
    changeLayout.querySelector(".language__recomend").classList.remove("remove");
    layoutItem[0].classList.add("black__color");
    layoutItem[1].classList.remove("black__color");
    chooseLayout[0].classList.remove("remove");
    chooseLayout[1].classList.add("remove");
    changeLayout.querySelector(".layout__item-slash--1").classList.remove("remove");
    changeLayout.querySelector(".layout__item-slash--2").classList.add("remove");
    e.stopPropagation();
}

function clickToChangeLayout2(e) {
    changeLayout.querySelector(".translate__container").classList.add("remove");
    changeLayout.querySelector(".language__recomend").classList.add("remove");
    layoutItem[0].classList.remove("black__color");
    layoutItem[1].classList.add("black__color");
    chooseLayout[0].classList.add("remove");
    chooseLayout[1].classList.remove("remove");
    changeLayout.querySelector(".layout__item-slash--1").classList.add("remove");
    changeLayout.querySelector(".layout__item-slash--2").classList.remove("remove");
    e.stopPropagation();
}
//===============================================================
turnOnOff.addEventListener("click", function(e) {
    turnOnOff.querySelector(".fa-circle-check").classList.toggle("translate9");
    turnOnOff.classList.toggle("background");
    e.stopPropagation();
});
//===============================================================
function clickToCloseSecurity(e) {
    document.querySelector("#security").classList.add("remove");
    e.stopPropagation();
}

function clickToScroll(e, needScroll, unNeed, choice) {
    switch (choice) {
        case 1:
            if(needScroll.classList.contains("cant__click") == false){
                inspiration.scrollLeft += 120;
                if(inspiration.scrollLeft == 450){
                    needScroll.classList.add("cant__click");
                    unNeed.classList.remove("cant__click");
                }
            }
            break;
        case 2:
            if(needScroll.classList.contains("cant__click") == false){
                inspiration.scrollLeft -= 120;
                if(inspiration.scrollLeft == 0){
                    needScroll.classList.add("cant__click");
                    unNeed.classList.remove("cant__click");
                }
            }
            break;
        default:
            break;
    }
    e.stopPropagation();
}