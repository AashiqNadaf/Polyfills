const debounce = (cb, d) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

const btn = document.querySelector('button');
const buttonCLicked = document.querySelector('.button-clicked');
const triggered = document.querySelector('.button-triggered');

let btnClickedCount = 0;
let btnTriggeredCount = 0;

const debounceFunction = debounce(() => {
  triggered.innerHTML = `Triggered count: ${++btnTriggeredCount}`;
}, 1000);

btn.addEventListener('click', () => {
  buttonCLicked.innerHTML = `Button clicked count: ${++btnClickedCount}`;
  debounceFunction();
});
