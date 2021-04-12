

const fontSizeEl = document.getElementById('font-size-control');
const textEl = document.querySelector('#text');

fontSizeEl.addEventListener('input', onInputChange => {
  text.style.fontSize = fontSizeEl.value + 'px';
});


