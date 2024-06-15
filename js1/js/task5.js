// Створити розмітку з формою, що містить список (select) з трьома варіантами вибору: "Кава", "Чай" та "Сік". При виборі кожного варіанту виводити відповідне повідомлення в блок на сторінці.

const selectElement = document.getElementById("drink");
const coffeeMessage = document.getElementById("coffeeMessage");
const teaMessage = document.getElementById("teaMessage");
const juiceMessage = document.getElementById("juiceMessage");

// Визначення вибраного елемента після завантаження сторінки

// (можна скіпнути)
const message = document.querySelectorAll(".message");

message.forEach((mes) => {
  mes.style.display = "none";
});

switch (selectElement.value) {
  case "coffee":
    coffeeMessage.style.display = "block";
    break;
  case "tea":
    teaMessage.style.display = "block";
    break;
  case "juice":
    juiceMessage.style.display = "block";
    break;
  default:
    break;
}
selectElement.addEventListener("change", (event) => {
  const selectedValue = event.target.value;
  coffeeMessage.style.display = "none";
  teaMessage.style.display = "none";
  juiceMessage.style.display = "none";
  switch (selectedValue) {
    case "coffee":
      coffeeMessage.style.display = "block";
      break;
    case "tea":
      teaMessage.style.display = "block";
      break;
    case "juice":
      juiceMessage.style.display = "block";
      break;
    default:
      break;
  }
});
