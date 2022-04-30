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
