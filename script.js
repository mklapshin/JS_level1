// Задание 1

// var a = 1, b = 1, c, d;
// c = ++a; alert(c); // 2 // Префиксный инкремент - переменная а увеличивается на единицу и выводится конечное значение
// d = b++; alert(d); // 1 // Постфиксный инкремент - переменная b увеличивается на единицу, но выводится предыдущее значение
// c = (2+ ++a); alert(c); // 5 // Префиксный инкремент - переменная а увеличивается на 1 и к этому результату прибавляется число 2
// d = (2+ b++); alert(d); // 4 // Постфиксный инкремент - переменная b увеличивается на 1, но выводится предыдущий результат этой переменной + 2
// alert(a); // 3 // Выводится текущее значение переменной а, полученное 2 шага назад
// alert(b); // 3 // Выводится текущее значение переменной b, полученное 2 шага назад

// Задание 2

// var a = 2;
// var x = 1 + (a *= 2);

// x будет равен 5
// сначала переменная а умножается на 2, получается 4, затем к 4 прибавляется 1 и полученный результат присваивается в x

// Задание 3

countNumber();

function countNumber() {
    const a = prompt('Ввеите первое целое число');
    const b = prompt('Ввеите второе целое число');
    if (a >= 0 & b >= 0) {
        c = a - b;
    } else if (a < 0 & b < 0) {
        c = a * b;
    } else {
        c = a + b;
    }
    alert(c);
    return;
}

// Задание 4

function printNumbers() {
    const a = parseInt(prompt('Введите целое число от 0 до 15'));
    if (0 <= a & a <= 15) {
        switch (a) {
            case 0:
                document.write('0 ');
            case 1:
                document.write('1 ');
            case 2:
                document.write('2 ');
            case 3:
                document.write('3 ');
            case 4:
                document.write('4 ');
            case 5:
                document.write('5 ');
            case 6:
                document.write('6 ');
            case 7:
                document.write('7 ');
            case 8:
                document.write('8 ');
            case 9:
                document.write('9 ');
            case 10:
                document.write('10 ');
            case 11:
                document.write('11 ');
            case 12:
                document.write('12 ');
            case 13:
                document.write('13 ');
            case 14:
                document.write('14 ');
            case 15:
                document.write('15 ');                                                                                                                                                                                                                                                                                                                    
        }
    } else alert('Введено некорректное число');
}

printNumbers();

// Задание 5

function addNumbers(term1, term2) {
    result = term1 + term2;
    alert('Сумма чисел ' + term1 + ' и ' + term2 + ' равна ' + result);
    return;
}

function subtractNumbers(minuend, subtrahend) {
    result = minuend - subtrahend;
    alert('Разность чисел' + minuend + ' и ' + subtrahend + ' равна ' + result);
    return;
}

function multiplyNumbers(factor1, factor2) {
    result = factor1 * factor2;
    alert('Произведение чисел ' + factor1 + ' и ' + factor2 + ' равна ' + result);
    return;
}

function divideNumbers(dividend, divider) {
    result = dividend / divider;
    alert('Частное чисел ' + dividend + ' и ' + divider + ' равно ' +  result);
    return;
}

// Задание 6

const arg1 = parseInt(prompt('Введите значение первого числа'));
const arg2 = parseInt(prompt('Введите значение второго числа'));
let operation = prompt('Какую операцию вы хотите выполнить? Введите знак "+", "-", "*" или "/"');

function mathOperation(value1, value2, chooseOperation) {
    switch (chooseOperation) {
        case '+':
            addNumbers(value1, value2);
            break;
        case '-':
            subtractNumbers(value1, value2);
            break;
        case '*':
            multiplyNumbers(value1, value2);
            break;
        case '/':
            divideNumbers(value1, value2);
            break;
        default: 
            alert('Введен некорректный знак');
            break;
    }
}

mathOperation(arg1, arg2, operation);

// Задание 7
// null - это не 0
// null - это объект
console.log(null == 0);