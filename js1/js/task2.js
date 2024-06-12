// Створити змінні для зберігання температури за Цельсієм та Фаренгейтом. Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.
// Створити змінну для зберігання кількості днів у місяці. Обчислити кількість годин та хвилин у цьому місяці за допомогою оператора множення та вивести результат в консоль.
// Створити змінні для зберігання рівня здоров'я та енергії гравця в грі. Зменшити рівень здоров'я та енергії гравця за допомогою операторів віднімання та вивести

const сelsius = 18
const fahrenheit = 9 / 5 * сelsius + 32
console.log(fahrenheit)

const daysInMonth = 30
const hoursInDay = 24 * daysInMonth
const minInMonth = 60 * hoursInDay
console.log(minInMonth)
console.log(hoursInDay)

let playersHealth = 100
let playersEnergy = 50
playersHealth -= 25
playersEnergy -= 15
console.log(playersEnergy)
console.log(playersHealth)