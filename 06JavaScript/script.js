'use strict';

//so whenever we use query selector with a selector, which actually matches multiple elements, only the first one will get selected.
const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

console.log(btnOpenModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', function (e) {
    openModal();
  });
}

btnCloseModal.addEventListener('click', closeModal);
overLay.addEventListener('click', closeModal);

/* 
Now, keyboard events are so-called global events because they do not happen on one specific element. And for global events like keyboard events we usually list and on the whole document.
*/

document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'Escape') {
    closeModal();
  }
});
