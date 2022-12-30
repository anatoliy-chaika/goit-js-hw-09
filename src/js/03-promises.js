const formRef = document.querySelector('.form');
const btnStartRef = document.querySelector('.js-start');

formRef.addEventListener('submit', startCreatePromises);

function startCreatePromises(e) {
  e.preventDefault();
  const { delay, step, amount } = e.currentTarget.elements;
  const delayValue = delay.value;
  const stepValue = step.value;
  const amountValue = amount.value;
  btnStartRef.disabled = true;

  setTimeout(() => {
    for (let i = 0; i < amountValue; i += 1) {
      createPromise(i, stepValue * i)
        .then(({ position, delay }) => {
          console.log(
            `✅ Fulfilled promise ${position + 1} in ${
              delay + Number(delayValue)
            }ms`
          );
        })
        .catch(({ position, delay }) => {
          console.log(
            `❌ Rejected promise ${position + 1} in ${
              delay + Number(delayValue)
            }ms`
          );
        })
        .finally(() => {
          if (i === amountValue - 1) {
            btnStartRef.disabled = false;
          }
        });
    }
  }, delayValue);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
  return promise;
}
