Math.round
let inputdeg = +prompt("Введите температуру в градусах Цельсия");
alert(`Цельсия: ${inputdeg}\  Фаренгейт: ${Math.round((9 / 5) * inputdeg + 32)}`)