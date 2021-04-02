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

   /* Скрыть header при скролле */
   (function () {
      const header = document.querySelector('.header');
      let previousScroll = 0;
      window.addEventListener('scroll', function (event) {
         let scroll = window.pageYOffset;
         console.log(scroll);
         if (scroll > previousScroll && scroll > 200) {
            header.classList.add('hide');
         } else {
            header.classList.remove('hide');
         }
         previousScroll = scroll;
      });
   })();
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

   /* Фильтрация best-seller */
   (function () {
      const filterTabs = document.querySelector('.best-seller__tabs'),
         filterTab = document.querySelectorAll('.best-seller__tab'),
         filterCards = document.querySelectorAll('.best-seller__column');

      filterTabs.addEventListener('click', (event) => {
         const target = event.target;
         if (!target.classList.contains('best-seller__tab')) {
            return false;
         } else {
            let filterClass = target.dataset['category'];
            filterCards.forEach((elem) => {
               elem.classList.remove('hide');
               if (!elem.classList.contains(filterClass) && filterClass !== 'All') {
                  elem.classList.add('hide');
               }
            });

            filterTab.forEach((elem) => {
               elem.classList.remove('active');
               target.classList.add('active');
            });
         }
      });
   })();

   /* ===================================== */
});

