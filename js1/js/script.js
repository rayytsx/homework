// Створити змінну з іменем age і присвоїти їй значення свого віку. Вивести значення цієї змінної в консоль.
"use strict"
const age = 12;
console.log(age)
// Створити змінну з іменем name і присвоїти їй значення свого імені. Вивести значення цієї змінної в консоль.
const name = "Tim"
console.log(name)
// Створити змінну з іменем isStudent і присвоїти їй значення true або false, залежно від того, чи є студентом. Вивести значення цієї змінної в консоль.
const isStudent = true
console.log(isStudent)
// Створити змінну з іменем myString і присвоїти їй рядок з вашої улюбленою цитатою. Вивести цей рядок в консоль.
const myString = "Щоб не плакати, я сміялась"
console.log(myString)
// Створити змінну з іменем myNumber і присвоїти їй довільне числове значення. Потім присвоїти цій змінній результат додавання до неї числа 10. Вивести значення myNumber в консоль.
let myNumber = 7;
myNumber += 10 
console.log(myNumber)
// Створити змінну з іменем myNull і присвоїти їй значення null. Вивести значення цієї змінної в консоль.
const myNull = null
console.log(myNull)
// Створити скрипт який виводить спливаюче вікно з запитом на введення імені користувача за допомогою prompt(). Після введення імені вивести повідомлення привітання з використанням введеного імені.
const userName = prompt("Введіт своє імʼя")
alert(`Вітаю ${userName}`)
//Створити скрипт який виводить спливаюче підтвердження за допомогою confirm(). Якщо користувач підтверджує дію, вивести повідомлення "Дякую за підтвердження!". Якщо користувач відмовляється, вивести повідомлення "Дію відмінено!".
const answer = confirm("Ви згідні з...")
if(answer){
    alert("Дякую за підтвердження")
}
else{
    alert("Дію відмінено")
}
// Створити скрипт який виводить спливаюче попередження за допомогою alert(). Вивести повідомлення про те, що дія небезпечна та попросити користувача підтвердити дію за допомогою confirm(). Якщо користувач підтверджує дію, вивести повідомлення "Дякую за підтвердження!". Якщо користувач відмовляється, вивести повідомлення "Дію відмінено!".
alert("Дія небезпечна")
const action = confirm("Підтвердіть дію")
if(action){
    alert("Дякую за підтвердження")
}
else{
    alert("Дію відмінено")
}
