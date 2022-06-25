const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const btnSign = document.querySelector('.header__btn');

const disScroll = () => {
  let t = window.scrollY;
  document.body.classList.add("dis-scroll"),
    document.body.dataset.position = t,
    document.body.style.top = -t + "px"
};

const enScroll = () => {
  let t = parseInt(document.body.dataset.position, 10);
  document.body.style.top = "auto",
    document.body.classList.remove("dis-scroll"),
    window.scroll({
      top: t,
      left: 0
    }), document.body.removeAttribute("data-position")
};



burger.addEventListener('click', (e) => {
  burger.classList.toggle('menu--active');
  menu.classList.toggle('nav--active');
  overlay.classList.toggle('overlay--active');


  if (burger.classList.contains('burger--active')) {
    disScroll();
    btnSign.classList.toggle('header__btn--diss');
  } else {
    enScroll();
    btnSign.classList.remove('header__btn--diss');
  }
})
