'use strict';

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

new Swiper(`.swiper`, {
    // стрелки
    navigation: {
        nextEl: `.swiper-button-next`,
        prevEl: `.swiper-button-prev`,
    },
    /*  pagination: {
         el: `.swiper-pagination`,
          type:`bullets`,
          clickable: true,
          dynamicBullets: true,
  
          renderBullet: function (index, className) {
              return `<span class="` + className + `">` + (index + 1) + `</span>`;
          } ,
         // фракции
           type:'fraction', 
          renderFraction:function(currentClass,totalClass){
              return `Фото <span class="` + currentClass + `"></span>` +
               ` из ` + `<span class=` + totalClass +
                `"></span`;
          }, 
         // Прогрессбар
          type: `progressbar`, 
     }, */
    scrollbar: {
        el: `.swiper-scrollbar`,
        draggable: true,
    },
    simulateTouch: true,
    touchRatio: 1,
    grabCursor: true,

    slideToClickedSlide: true,
    /* hashNavigation: {
        watchState: true,
    }, */
    keyboard: {
        enable: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
        eventsTarget: ".image-slider",
    },
    autoHeight: false, // слайдер подстраивается под высоту контента
    slidesPerView: 3, /// количество слайдом на показ
    watchOverflow: true, //если слайдов меньше чем указано slidesPerView откличает слайдер
    spaceBetween: 30, //Пространство между слайдами
    slidesPerGroup: 1, // количество пролистываемых слайдов
    /* centeredSlides:true, */ // делает слайд по центру
    initialSlide: 0, // стартовый слайд
    grid: {
        rows: 1,
    },//мультирядность
    loop: true,// бесконечность
    loopedSlides: 0, //кол-во дублирующих слайдов нужно методом тыка вручную узнать нужное значение
    freeMode: false, //включает режим прокрутки без фиксация

    /* autoplay:{
    delay:1000,
    stopOnLastSlide:true,
        disableOnInteraction:false,
    
    }, */
    speed: 800, // скорость прокрутки
    /* direction:`vertical`, */ // вкл вертикальный режим прокрутки

    effect: `slide`, // эффекты переключения слайдов
    /* coverflowEffect:{// дополнение к fade
    rotate:20,
    stretch:50,
    slideShadows:true,
    }, */


    breakpoints: {///адаптив
        280: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },


    preloadImages: false,
    lazy: {
        loadOnTransitionStart: false,
        loadPrevNext: false,
    },
    watchSlidesProgress:true,
    watchSlidesVisibility:true,
});
