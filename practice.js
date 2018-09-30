alert("hello world!"); /* всплывающее окно */
console.log("hello world"); /* информация в консоль */

/* var-ключевое слово / имя переменной / значение */
var myFirstVar = 50;

myFirstVar = 25;

console.log(myFirstVar);

/* операторы   */
console.log(4+6);
console.log(4+ "I am strong");
console.log("ad"+"first");

/* Инкримент и дикримент - для уменьшения написанного кода */
var incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

/* оператор со знаком процента - возвращает остаток от деления = 1
+ операторы > , < или = ; */
console.log(10%3);

/* присвоение Это = "5" */
var num = "5";

/* сравнение по значению */
console.log(10 == 3);

/* сравнение по типу */
console.log(10 === 3);

/* оператор не равен - знак ! Это "false" */
console.log(10 != 3);

/* существуют типы данных в js - 7 */
var number = 5; /* число   */
var string = "Hello world"/* строка  */
var symbol; /* символ */
true; /* логические типы данных */
false;

/* пример */
console.log(6/2 == 3); /* true */
console.log(6/2 == 1); /* false */

/* философские типы данных */
console.log(und); /* Это nall - ничего (ошибка) */

var und;
console.log(und); /* Это undefing */

/* обьект  */
var obj = {};

/* для определения того, что мы получили */
console.log(typeof obj); /* обьект   */
console.log(typeof string);/* строка */

/* циклы и условные операторы */
/* условия */
if  (10 + 5 == 15){
    alert("it is a true");
}
else {
    alert("wrong!");
}

/* цикл исползующийся в верстке */
for (var i = 1; i < 8; i++) { /* цикл остановится когда дойдет до 8 .
   i - шаг цикла увеличение на 1*/
  console.log(i); /*  действие */
}

/* пример */

var out = 5;

function myFirstFunc(x,y){
  var inner = 10;

  return (x + y);
}
console.log(myFirstFunc(5,5));
console.log(myFirstFunc(10,5));
console.log(myFirstFunc(5,101));