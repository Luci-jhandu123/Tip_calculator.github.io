'use strict';
// selecting the elements
const button = document.querySelector('.btn');

button.addEventListener('click', function () {
  const user_input = Number(document.querySelector('input').value);
  console.log(Number(document.querySelector('input').value));
  if (user_input < 300) {
    const tip = user_input * 0.2;
    const total_bill = user_input + tip;

    document.querySelector(
      'h1'
    ).textContent = `Total Bill with tip : ${total_bill}`;
  } else if (user_input >= 300) {
    const tip = user_input * 0.2;
    const total_bill = user_input + tip;
    document.querySelector(
      'h1'
    ).textContent = `Total Bill with tip : ${total_bill}`;
  }
});
