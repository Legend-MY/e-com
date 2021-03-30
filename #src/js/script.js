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


   /* Header selectors */
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
   /* ===================================== */


   /* Menu burger */
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
   /* ===================================== */


   /* main banner slider */
   new Swiper('.main-slider', {
      loop: true,
      autoplay: {
         // Пауза между прокруткой
         delay: 5000,
         // Закончить на последнем слайде
         stopOnLastSlide: false,
         // Отключить после ручного переключения
         disableOnInteraction: false
      },
      speed: 800,
   });
   /* ===================================== */

   /* Обрезать символы в описании товара по длинне */
   (function () {

      const cropElement = document.querySelectorAll('.item-product__description'),
         size = 210,
         endCharacter = '...';

      cropElement.forEach(el => {
         let text = el.innerHTML;

         if (el.innerHTML.length > size) {
            text = text.substr(0, size);
            el.innerHTML = text + endCharacter;
         }
      });

   }());
   /* ===================================== */
});

