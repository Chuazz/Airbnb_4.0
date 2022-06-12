//My Functions
import * as myVar from "../modules/variables.js";
var scrollDefault = 0;
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
//======================================================================
export function clickToCloseAll(e) {
    if(myVar.check.contains(myVar.smartFind) == false) {
        document.documentElement.style.overflowY = "auto";
        myVar.customer[0].querySelector(".smart__find").classList.add("remove");
        myVar.customer[0].querySelector(".about__customer").classList.remove("about-customer__background");
        myVar.customer[0].querySelector(".custom-btn__icon").classList.add("un__animation");
        myVar.customer[0].querySelector(".custom-btn__icon").classList.remove("animation");
        myVar.customer[0].querySelector(".custom-btn__icon p").classList.add("remove");

        myVar.customerItem[0].classList.remove("h-3-75", "l-3-75");
        myVar.customerItem[0].classList.add("h-4", "l-4");
        myVar.customerItem[0].classList.remove("customer__item-boxShadow");

        myVar.customerItem[1].querySelector(".item__calender").classList.add("remove");
        myVar.customerItem[1].classList.remove("customer__item-boxShadow");

        myVar.customerItem[2].querySelector(".item__calender").classList.add("remove");
        myVar.customerItem[2].classList.remove("customer__item-boxShadow");

        myVar.customerItem[3].classList.remove("h-4-3");
        myVar.customerItem[3].querySelector(".customer__list").classList.add("remove");
        myVar.customerItem[3].classList.remove("customer__item-boxShadow");
//===============================
        myVar.customer[1].querySelector(".smart__find").classList.add("remove");
        myVar.customer[1].querySelector(".about__customer").classList.remove("about-customer__background");
        myVar.customer[1].querySelector(".custom-btn__icon").classList.add("un__animation");
        myVar.customer[1].querySelector(".custom-btn__icon").classList.remove("animation");
        myVar.customer[1].querySelector(".custom-btn__icon p").classList.add("remove");

        myVar.customerItem[4].querySelector(".smart__find-medium").classList.add("remove");
        myVar.customerItem[4].classList.add("h-6");
        myVar.customerItem[4].classList.remove("h-5");
        myVar.customerItem[4].classList.remove("customer__item-boxShadow");

        myVar.customerItem[5].querySelector(".item__calender").classList.add("remove");
        myVar.customerItem[5].classList.remove("customer__item-boxShadow");
        myVar.customerItem[5].classList.remove("h-7");

        document.querySelector(".custommer__account").classList.add("remove");
        myVar.petService.classList.add("remove");
        myVar.signUpLayout.style.display = "none";

    }
    e.stopPropagation();
}

export function StopPropagation(){
    $$("input").forEach(element => {
        element.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    });

    $(".custommer__account").addEventListener("click", function(e){
        e.stopPropagation();
    });

    $(".sign-up__container").addEventListener("click", function(e){
        e.stopPropagation();
    });

    myVar.customerItem.forEach(element => {
        element.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    });

    myVar.layoutContainer.addEventListener("click", (e) => {
        e.stopPropagation();
    })
}

export function clickToSeeAccount(e) {
    document.querySelector(".custommer__account").classList.toggle("remove");
    e.stopPropagation();
}

export const hoverToSee = (e, element) => {
    element.style.display = "block";
    element.classList.add("hrAnimate");
    e.stopPropagation();
}

export const unHoverToSee = (e, element) => {
    element.style.display = "none";
    e.stopPropagation();
}

export const HrHover = () =>{
    myVar.navMidItem.forEach((element, index) => {
        element.addEventListener("mouseover", (e) => {
            hoverToSee(e, myVar.navMidHr[index]);
        });
        element.addEventListener("mouseout", (e) => {
            unHoverToSee(e, myVar.navMidHr[index]);
        });
    });
}

export const clickToSeeChoiceHanle = (e, hrDisplay, hrHide ,customerDisplay, customerHide, customerItem) => {
    hrDisplay.classList.add("open");
    hrHide.classList.remove("open");

    customerDisplay.querySelector(".smart__find").classList.add("remove");
    customerDisplay.classList.remove("remove");
    customerDisplay.classList.remove("customer2Animate");

    customerHide.classList.add("remove");
    customerHide.querySelector(".about__customer").classList.remove("about-customer__background");

    customerItem.classList.remove("customer__item-boxShadow");
    e.stopPropagation();
}

export const clickToSeeChoice = () => {
    myVar.navMidItem[0].addEventListener("click", (e) => {
        clickToSeeChoiceHanle(e, myVar.navMidHr[0], myVar.navMidHr[1], myVar.customer[0], myVar.customer[1], myVar.customer[4]);
    });
    
    myVar.navMidItem[1].addEventListener("click", (e) => {
        clickToSeeChoiceHanle(e, myVar.navMidHr[1], myVar.navMidHr[0], myVar.customer[1], myVar.customer[0], myVar.customer[0]);
    });
}

export const clickToSeeCustomerTab = () => {
    myVar.customerItem.forEach((element, i) => {
        element.addEventListener("click", (e) => {
            if(window.innerWidth > 943){
                myVar.customer[0].querySelector(".custom-btn__icon p").classList.remove("remove");
                myVar.customer[0].querySelector(".custom-btn__icon").classList.add("animation");
                myVar.customer[0].querySelector(".custom-btn__icon").classList.remove("un__animation");
            }   
            myVar.customerItem[0].classList.add("h-3-75", "l-3-75");
            myVar.customerItem[0].classList.remove("h-4", "l-4");

            myVar.customerItem[4].classList.remove("h-6");
            myVar.customerItem[4].classList.add("h-5");

            myVar.customerTab.forEach((tab, j) => {
                if(i == j){
                    tab.classList.remove("remove");
                    myVar.customerItem[i].classList.add("customer__item-boxShadow");
                }
                else{
                    tab.classList.add("remove");
                    myVar.customerItem[j].classList.remove("customer__item-boxShadow");
                }
            });
            e.stopPropagation();
        });
    });
}

export function clickToSeePetService(e) {
    myVar.petService.classList.remove("remove");
    document.documentElement.style.overflowY = "hidden";
    e.stopPropagation();
}

export const clickToSeeLayout = (e, element) => {
    document.documentElement.style.overflowY = "hidden";
    element.style.display = "flex";
    e.stopPropagation();
}

export function clickToCloseTranslate(e, element) {
    document.documentElement.style.overflowY = "auto";
    element.style.display = "none";
    e.stopPropagation();
}

export const clickToChangeLayout = () => {
    let translateLanguage = $$(".translate__language");
    myVar.layoutItem.forEach((element, i) => {
        element.addEventListener("click", (e) => {
            $(".translate__language.open").classList.remove("open");
            $(".layout__item.black").classList.remove("black");
            $(".layout__item-slash.open").classList.remove("open");

            translateLanguage[i].classList.add("open");
            element.classList.add("black");
            $$(".layout__item-slash")[i].classList.add("open");
        });
    });
}

export function turnOnOff(e) {
    myVar.turnOnOff.querySelector(".fa-circle-check").classList.toggle("translate9");
    myVar.turnOnOff.classList.toggle("background");
    e.stopPropagation();
}

export function clickToCloseSecurity(e) {
    document.querySelector("#security").classList.add("remove");
    e.stopPropagation();
}

export function clickToScroll(scrollRight, scrollLeft, scrollLeftWidth, block) {
    scrollRight.addEventListener("click", (e) => {
        block.scrollLeft += scrollLeftWidth;
        if(block.scrollLeft > 0){
            scrollLeft.classList.remove("cant__click");
        }
    });

    scrollLeft.addEventListener("click", (e) => {
        block.scrollLeft -= scrollLeftWidth;
        if(block.scrollLeft <= 0){
            scrollLeft.classList.add("cant__click");
        }
    })
}

const check = (plus) => {
    var check = false;
    for (let i = 0; i < plus.length; i++) {
        const element = plus[i];
        if(element <= 0){
            check = true;
        }
        else{
            check = false;
            break;
        }
    }
    return check;
}

const sumArr = (plus) => {
    var sum = 0;
    for (let i = 0; i < plus.length; i++) {
        const element = plus[i];
        sum += element;
    }
    return sum;
}

export const  increaseOrDecrease = () =>{
    var plus = [0, 0, 0];
    var plusPet = 0;
    var total = 0;
    myVar.countMathPlus.forEach((element, i) => {
        element.addEventListener("click", () => {
            if(element.classList.contains("count__pet--plus")){
                if(plus[0] == 0){
                    plus[0] = 1;
                    myVar.countFunction[0].innerHTML = plus[0];
                    myVar.customerItem[3].querySelector(".customer__choice").innerHTML = `${sumArr(plus)} khách, ${plusPet} thú cưng`;
                }
                plusPet++;
                myVar.countFunction[i].innerHTML = plusPet;
                myVar.customerItem[3].querySelector(".customer__choice").innerHTML = `${sumArr(plus)} khách, ${plusPet} thú cưng`;
                myVar.countMathMinus[0].classList.remove("cant__click");
                myVar.countMathMinus[i].classList.remove("cant__click");
            }
            else{
                plus[i]++;
                myVar.countFunction[i].innerHTML = plus[i];
                if(plusPet > 0){
                    myVar.customerItem[3].querySelector(".customer__choice").innerHTML = `${sumArr(plus)} khách, ${plusPet} thú cưng`;
                }
                else{
                    myVar.customerItem[3].querySelector(".customer__choice").innerHTML = `${sumArr(plus)} khách`;
                }
                myVar.countMathMinus[i].classList.remove("cant__click");
            }
        });
    });

    myVar.countMathMinus.forEach((element, i) => {
        element.addEventListener("click", () => {
            if(element.classList.contains("count__pet--minus")){
                plusPet--;
                myVar.countFunction[i].innerHTML = plusPet;
                myVar.customerItem[3].querySelector(".customer__choice").innerHTML = `${sumArr(plus)} khách, ${plusPet} thú cưng`;
            }

            else{
                plus[i]--;
                if(plus[i] <= 0){
                    plus[i] = 0;
                    myVar.countFunction[i].innerHTML = plus[i];
                    element.classList.add("cant__click");
                }

                myVar.countFunction[i].innerHTML = plus[i];
                if(plusPet > 0){
                    myVar.customerItem[3].querySelector(".customer__choice").innerHTML = `${sumArr(plus)} khách, ${plusPet} thú cưng`;
                }
                else{
                    myVar.customerItem[3].querySelector(".customer__choice").innerHTML = `${sumArr(plus)} khách`;
                }
            }

            if(plusPet <= 0 && element.classList.contains("count__pet--minus")){
                plusPet = 0;
                myVar.countFunction[i].innerHTML = plusPet;
                myVar.customerItem[3].querySelector(".customer__choice").innerHTML = `${sumArr(plus)} khách`;
                // myVar.countMathMinus[0].classList.remove("cant__click");
                element.classList.add("cant__click");
            }

            if(check(plus) == true){
                myVar.customerItem[3].querySelector(".customer__choice").innerHTML = `Thêm khách`;
            }

            if(check(plus) == true && plusPet > 0){
                plus[0] = 1;
                myVar.countFunction[0].innerHTML = plus[0];
                myVar.customerItem[3].querySelector(".customer__choice").innerHTML = `${sumArr(plus)} khách, ${plusPet} thú cưng`;
            }
        });
    });
}

export const scrollToSee = () => {
    window.addEventListener("scroll", () => {
        if(document.documentElement.scrollTop){
            myVar.header.classList.add("headerAnimate");
            myVar.header.classList.remove("header2Animate");
            myVar.headerLogo.style = "color: var(--rgb_color--light-red)";
            myVar.headerItem[0].classList.add("remove");
            myVar.headerItem[1].querySelector(".nav__mid").classList.add("navMidAnimate");
            myVar.headerItem[1].querySelector(".nav__mid").classList.remove("navMid2Animate");
            myVar.headerItem[1].querySelector(".header__search").classList.remove("h-0", "l-0", "m-0");
            myVar.customer[0].classList.add("customerAnimate");
            myVar.customer[0].classList.remove("customer2Animate");
            myVar.customer[1].classList.add("customerAnimate");
            myVar.customer[1].classList.remove("customer2Animate");
            myVar.navEnd.classList.remove("h-10", "m-11", "l-11");
            myVar.navEnd.classList.add("h-4", "l-4");
            myVar.navEndItem[0].style.color = "#222";
            myVar.navEndItem[1].style.color = "#222";
            document.querySelectorAll(".nav__end-item")[0].classList.add("hover__color");
            document.querySelectorAll(".nav__end-item")[1].classList.add("hover__color");
        }
        else{
            myVar.header.classList.remove("headerAnimate");
            myVar.header.classList.add("header2Animate");
            myVar.headerLogo.style = "color: #fff";
            myVar.headerItem[0].classList.remove("remove");
            myVar.headerItem[1].querySelector(".nav__mid").classList.add("navMid2Animate");
            myVar.headerItem[1].querySelector(".nav__mid").classList.remove("navMidAnimate");
            myVar.headerItem[1].querySelector(".header__search").classList.add("h-0", "l-0", "m-0");
            myVar.customer[0].classList.remove("customerAnimate");
            myVar.customer[0].classList.add("customer2Animate");
    
            myVar.customer[1].classList.remove("customerAnimate");
            myVar.customer[1].classList.add("customer2Animate");
            myVar.navEnd.classList.add("h-10", "m-11", "l-11");
            myVar.navEnd.classList.remove("h-4", "l-4");
            myVar.navEndItem[0].style.color = "#fff";
            myVar.navEndItem[1].style.color = "#fff";
            document.querySelectorAll(".nav__end-item")[0].classList.remove("hover__color");
            document.querySelectorAll(".nav__end-item")[1].classList.remove("hover__color");
        }
    
        if(window.innerWidth <= 749){
            if(document.documentElement.scrollTop > scrollDefault){
                myVar.navBarMobile.classList.add("navbarAnimate");
                myVar.navBarMobile.classList.remove("navbar2Animate");
            }
            else{
                myVar.navBarMobile.classList.remove("navbarAnimate");
                myVar.navBarMobile.classList.add("navbar2Animate");
            }
            scrollDefault = document.documentElement.scrollTop;
        }
    });
}