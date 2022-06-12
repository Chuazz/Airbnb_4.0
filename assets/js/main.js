//My variables
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
    myFunc.scrollToSee();

    document.addEventListener("click", myFunc.clickToCloseAll);
    myVar.navEndRight.addEventListener("click",  myFunc.clickToSeeAccount);

    myFunc.HrHover();
    myFunc.clickToSeeChoice();
    myFunc.clickToSeeCustomerTab();
    myFunc.clickToChangeLayout();

    myVar.customerCount[3].querySelector(".customer__age").addEventListener("click", myFunc.clickToSeePetService);

    myVar.navEndItem[1].addEventListener("click", (e) => {
        myFunc.clickToSeeLayout(e, myVar.changeLayout);
    });

    myVar.signUp.addEventListener("click", (e) => {
        myFunc.clickToSeeLayout(e, myVar.signUpLayout);
    });

    myVar.navBarMobile.addEventListener("click", (e) => {
        myFunc.clickToSeeLayout(e, myVar.signUpLayout);
    })

    myVar.changeLayout.addEventListener("click", (e) => {
        myFunc.clickToCloseTranslate(e, myVar.changeLayout)
    });

    myVar.signUpLayout.addEventListener("click", (e) => {
        myFunc.clickToCloseTranslate(e, myVar.signUpLayout)
    });

    myVar.changeLayout.querySelector(".close__layout-icon").addEventListener("click", (e) => {
        myFunc.clickToCloseTranslate(e, myVar.changeLayout)
    });
    
    myVar.signUpLayout.querySelector(".close__layout-icon").addEventListener("click", (e) => {
        myFunc.clickToCloseTranslate(e, myVar.signUpLayout)
    });
    
    myVar.securityCheck.addEventListener("click", myFunc.clickToCloseSecurity);

    myFunc.clickToScroll(myVar.scrollRight, myVar.scrollLeft, 100, myVar.inspiration);

    myFunc.increaseOrDecrease();

    myFunc.StopPropagation();
}

start();
//======================================================================
