"use strict";

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

radioFormElement.addEventListener("change", radioChecker);

ymaps.ready(init);

let placeMark;
let myMap;

function init() {
  myMap = new ymaps.Map("map", {
    center: [45.021231, 39.022046],
    zoom: 19
  });

  placeMark = new ymaps.Placemark([45.021231, 39.022046], {});

  myMap.geoObjects.add(placeMark);
}
