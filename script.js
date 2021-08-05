'use-strict';
const plus = document.querySelector('.plus');
const reset = document.querySelector('.reset');
const minus = document.querySelector('.minus');
const buttons = document.querySelector('.buttons');
// /////////////////////////////////////////////
const counterP = document.querySelector('.counter-p');
// ////////////////////////////////////////////
let counter = 0;
////////////////////////////////////////////
buttons.addEventListener('click', function (e) {
  if (!e.target.classList.contains('btn')) return;
  e.preventDefault();
  if (e.target.classList.contains('plus')) {
    counter++;
    counterP.textContent = counter;
  }
  if (e.target.classList.contains('minus')) {
    if (counter <= 0) return;
    counter--;
    counterP.textContent = counter;
  }
  if (e.target.classList.contains('reset')) {
    counter = 0;
    counterP.textContent = counter;
  }
});
