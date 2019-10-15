import Swiper from 'swiper';

const debounce = (func, delay) => {
  let inDebounce
  return function() {
    const context = this
    const args = arguments
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => func.apply(context, args), delay)
  }
};

export default function sliderInit() {
  const reviewSwiper = new Swiper('.swiper-container--review', {
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const viewportW = document.documentElement.clientWidth;
  
  let experienceSwiper;
  const enableSlider = function(viewportW) {
    if(viewportW > 900) { return; }

    experienceSwiper = new Swiper('.swiper-container--experience', {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      pagination: {
        el: '.swiper-pagination',
      },
      breakpointsInverse: true,
      breakpoints: {
        700: {
          slidesPerView: 2,
          slidesPerGroup: 2
        },
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1
        }, 
      },
    });
  }

  window.onresize = debounce(function() {
    const viewportW = document.documentElement.clientWidth;

    if(viewportW > 900 && experienceSwiper) {
      experienceSwiper.destroy(true, true);
      document.querySelectorAll('.swiper-container--experience .swiper-slide').forEach(el => el.removeAttribute('style'));
    } else {
      enableSlider(viewportW);
    }
  });

  enableSlider(document.documentElement.clientWidth);
}
