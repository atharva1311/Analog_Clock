setInterval(() => {
  date = new Date();
  hourtime = date.getHours();
  minutetime = date.getMinutes();
  secondtime = date.getSeconds();

  hourrotation = 30 * hourtime + minutetime / 2;
  minuterotation = 6 * minutetime;
  secondrotation = 6 * secondtime;

  hour.style.transform = `rotate(${hourrotation}deg)`;
  minute.style.transform = `rotate(${minuterotation}deg)`;

  second.style.transform = `rotate(${secondrotation}deg)`;
}, 1000);
