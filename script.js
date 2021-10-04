// Задание 1
temperatureCelsius = prompt('Ввeдите температуру в градусах по Цельсию:');
temperatureFahrenheit = (9 / 5) * temperatureCelsius + 32;
alert(temperatureFahrenheit);

// Задание 2
x = prompt('x');
y = prompt('y');
x = x ^ y;
y = x ^ y;
x = x ^ y;
alert('x is now:' + x);
alert('y is now:' + y);

// Задание 3
let name='Василий';
let admin = name;
alert(admin);

// Задание 4
// JS-выражение 1000 + "108" будет равно 1000108, так как к числовому типу данных прибавляется строка

// Задание 5
// Разница между defer и async заключаетсяв том, что при подключении JS с помощью defer команды будут выполняться строго по порядку, а при подключении через async - раньше выполнятся те команды, которые быстрее загрузятся