import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

function bannerSlider(){
    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 5000
        },
        navigation: {
            prevEl: '.banner__slider-btn--prev',
            nextEl: '.banner__slider-btn--next',
        },
    });
}

export default bannerSlider;