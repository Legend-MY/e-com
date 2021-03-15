'use strict';
/* ==========================================Проверка поддерживает ли браузер webP ==========================================*/
function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});;
/* ==========================================================================================================================*/

// Селекторы языка и валюты =====================================================================================
let selectorBtn = document.querySelectorAll('.selector__item');
function chooseSelector() {
   for (let i = 0; i < selectorBtn.length; i++) {
      selectorBtn[i].addEventListener('click', function (event) {
         let target = event.target;
         if (target && target.matches('div.selector__current')) {
            let optionsList = selectorBtn[i].querySelector('.selector__options');
            optionsList.classList.toggle('active');
         }
      });
   }
}
chooseSelector();

// Попап поиска =====================================================================================
let searchIcon = document.querySelector('.header__search'),
   searchPopup = document.querySelector('.search'),
   searchArea = document.querySelector('.search__area'),
   searchContent = document.querySelector('.search__content'),
   searchClose = document.querySelector('.search__close');

searchIcon.addEventListener('click', function (event) {
   searchPopup.classList.add('active');
   searchContent.classList.add('active');
});

searchArea.addEventListener('click', function (event) {
   searchPopup.classList.remove('active');
   searchContent.classList.remove('active');
});

searchClose.addEventListener('click', function (event) {
   searchPopup.classList.remove('active');
   searchContent.classList.remove('active');
});