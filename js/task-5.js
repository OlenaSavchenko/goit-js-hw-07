const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');
const handleInput = event => {
  outputRef.textContent === ''
    ? (outputRef.textContent = 'незнакомец')
    : (outputRef.textContent = event.target.value);
};
inputRef.addEventListener('input', handleInput);
