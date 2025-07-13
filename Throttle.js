const throttle = (cb, d) => {
  let start = 0;

  return (...args) => {
    let now = new Date().getTime();
    if (now - start < d) return;
    start = now;
    return cb(...args)
  }
};

const btn = document.querySelector('button');
const buttonCLicked = document.querySelector('.button-clicked');
const triggered = document.querySelector('.button-triggered');

let btnClickedCount = 0;
let btnTriggeredCount = 0;

const throttleFunction = throttle(() => {
  triggered.innerHTML = `Triggered count: ${++btnTriggeredCount}`;
}, 1000);

btn.addEventListener('click', () => {
  buttonCLicked.innerHTML = `Button clicked count: ${++btnClickedCount}`;
  throttleFunction();
});
