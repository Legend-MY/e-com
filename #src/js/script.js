'use strict'

document.addEventListener('DOMContentLoaded', function () {
   /* Проверка поддерживает ли браузер webP */
   @@include('webpcheck.js');
   /* ===================================== */
   /* Проверка с какого устройства зашел пользователь */
   @@include('mobilecheck.js');
   /* ===================================== */
   /* Подключение swiper slider */
   @@include('swiper-bundle.min.js');
   /* ===================================== */
   /* Подключение popups */
   @@include('popups.js');
   /* ===================================== */


   // Header selectors ====================================
   (function () {
      const selectorsBlock = document.querySelectorAll('.selectors__block');

      selectorsBlock.forEach(function (item) {
         item.addEventListener('click', function (event) {
            const target = event.target;
            if (target && target.classList.contains('selectors__current')) {
               item.querySelector('.selectors__options').classList.toggle('active');
               item.querySelector('.selectors__current').classList.toggle('active');
            }
         });
      });
   })();
   // ========================================================================


   // Меню бургер ====================================
   (function () {
      const burgerBtn = document.querySelector('.menu__burger'),
         menuBody = document.querySelector('.menu__body'),
         body = document.querySelector('body');

      if (burgerBtn) {
         burgerBtn.addEventListener('click', function (event) {
            body.classList.toggle('lock');
            burgerBtn.classList.toggle('active');
            menuBody.classList.toggle('active');
         });
      }
   })();
   // ========================================================================


});

