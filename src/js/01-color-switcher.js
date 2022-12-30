function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStartRef = document.querySelector('[data-start]');
const btnStopRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');

btnStopRef.disabled = true;

btnStartRef.addEventListener('click', changeBgColor);

function changeBgColor() {
  btnStartRef.disabled = true;
  btnStopRef.disabled = false;
  timerId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

btnStopRef.addEventListener('click', stopChangeBgColor);

function stopChangeBgColor() {
  clearInterval(timerId);
  btnStopRef.disabled = true;
  btnStartRef.disabled = false;
}
