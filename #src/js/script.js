'use strict';

document.addEventListener('DOMContentLoaded', function () {

   @@include('webpcheck.js'); // Проверка поддерживает ли браузер webP
   // @@include('mobilecheck.js'); // Определение с какого устройства зашел пользователь
   // @@include('swiper-bundle.min.js'); // Swiper slider


   /* Селекторы языка и валюты */

   /* ======================================== */


   /* Попап поиска */

   /* ======================================== */


   /* Выпадающее меню с категориями */

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


   /* Swiper slider */

   /* ======================================== */


});

