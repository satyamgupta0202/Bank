'use strict';
///////////////////////////////////////
// Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// /// Selecting Elements

//Creating the Element and Inserting it at the same time
const header = document.querySelector('.header');
console.log(header);
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
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  //note: BoundedClientRect is relative with the current visible ViewPort
  // const s1cord = section1.getBoundingClientRect(); //target loc
  // console.log('current scroll x , y =', window.pageXOffset, window.pageYOffset);
  //THis will keep trace of how much you have been scrolled
  // window.scrollTo(
  //   s1cord.left + window.pageXOffset,
  //   s1cord.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1cord.left + window.pageXOffset,
  //   top: s1cord.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
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
    console.log(sibling);
    const logo = link.closest('.nav').querySelector('img');

    sibling.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

const nav = document.querySelector('.nav');

nav.addEventListener('mouseover', handleHover.bind(0.5));
// if (e.target.classList.contains('nav__link')) {
//   const link = e.target; //to be dark
//   const sibling = link.closest('.nav').querySelectorAll('.nav__link');
//   console.log(sibling);
//   const logo = link.closest('.nav').querySelector('img');
//   sibling.forEach(el => {
//     if (el !== link) el.style.opacity = 0.5;
//   });
//   logo.style.opacity = 0.5;
// }
//console.log('Bete');

nav.addEventListener('mouseout', handleHover.bind(1));
// if (e.target.classList.contains('nav__link')) {
//   const link = e.target; //to be dark
//   const sibling = link.closest('.nav').querySelectorAll('.nav__link');
//   console.log(sibling);
//   const logo = link.closest('.nav').querySelector('img');
//   sibling.forEach(el => {
//     if (el !== link) el.style.opacity = 1;
//   });
//   logo.style.opacity = 1;
// }
