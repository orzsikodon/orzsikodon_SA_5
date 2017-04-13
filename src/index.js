// change required to es6, import style sheets
import $ from 'jquery';
import './style.scss';

// template from: http://stackoverflow.com/questions/31066348/how-can-i-increment-a-number-after-every-1-second-using-javascript
$(document).ready(() => {
  let num = 0; // initial 0

  // increment every second
  setInterval(() => {
    $('#main').html(`You have been on this page for: ${num} seconds!`); // Update the value in paragraph
    num += 1;
  }, 1000); // Run for each second
});
