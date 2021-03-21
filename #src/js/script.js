'use strict';

document.addEventListener('DOMContentLoaded', function () {

   @@include('webpcheck.js'); // Проверка поддерживает ли браузер webP
   @@include('mobilecheck.js'); // Определение с какого устройства зашел пользователь


   /* Селекторы языка и валюты */
   let selectorBtn = document.querySelectorAll('.selector__item');
   for (let i = 0; i < selectorBtn.length; i++) {
      selectorBtn[i].addEventListener('click', function (event) {
         let target = event.target;
         if (target && target.matches('div.selector__current')) {
            let optionsList = selectorBtn[i].querySelector('.selector__options');
            optionsList.classList.toggle('active');
         }
      });
   }
   /* ======================================== */


   /* Попап поиска */
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
   /* ======================================== */


   /* Выпадающее меню с категориями */
   const menuLinks = document.querySelectorAll('.menu__link'),
      menuDropdown = document.querySelector('.menu__dropdown');

   for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].addEventListener('click', function (event) {
         let target = event.target;
         if (target && target.matches('span')) {
            menuDropdown.classList.toggle('active');
         }
      });
   }
   /* ======================================== */

   /* Меню бургер */
   const burgerBtn = document.querySelector('.menu__burger'),
      menuBody = document.querySelector('.menu__body');

   if (burgerBtn) {
      burgerBtn.addEventListener('click', function (event) {
         document.body.classList.toggle('lock');
         burgerBtn.classList.toggle('active');
         menuBody.classList.toggle('active');
      });
   }
   /* ======================================== */


});

