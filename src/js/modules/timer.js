function timer () {

// const endDate = new Date();
// endDate.setDate(endDate.getDate() + 3); // например, 3 дня от текущей даты

// console.log(endDate)

const endDate = new Date('Apr 24, 2024, 23:59:59');

const daysElement = document.querySelector('#days');
const hoursElement = document.querySelector('#hours');
const minutesElement = document.querySelector('#minutes');
const secondsElement = document.querySelector('#seconds');

let timerInterval;

function updateTimer (){
  const now = new Date();

  const timeDifference = endDate - now;
  // console.log('timeDifference', timeDifference);

  if (timeDifference <= 0) {
    daysElement.innerText = '0';
    hoursElement.innerText = '0';
    minutesElement.innerText = '0';
    secondsElement.innerText = '0';
    clearInterval(timerInterval);
    return;
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / (1000));

  // console.log(days)
  // console.log(hours)
  // console.log(minutes)
  // console.log(seconds)

  daysElement.innerText = days < 10 ? '0' + days : days;
  hoursElement.innerText = hours < 10 ? '0' + hours : hours;
  minutesElement.innerText = minutes < 10 ? '0' + minutes : minutes;
  secondsElement.innerText = seconds < 10 ? '0' + seconds : seconds;
}

updateTimer(); // Запускаем счетчик при загрузке страницы
timerInterval = setInterval(updateTimer, 1000) // Обновляем таймер каждую секунду
}

export default timer;