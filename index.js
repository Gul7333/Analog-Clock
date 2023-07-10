const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function rotateHand() {
  let date = new Date();
  let hrs = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  // rotate hands
  hour.style.transform = `rotate(calc(30deg * ${hrs}))`;
  minute.style.transform = `rotate(calc(6deg * ${min}))`;
  second.style.transform = `rotate(calc(6deg * ${sec}))`;

  // hour.style.transform = "rotate(calc(30deg * 7))";
}
rotateHand();
setInterval(rotateHand, 1000);
// setTimeout(rotateHand, 1000);
const hr = document.querySelector(".hrs");
const mn = document.querySelector(".min");
const sc = document.querySelector(".sec");

const time = () => {
  let date = new Date();
  let hrs = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  hr.innerText = hrs;
  mn.innerText = min;
  sc.innerText = sec;
};
time();
setInterval(time, 10);
