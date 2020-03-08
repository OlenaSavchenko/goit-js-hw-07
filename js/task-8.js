const boxesRef = document.querySelector('#boxes');
const renderRef = document.querySelector('button[data-action="render"]');
const destroyRef = document.querySelector('button[data-action="destroy"]');
const inputRef = document.querySelector('#controls>input');
const random = () => Math.floor(Math.random() * 256);

const getAmount = () => {
  const amount = inputRef.value;
  createBoxes(amount);
};

const createBoxes = amount => {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    let size = 30;
    size += i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = `rgba( ${random()} , ${random()} , ${random()}`;
    boxesRef.appendChild(box);
  }
};

const destroyBoxes = () => {
  boxesRef.innerHTML = '';
};

renderRef.addEventListener('click', getAmount);
destroyRef.addEventListener('click', destroyBoxes);
