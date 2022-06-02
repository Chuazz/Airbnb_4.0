//My variables
var scrollDefault = 0;
import  * as myVar from "../modules/variables.js"

//My function
import * as myFunc from "../modules/function.js";
//======================================================================
if(window.innerWidth <= 749){
    myVar.questionImg.src = "//a0.muscache.com/im/pictures/8262da55-f57f-460a-88cd-67a1d07b6f80.jpg?im_w=720";
    myVar.exploringItem[0].srcset = "https://a0.muscache.com/im/pictures/b081750b-8f9b-426a-a4dc-cfbf06f14a4a.jpg?im_w=720";
    myVar.exploringItem[1].srcset = "https://a0.muscache.com/im/pictures/282ad058-cf85-4c29-bdb4-c7cfa841de61.jpg?im_w=720";
}
//======================================================================
function start() {
    window.addEventListener("scroll", scrollToSee);
    document.addEventListener("click", myFunc.clickToCloseAll);
    myVar.navEndRight.addEventListener("click",  myFunc.clickToSeeAccount);
    myVar.navMidItem[0].addEventListener("mouseover", myFunc.hoverToSee1);
    myVar.navMidItem[0].addEventListener("mouseout", myFunc.unHoverToSee1);
    myVar.navMidItem[1].addEventListener("mouseover", myFunc.hoverToSee2);
    myVar.navMidItem[1].addEventListener("mouseout", myFunc.unHoverToSee2);
    myVar.navMidItem[0].addEventListener("click", myFunc.clickToSeeChoice1);
    myVar.navMidItem[1].addEventListener("click", myFunc.clickToSeeChoice2);

    myVar.customer[0].querySelector(".custom-btn__icon").onclick = myFunc.clickToSeeSmartFind1;
    myVar.customer[1].querySelector(".custom-btn__icon").onclick = myFunc.clickToSeeSmartFind2;
    myVar.customerItem[0].addEventListener("click", myFunc.clickToSeeSmartFind1);
    myVar.customerItem[1].addEventListener("click", myFunc.clickToSeeCalender);
    myVar.customerItem[2].addEventListener("click", myFunc.clickToSeeCalender2);
    myVar.customerItem[3].addEventListener("click", myFunc.clickToSeeCustomerList);
    myVar.customerCount[3].querySelector(".customer__age").addEventListener("click", myFunc.clickToSeePetService);
    myVar.customerItem[4].addEventListener("click", myFunc.clickToSeeSmartFind2);
    myVar.customerItem[5].addEventListener("click", myFunc.clickToSeeCalender3);
    myVar.navEndItem[1].addEventListener("click", function(e){
        myFunc.clickToSeeLayout(e, myVar.changeLayout);
    });
    document.querySelector(".sign__up").addEventListener("click", function(e){
        myFunc.clickToSeeLayout(e, myVar.signUpLayout);
    })
    myVar.changeLayout.addEventListener("click", function(e){
        myFunc.clickToCloseTranslate(e, myVar.changeLayout)
    });
    myVar.signUpLayout.addEventListener("click", function(e){
        myFunc.clickToCloseTranslate(e, myVar.signUpLayout)
    });
    myVar.changeLayout.querySelector(".close__layout-icon").addEventListener("click", function(e){
        myFunc.clickToCloseTranslate(e, myVar.changeLayout)
    });
    myVar.signUpLayout.querySelector(".close__layout-icon").addEventListener("click", function(e){
        myFunc.clickToCloseTranslate(e, myVar.signUpLayout)
    });
    myVar.layoutItem[0].addEventListener("click", myFunc.clickToChangeLayout1);
    myVar.layoutItem[1].addEventListener("click", myFunc.clickToChangeLayout2);
    myVar.securityCheck.addEventListener("click", myFunc.clickToCloseSecurity);
    myVar.scrollRight.addEventListener("click", function(e){
        clickToScroll(e, scrollRight, scrollLeft, 1);
    });
    myVar.scrollLeft.addEventListener("click", function(e){
        clickToScroll(e, scrollLeft, scrollRight, 2);
    });
    myFunc.StopPropagation();
}

start();
//======================================================================
export function scrollToSee(e) {
    if(document.documentElement.scrollTop){
        myVar.header.classList.add("headerAnimate");
        myVar.header.classList.remove("header2Animate");
        myVar.headerLogo.style = "color: var(--rgb__color--light-red)";
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
};
