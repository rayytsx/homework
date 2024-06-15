// Створити розмітку з двома текстовими полями та кнопкою. При натисканні на кнопку перевіряти, чи обидва поля містять значення, якщо так, то виводити повідомлення "Обидва поля заповнені", якщо ні - "Не всі поля заповнені".
const btn = document.querySelector("#checkButton");
btn.addEventListener("click", () => {
  let field1 = document.querySelector("#field1");
  let field2 = document.querySelector("#field2");

  let message = document.querySelector("#message");
  if (field1.value && field2.value) {
    message.textContent = "Обидва поля заповнені";
  } else {
    message.textContent = "Не всі поля заповнені";
  }
});

//  Створити розмітку  з двома числовими полями та кнопкою. При натисканні на кнопку перевіряти, чи сума значень полів більша за 10, якщо так, то виводити повідомлення "Сума більша за 10", якщо ні - "Сума менша або дорівнює 10".
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const btn1 = document.querySelector(".btn1");
const result = document.querySelector("#sumResult");

btn1.addEventListener("click", () => {
  let sum = +num1.value + +num2.value;
  if (sum > 10) {
    result.textContent = "сума більша за 10";
  } else {
    result.textContent = "Сума меньша або дорівнює 10";
  }
});


