const ref = {
  boxes: document.querySelector('#boxes'),
  render: document.querySelector('button[data-action="render"]'),
  destroy: document.querySelector('button[data-action="destroy"]'),
  input: document.querySelector('#controls>input'),
};

const random = () => Math.floor(Math.random() * 256);

const getAmount = () => {
  const amount = ref.input.value;
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
    ref.boxes.appendChild(box);
  }
};

const destroyBoxes = () => {
  ref.boxes.innerHTML = '';
};

ref.render.addEventListener('click', getAmount);
ref.destroy.addEventListener('click', destroyBoxes);
