/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
document.addEventListener('DOMContentLoaded', initDynamicDate);
function initDynamicDate() {
  const txtElements = document.querySelectorAll('.wp-block-create-block-timer-block');
  txtElements.forEach(txtElement => {
    new CountDown(txtElement);
  });
}
class CountDown {
  constructor(txtElement) {
    this.txtElement = txtElement;
    this.days = this.txtElement.querySelector(".days");
    this.hours = this.txtElement.querySelector(".hours");
    this.minutes = this.txtElement.querySelector(".minutes");
    this.seconds = this.txtElement.querySelector(".seconds");
    this.message = this.txtElement.querySelector(".message");
    this.countdown = this.txtElement.querySelector(".countdown");
    this.second = 1000, this.minute = this.second * 60, this.hour = this.minute * 60, this.day = this.hour * 24, this.date_value = this.countdown.dataset.countdowndate;
    this.set_time = "mar 31, 2024 00:00:00", this.countDown = new Date(this.date_value).getTime();
    this.events();
    this.timer;
  }
  events() {
    //this.updateDynamicCount()
    this.timer = setInterval(() => this.updateDynamicCount(), 500);
  }
  updateDynamicCount() {
    const now = new Date().getTime();
    let timeleft = this.countDown - now;
    const day = Math.floor(timeleft / this.day);
    const hour = Math.floor(timeleft % this.day / this.hour);
    const minute = Math.floor(timeleft % this.hour / this.minute);
    const second = Math.floor(timeleft % this.minute / this.second);
    this.days.innerText = day < 10 ? `0${day}` : day;
    this.hours.innerText = hour < 10 ? `0${hour}` : hour;
    this.minutes.innerText = minute < 10 ? `0${minute}` : minute;
    this.seconds.innerText = second < 10 ? `0${second}` : second;
    if (timeleft < 0) {
      this.message.style.display = "block";
      this.countdown.style.display = "none";
      clearInterval(this.timer);
    }
  }
}
/******/ })()
;
//# sourceMappingURL=frontend.js.map