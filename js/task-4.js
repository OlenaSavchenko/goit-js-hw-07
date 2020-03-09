const ref = {
  counter: document.querySelector('#value'),
  decrement: document.querySelector('button[data-action="decrement"]'),
  increment: document.querySelector('button[data-action="increment"]'),
};

let counterValue = 0;
const decrement = () => {
  counterValue -= 1;
  ref.counter.textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
  ref.counter.textContent = counterValue;
};

ref.decrement.addEventListener('click', decrement);
ref.increment.addEventListener('click', increment);
