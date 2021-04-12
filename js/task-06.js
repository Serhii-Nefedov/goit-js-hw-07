

const input = document.getElementById('validation-input');
const inputLenght = input.getAttribute('data-length');
const totallenght = Math.floor(inputLenght);

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
  if (input.value.length === totallenght) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else if (input.value.length !== totallenght && input.value.length !== 0) {
    input.classList.remove('valid');
    input.classList.add('invalid');
  } else if (input.value.length === 0) {
    input.classList.remove('valid');
    input.classList.remove('invalid');
  }
}

