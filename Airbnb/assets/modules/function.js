//My Functions
import * as myVar from "../modules/variables.js";
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
    myVar.smartFind.addEventListener("click", function(e){
        e.stopPropagation();
    });

    document.querySelectorAll("input")[0].addEventListener("click", function(e){
        e.stopPropagation();
    });
    
    document.querySelectorAll("input")[1].addEventListener("click", function(e){
        e.stopPropagation();
    });

    document.querySelector(".custommer__account").addEventListener("click", function(e){
        e.stopPropagation();
    });

    document.querySelector(".sign-up__container").addEventListener("click", function(e){
        e.stopPropagation();
    })

    for(var i = 0; i < length; ++i){
        myVar.customerItem[i].addEventListener("click", function(e){
            e.stopPropagation();
        })
    };
}

export function clickToSeeAccount(e) {
    document.querySelector(".custommer__account").classList.toggle("remove");
    e.stopPropagation();
}

export function hoverToSee1(e) {
    myVar.hr1.style.display = "block";
    myVar.hr1.classList.add("hrAnimate");
    e.stopPropagation();
};

export function unHoverToSee1(e) {
    myVar.hr1.style.display = "none";
};

export function hoverToSee2(e) {
    myVar.hr2.style.display = "block";
    myVar.hr2.classList.add("hrAnimate");
    e.stopPropagation();
};

export function unHoverToSee2(e) {
    myVar.hr2.style.display = "none";
    e.stopPropagation();
};

export function clickToSeeChoice1(e){
    myVar.hr1.classList.add("open");
    myVar.hr2.classList.remove("open");
    myVar.customer[0].querySelector(".smart__find").classList.add("remove");
    myVar.customer[0].classList.remove("remove");
    myVar.customer[0].classList.remove("customer2Animate");
    myVar.customer[1].classList.add("remove");
    myVar.customerItem[4].classList.remove("customer__item-boxShadow");
    myVar.customer[1].querySelector(".about__customer").classList.remove("about-customer__background");
    e.stopPropagation();
};

export function clickToSeeChoice2(e) {   
    myVar.hr2.classList.add("open");
    myVar.hr1.classList.remove("open");
    myVar.customer[0].classList.add("remove");
    myVar.customer[1].classList.remove("remove");
    myVar.customer[1].classList.remove("customer2Animate");
    myVar.customer[1].querySelector(".smart__find").classList.add("remove");
    myVar.customerItem[0].classList.remove("customer__item-boxShadow");
    myVar.customer[0].querySelector(".about__customer").classList.remove("about-customer__background");
    e.stopPropagation();
};

export function clickToSeeSmartFind1(e) {
    if(window.innerWidth > 943){
        myVar.customer[0].querySelector(".custom-btn__icon p").classList.remove("remove");
        myVar.customer[0].querySelector(".custom-btn__icon").classList.add("animation");
        myVar.customer[0].querySelector(".custom-btn__icon").classList.remove("un__animation");
    }   
    myVar.customer[0].querySelector(".about__customer").classList.add("about-customer__background");
    myVar.customerItem[0].querySelector(".smart__find").classList.remove("remove");
    myVar.customerItem[0].classList.add("h-3-75", "l-3-75");
    myVar.customerItem[0].classList.remove("h-4", "l-4");
    myVar.customerItem[0].classList.add("customer__item-boxShadow");
    myVar.customerItem[1].querySelector(".item__calender").classList.add("remove");
    myVar.customerItem[1].classList.remove("customer__item-boxShadow");
    myVar.customerItem[2].querySelector(".item__calender").classList.add("remove");
    myVar.customerItem[2].classList.remove("customer__item-boxShadow");
    myVar.customerItem[3].classList.add("h-4-3");
    myVar.customerItem[3].querySelector(".customer__list").classList.add("remove");
    myVar.customerItem[3].classList.remove("customer__item-boxShadow");
    e.stopPropagation();
};

export function clickToSeeCalender(e) {
    if(window.innerWidth > 943){
        myVar.customer[0].querySelector(".custom-btn__icon p").classList.remove("remove");
        myVar.customer[0].querySelector(".custom-btn__icon").classList.add("animation");
        myVar.customer[0].querySelector(".custom-btn__icon").classList.remove("un__animation");
    }   
    myVar.customerItem[0].querySelector(".smart__find").classList.add("remove");
    myVar.customerItem[0].classList.add("h-3-75", "l-3-75");
    myVar.customerItem[0].classList.remove("h-4", "l-4"); 
    myVar.customerItem[0].classList.remove("customer__item-boxShadow");
    myVar.customerItem[1].querySelector(".item__calender").classList.remove("remove");
    myVar.customerItem[1].classList.add("customer__item-boxShadow");
    myVar.customerItem[2].querySelector(".item__calender").classList.add("remove");
    myVar.customerItem[2].classList.remove("customer__item-boxShadow");
    myVar.customerItem[3].classList.add("h-4-3");
    myVar.customerItem[3].querySelector(".customer__list").classList.add("remove");
    myVar.customerItem[3].classList.remove("customer__item-boxShadow");
    e.stopPropagation();
}

export function clickToSeeCalender2(e) {
    if(window.innerWidth > 943){
        myVar.customer[0].querySelector(".custom-btn__icon p").classList.remove("remove");
        myVar.customer[0].querySelector(".custom-btn__icon").classList.add("animation");
        myVar.customer[0].querySelector(".custom-btn__icon").classList.remove("un__animation");
    }   
    myVar.customerItem[0].querySelector(".smart__find").classList.add("remove");
    myVar.customerItem[0].classList.add("h-3-75", "l-3-75");
    myVar.customerItem[0].classList.remove("h-4", "l-4"); 
    myVar.customerItem[0].classList.remove("customer__item-boxShadow");
    myVar.customerItem[1].querySelector(".item__calender").classList.add("remove");
    myVar.customerItem[1].classList.remove("customer__item-boxShadow");
    myVar.customerItem[2].querySelector(".item__calender").classList.remove("remove");
    myVar.customerItem[2].classList.add("customer__item-boxShadow");
    myVar.customerItem[3].classList.add("h-4-3");
    myVar.customerItem[3].querySelector(".customer__list").classList.add("remove");
    myVar.customerItem[3].classList.remove("customer__item-boxShadow");
    e.stopPropagation();
}

export function clickToSeeCustomerList(e) {
    if(window.innerWidth > 943){
        myVar.customer[0].querySelector(".custom-btn__icon p").classList.remove("remove");
        myVar.customer[0].querySelector(".custom-btn__icon").classList.add("animation");
        myVar.customer[0].querySelector(".custom-btn__icon").classList.remove("un__animation");
    }   
    myVar.customer[0].querySelector(".about__customer").classList.add("about-customer__background");
    myVar.customerItem[0].classList.remove("customer__item-boxShadow");
    myVar.customerItem[0].querySelector(".smart__find").classList.add("remove");
    myVar.customerItem[0].classList.add("h-3-75", "l-3-75");
    myVar.customerItem[0].classList.remove("h-4", "l-4");
    myVar.customerItem[1].querySelector(".item__calender").classList.add("remove");
    myVar.customerItem[1].classList.remove("customer__item-boxShadow");
    myVar.customerItem[2].querySelector(".item__calender").classList.add("remove");
    myVar.customerItem[2].classList.remove("customer__item-boxShadow");
    myVar.customerItem[3].classList.add("h-4-3");
    myVar.customerItem[3].querySelector(".customer__list").classList.remove("remove");
    myVar.customerItem[3].classList.add("customer__item-boxShadow");
    e.stopPropagation();
}

export function clickToSeePetService(e) {
    myVar.petService.classList.remove("remove");
    document.documentElement.style.overflowY = "hidden";
    e.stopPropagation();
}

export function clickToSeeSmartFind2(e) {
    if(window.innerWidth > 943){
        myVar.customerItem[5].querySelector(".custom-btn__icon p").classList.remove("remove");
        myVar.customerItem[5].querySelector(".custom-btn__icon").classList.add("animation");
        myVar.customerItem[5].querySelector(".custom-btn__icon").classList.remove("un__animation");
    }
    myVar.customer[1].querySelector(".about__customer").classList.add("about-customer__background");
    myVar.customerItem[4].querySelector(".smart__find-medium").classList.remove("remove");
    myVar.customerItem[4].classList.remove("h-6");
    myVar.customerItem[4].classList.add("h-5");
    myVar.customerItem[4].classList.add("customer__item-boxShadow");
    myVar.customerItem[5].querySelector(".item__calender").classList.add("remove");
    myVar.customerItem[5].classList.add("h-7");
    myVar.customerItem[5].classList.remove("customer__item-boxShadow");
    e.stopPropagation();
};

export function clickToSeeCalender3(e) {
    if(window.innerWidth > 943){
        myVar.customerItem[5].querySelector(".custom-btn__icon p").classList.remove("remove");
        myVar.customerItem[5].querySelector(".custom-btn__icon").classList.add("animation");
        myVar.customerItem[5].querySelector(".custom-btn__icon").classList.remove("un__animation");
    }
    myVar.customer[1].querySelector(".about__customer").classList.add("about-customer__background");
    myVar.customerItem[4].querySelector(".smart__find-medium").classList.add("remove");
    myVar.customerItem[4].classList.remove("h-6");
    myVar.customerItem[4].classList.add("h-5");
    myVar.customerItem[4].classList.remove("customer__item-boxShadow");
    myVar.customerItem[5].querySelector(".item__calender").classList.remove("remove");
    myVar.customerItem[5].classList.add("customer__item-boxShadow");
    myVar.customerItem[5].classList.add("h-7");
    e.stopPropagation();
}

export function clickToSeeLayout(e, element) {
    document.documentElement.style.overflowY = "hidden";
    element.style.display = "flex";
    e.stopPropagation();
};

export function clickToCloseTranslate(e, element) {
    document.documentElement.style.overflowY = "auto";
    element.style.display = "none";
    e.stopPropagation();
};

export function clickToChangeLayout1(e) {
    myVar.changeLayout.querySelector(".translate__container").classList.remove("remove");
    myVar.changeLayout.querySelector(".language__recomend").classList.remove("remove");
    myVar.layoutItem[0].classList.add("black__color");
    myVar.layoutItem[1].classList.remove("black__color");
    myVar.chooseLayout[0].classList.remove("remove");
    myVar.chooseLayout[1].classList.add("remove");
    myVar.changeLayout.querySelector(".layout__item-slash--1").classList.remove("remove");
    myVar.changeLayout.querySelector(".layout__item-slash--2").classList.add("remove");
    e.stopPropagation();
}

export function clickToChangeLayout2(e) {
    myVar.changeLayout.querySelector(".translate__container").classList.add("remove");
    myVar.changeLayout.querySelector(".language__recomend").classList.add("remove");
    myVar.layoutItem[0].classList.remove("black__color");
    myVar.layoutItem[1].classList.add("black__color");
    myVar.chooseLayout[0].classList.add("remove");
    myVar.chooseLayout[1].classList.remove("remove");
    myVar.changeLayout.querySelector(".layout__item-slash--1").classList.add("remove");
    myVar.changeLayout.querySelector(".layout__item-slash--2").classList.remove("remove");
    e.stopPropagation();
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

export function clickToScroll(e, needScroll, unNeed, choice) {
    switch (choice) {
        case 1:
            if(needScroll.classList.contains("cant__click") == false){
                myVar.inspiration.scrollLeft += 120;
                if(myVar.inspiration.scrollLeft == 450){
                    needScroll.classList.add("cant__click");
                    unNeed.classList.remove("cant__click");
                }
            }
            break;
        case 2:
            if(needScroll.classList.contains("cant__click") == false){
                myVar.inspiration.scrollLeft -= 120;
                if(myVar.inspiration.scrollLeft == 0){
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