let counterValue = 0;
const counterRef = document.querySelector('#value');
const decrementRef = document.querySelector('button[data-action="decrement"]');
const incrementRef = document.querySelector('button[data-action="increment"]');
const decrement = () => {
  counterValue -= 1;
  counterRef.textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
  counterRef.textContent = counterValue;
};

decrementRef.addEventListener('click', decrement);
incrementRef.addEventListener('click', increment);
