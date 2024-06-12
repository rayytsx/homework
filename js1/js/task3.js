// Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.
// Створіть змінну email з вашою електронною адресою. Напишіть скрипт, який перевіряє чи містить змінна email символ @ і рахує загальну кількість символів. Результат виведіть в консоль.
// Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.

const result = 5+5+"5"
console.log(result)

const email = "ksva1lly@gmail.com"
console.log(email.includes("@"))

const word1 = "My"
const word2 = "name"
const word3 = "is"
const fullName = word1 + word2 + word3 + "Viktor"
console.log(fullName)