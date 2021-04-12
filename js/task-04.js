let counterValue = 0;

const buttonIncrementEl = document.querySelector("[data-action='increment']");
const buttonDecrementEl = document.querySelector("[data-action='decrement']");
const valueEl = document.querySelector('#value');

buttonIncrementEl.addEventListener('click', () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});

buttonDecrementEl.addEventListener('click', () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});
