const validationInputRef = document.querySelector('#validation-input');

const handleInputBlur = event => {
  const validWidth = Number(validationInputRef.dataset.length);
  const currentWidth = event.target.value.length;
  validWidth === currentWidth
    ? validationInputRef.classList.add('valid') &
      validationInputRef.classList.remove('invalid')
    : validationInputRef.classList.add('invalid') &
      validationInputRef.classList.remove('valid');
};
validationInputRef.addEventListener('blur', handleInputBlur);
