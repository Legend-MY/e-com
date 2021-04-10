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
   /* range slider (noUiSlider) */
   @@include('nouislider.min.js');
   /* ===================================== */

   /* Скрыть header при скролле */
   (function () {
      const header = document.querySelector('.header');
      let previousScroll = 0;
      window.addEventListener('scroll', function (event) {
         let scroll = window.pageYOffset;
         if (scroll > previousScroll && scroll > 150) {
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

      if (filterTabs) {
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
      }
   })();
   /* ===================================== */

   /* Slidetoggle в футере */
   (function () {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      if (mediaQuery.matches) {
         let footerToggler = document.getElementById('footer-toggler');
         footerToggler.addEventListener('click', change);

         function change(event) {
            let target = event.target;
            if (!target.classList.contains('item-footer__title')) {
               return;
            }

            if (target.classList.contains('show')) {
               hideAll();
            } else {
               hideAll();
               target.classList.add('show');
               showText(target.nextElementSibling);
            }
         }

         function hideAll() {
            var titleEl = footerToggler.querySelectorAll('.item-footer__title');
            let bodyEl = footerToggler.querySelectorAll('.item-footer__body');
            for (let i = 0; i < titleEl.length; i++) {
               titleEl[i].classList.remove('show');
            }
            for (let i = 0; i < bodyEl.length; i++) {
               bodyEl[i].style.height = '0';
            }
         }

         function showText(textEl) {
            textEl.style.height = textEl.scrollHeight + 'px';
         }
      }
   })();
   /* ===================================== */

   /* Range Slider для фильтра цены */
   (function () {
      const priceSlider = document.querySelector('.price-filter__slider');

      if (priceSlider) {
         noUiSlider.create(priceSlider, {
            start: [4, 80],
            connect: true,
            range: {
               'min': [0],
               'max': [25.99]
            }
         });
         const paddingMin = document.querySelector('.price-min');
         const paddingMax = document.querySelector('.price-max');

         priceSlider.noUiSlider.on('update', function (values, handle) {
            if (handle) {
               paddingMax.innerHTML = values[handle];
            } else {
               paddingMin.innerHTML = values[handle];
            }
         });
      }
   })();
   /* ===================================== */

   /* Получить высоту элементов для блока фильтров */
   (function () {
      const filterBody = document.querySelector('.filter__body');
      const filterBlocks = document.querySelectorAll('.filter__section');
      const filterBtn = document.querySelector('.filter__btn');
      let visibleFiltersHeight = filterBlocks[0].offsetHeight + filterBlocks[1].offsetHeight + filterBlocks[2].offsetHeight + filterBlocks[3].offsetHeight;
      let visibleFiltersMargin = parseInt(getComputedStyle(filterBlocks[0]).marginBottom) + parseInt(getComputedStyle(filterBlocks[1]).marginBottom) + parseInt(getComputedStyle(filterBlocks[2]).marginBottom) + parseInt(getComputedStyle(filterBlocks[3]).marginBottom);

      if (filterBody) {
         filterBody.style.height = visibleFiltersHeight + visibleFiltersMargin + 'px';

         filterBtn.addEventListener('click', function (event) {
            event.preventDefault();
            filterBody.style.height = filterBody.scrollHeight + 'px';
         });
      }

   })();
   /* ===================================== */

});

