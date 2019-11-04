import '@csstools/normalize.css';
import 'swiper/dist/css/swiper.css';
import '../scss/index.scss';
import slider from './slider';
import hamburger from './hamburger';
import docready from './docready';

const init = function() {
  hamburger();
  slider();
};

docready(init);
