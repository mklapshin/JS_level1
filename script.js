// Задание 1
let numberUser = prompt("Введите целое число от 0 до 999: ")
numberLength = numberUser.length;
object = {};
toObject(numberUser);

function toObject(number) {
if((number < 0 || number > 999)|| isNaN(parseInt(number))) {
  console.log('Введено некорректное число ' + number)
  console.log(object);
  alert('Введено некорректное число ' + number);
} else {
  switch(numberLength){
    case 3:
      object.units = number[2];
      object.tens = number[1];
      object.hundreds = number[0];
      alert('Число сотен: ' + object.hundreds + ', число десятков: ' + object.tens + ', число единиц: ' + object.units);
      break;
  case 2:
    object.units = number[1];
    object.tens = number[0];
    alert('Число десятков: ' + object.tens + ', число единиц: ' + object.units);
    break;
  case 1: 
    object.units = number;
    alert('Число единиц: ' + object.units);
  }
console.log(object);
}
return object;
}


/* function toObject(a) {
  if (a / 100 > 9) {
    console.log('Введено некорректное число');
    const result = {}
  } else {
    const result = new Object();
    result.units = a % 10;
    result.tens = (a % 100) / 10;
    result.hundreds = a / 100;
  }
return(result);
}

number = prompt('Введите трехзачное число');
toObject(number);


*/


