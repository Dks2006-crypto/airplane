import phoneMask from "./modules/inputMask.js";
phoneMask();

console.log('ok');
let nav = document.getElementById("nav"),
    button = document.getElementById("open")
    button.addEventListener("click", () => {
      nav.classList.toggle('header__nav--active')
    });

    const btnUp = {
      el: document.querySelector('.header__btn-up'),
      show() {
        // удалим у кнопки класс btn-up_hide
        this.el.classList.remove('header__btn-up--hide');
      },
      hide() {
        // добавим к кнопке класс btn-up_hide
        this.el.classList.add('header__btn-up--hide');
      },
      addEventListener() {
        // при прокрутке содержимого страницы
        window.addEventListener('scroll', () => {
          // определяем величину прокрутки
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
          scrollY > 400 ? this.show() : this.hide();
        });
        // при нажатии на кнопку .btn-up
        document.querySelector('.header__btn-up').onclick = () => {
          // переместим в начало страницы
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      }
    };
    
    btnUp.addEventListener();


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