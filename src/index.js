import './style.css';

console.log('funguju!');

const clickBtn = () => {
  document.querySelector('nav').classList.toggle('nav-closed');
};
const iconElm = document.querySelector('#nav-btn');
iconElm.addEventListener('click', clickBtn);

const aFce = () => {
  document.querySelector('nav').classList.add('nav-closed');
};
const aElms = document.querySelectorAll('nav a');
aElms.forEach((item) => {
  item.addEventListener('click', aFce);
});

let ordered = true;
const changeTitle = () => {
  if (ordered === true) {
    document.querySelector('.order-btn').textContent = 'Zrušit';
    document.querySelector('.drink__cup').classList.add('drink__cup--selected');
    return (ordered = false);
  }
  if (ordered !== true) {
    document.querySelector('.order-btn').textContent = 'Objednat';
    document
      .querySelector('.drink__cup')
      .classList.remove('drink__cup--selected');
    return (ordered = true);
  }
};
const btnOrder = document
  .querySelector('.order-btn')
  .addEventListener('click', changeTitle);
