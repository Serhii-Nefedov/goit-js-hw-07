const renderEl = document.querySelector('[data-action="render"]');
const destroyEl = document.querySelector('[data-action="destroy"]');
const boxesEl = document.getElementById('boxes');

renderEl.addEventListener('click', () => {
  const amount = document.querySelector('#controls input').value;
  createBoxes(amount);
});
destroyEl.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
  const mainSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const size = mainSize + i * 10;
    const div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }
  boxesEl.appendChild(fragment);
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}

function random() {
  return Math.floor(Math.random() * 256);
}
