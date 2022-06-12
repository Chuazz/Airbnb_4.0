import { clickToScroll, clickToSeeLayout, clickToChangeLayout, clickToCloseTranslate, StopPropagation, clickToSeeAccount } from "../../../../modules/function.js";
import { $$, collectionSection, navEndItem, changeLayout, signUpLayout, signUp, navEndRight, navBarMobile } from "../../../../modules/variables.js";

var scrollLeft = $$(".inspiration__title .fa-angle-left");
var scrollRight = $$(".inspiration__title .fa-angle-right");

const clickToCloseAll = () => {
    window.addEventListener("click", (e) => {
        document.querySelector(".custommer__account").classList.add("remove");
        signUpLayout.style.display = "none";
        e.stopPropagation();
    })
}

const start = () => {
    clickToCloseAll();
    clickToChangeLayout();
    navEndRight.addEventListener("click",  clickToSeeAccount);

    collectionSection.forEach((element, i) => {
        clickToScroll(scrollRight[i], scrollLeft[i], 150, element);
    });

    navEndItem[1].addEventListener("click", (e) => {
        clickToSeeLayout(e, changeLayout);
    });

    signUp.addEventListener("click", (e) => {
        clickToSeeLayout(e, signUpLayout);
    });

    navBarMobile.addEventListener("click", (e) => {
        clickToSeeLayout(e, signUpLayout);
    })

    signUpLayout.addEventListener("click", (e) => {
        clickToCloseTranslate(e, signUpLayout)
    });
    
    signUpLayout.querySelector(".close__layout-icon").addEventListener("click", (e) => {
        clickToCloseTranslate(e, signUpLayout)
    });

    changeLayout.addEventListener("click", (e) => {
        clickToCloseTranslate(e, changeLayout)
    });

    changeLayout.querySelector(".close__layout-icon").addEventListener("click", (e) => {
        clickToCloseTranslate(e, changeLayout)
    });
    StopPropagation();
}

start();