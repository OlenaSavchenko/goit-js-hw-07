const validationInputRef = document.querySelector('#validation-input');

const handleInputBlur = event => {
  const validWidth = Number(validationInputRef.dataset.length);
  const currentWidth = event.target.value.length;
  validWidth === currentWidth
    ? validationInputRef.setAttribute('class', 'valid')
    : validationInputRef.setAttribute('class', 'invalid');
};
validationInputRef.addEventListener('blur', handleInputBlur);
