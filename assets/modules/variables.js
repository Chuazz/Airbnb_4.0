export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);
//
const header = $("#header");
var exploringItem = $$(".exploring__item-img");
var questionImg = $(".question__img");
var customer = $$(".customer");
var check = $(".check__here");
var customerTab = $$(".customer__tab");
var customerCount = $$(".customer__count");
var petService = $(".pet__service");
var headerLogo = $(".web__logo");
var headerSearch = $(".header__search");
var headerItem = $$(".header__item");
var navEnd = $(".nav__end");
var navEndItem = $$(".nav__end-item");
var navEndRight = $(".end__item-right");
var navMidItem = $$(".nav__mid-item");
var navMidHr = $$(".nav__mid-hr");
var customerItem = $$(".customer__item");
var length = customerItem.length;
var changeLayout = $(".change__language-layout");
var layoutItem = $$(".layout__item");
var layoutContainer = $(".layout__container");
var chooseLayout = $$(".choose__languages");
var turnOnOff = $(".turn__on-off");
var securityCheck = $(".security__check");
var scrollLeft = $(".inspiration__title .fa-angle-left");
var scrollRight = $(".inspiration__title .fa-angle-right");
var inspiration = $(".inspiration-for-the-next-trip");
var navBarMobile = $("#navbar__mobile");
var signUp = $(".sign__up");
var signUpLayout = $(".sign-up__layout");
var translateLanguage = $$(".translate__language");
var countMathPlus = $$(".count__math--plus");
var countMathMinus = $$(".count__math--minus");
var countFunction = $$(".count__function");
var collectionSection = $$(".collection__section");
var navMobileItem = $$(".nav-mobile__item");

export {
    exploringItem, 
    questionImg, 
    customer, 
    check, 
    header,
    customerTab,
    customerCount,
    petService,
    headerLogo,
    headerSearch,
    headerItem,
    navEnd,
    navEndItem,
    navEndRight,
    navMidItem,
    navMidHr,
    customerItem,
    length,
    changeLayout,
    layoutItem,
    layoutContainer,
    chooseLayout,
    turnOnOff,
    securityCheck,
    scrollLeft,
    scrollRight,
    inspiration,
    navBarMobile,
    signUp,
    signUpLayout,
    translateLanguage,
    countMathPlus,
    countMathMinus,
    countFunction,
    collectionSection,
    navMobileItem,
}