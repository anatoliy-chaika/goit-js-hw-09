import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    btnStartRef.disabled = true;

    if (selectedDates[0] > new Date()) {
      btnStartRef.disabled = false;
    } else {
      setTimeout(() => window.alert('Please choose a date in the future'), 400);
    }
  },
};

const inputRef = document.querySelector('#datetime-picker');
const btnStartRef = document.querySelector('[data-start]');
const fp = flatpickr(inputRef, options);

btnStartRef.disabled = true;
let timerId = null;

btnStartRef.addEventListener('click', startTimer);

function startTimer() {
  btnStartRef.disabled = true;
  const timerId = setInterval(() => {
    const currentTime = new Date();
    const futureDate = new Date(inputRef.value);
    const deltaTimes = futureDate.getTime() - currentTime.getTime();
    const currentDeltaTime = convertMs(deltaTimes);

    updateInterface(currentDeltaTime);
    if (deltaTimes <= 999) {
      clearInterval(timerId);
      btnStartRef.disabled = false;
    }
  }, 1000);
}

function updateInterface({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
