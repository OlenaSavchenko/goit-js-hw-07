const inputRangeRef = document.querySelector('#font-size-control');
const inputTextRef = document.querySelector('#text');

const handleInput = event => {
  inputTextRef.style.fontSize = `${event.currentTarget.value}px`;
};

inputRangeRef.addEventListener('input', handleInput);
