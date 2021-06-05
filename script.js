'use strict';
///////////////////////////////////////
// Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const section1 = document.querySelector('#section--1');
const header = document.querySelector('.header');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(button => button.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = ` We use it to improve the Functionlity of the page <button class
="btn btn--close-cookie"> got it!! </button>`;
header.append(message);

//Deleting
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//Styling Our Created Elements

message.style.backgroundColor = '#37383d';
message.style.width = '120%';
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

///Smooth Scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');

btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

////Most important tabbed COmponents

const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', function (e) {
  //Activated
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;

  //Remove Active
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabContent.forEach(c => c.classList.remove('operations__content--active'));
  clicked.classList.add('operations__tab--active');

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Navigation_Bar Animations

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target; //to be dark
    const sibling = link.closest('.nav').querySelectorAll('.nav__link');
    //console.log(sibling);
    const logo = link.closest('.nav').querySelector('img');

    sibling.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//Sticky nav
const option = {
  target: null,
  threshold: 0,
};

const call = function (entries, headerObserver) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(call, option);
headerObserver.observe(header);

/////////Reveal Sections///////////

const allSections = document.querySelectorAll('.section');
//console.log(allSections);

const options = {
  target: null,
  threshold: 0.15,
};

const revealSection = function (entries, Observer) {
  const [entry] = entries;

  //console.log(entry);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  Observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, options);

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

///// lazt image-loading
const imageTarget = document.querySelectorAll('img[data-src]');
const optionss = {
  target: null,
  threshold: 0,
  rootMargin: '200px',
};

const loadImg = function (entries, imgObserver) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('lazy-img');
  entry.target.addEventListener('load', function () {
    entry.target.src = entry.target.dataset.src;
  });
  console.log(entry.target);
  imgObserver.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, optionss);
imageTarget.forEach(img => imgObserver.observe(img));

///slider

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.2)';
// slider.style.overflow = 'visible';
const sliderButtonLeft = document.querySelector('.slider__btn--left');
const sliderButtonRight = document.querySelector('.slider__btn--right');

let currSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);

const nextSlide = function () {
  if (currSlide === maxSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  goToSlide(currSlide);
};

const prevSlide = function () {
  if (currSlide === 0) {
    currSlide = maxSlide - 1;
  } else {
    currSlide--;
  }
  goToSlide(currSlide);
};
sliderButtonRight.addEventListener('click', nextSlide);
sliderButtonLeft.addEventListener('click', prevSlide);
