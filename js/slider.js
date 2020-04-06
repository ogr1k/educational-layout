"use strict";

(function () {

    let radioInputElements = document.querySelectorAll("[type='radio']");
    let slidesElements = document.querySelectorAll(".slide");
    let radioFormElement = document.querySelector(".radio");

    function radioChecker() {
        for (let element of slidesElements) {
            element.hidden = true;
        }

        for (let i = 0; i < radioInputElements.length; i++) {
            if (radioInputElements[i].checked) {
                slidesElements[i].hidden = false;
            }
        }
    }

    radioFormElement.addEventListener("change", radioChecker)
})();
