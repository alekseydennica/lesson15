/* Блок различных ементов с записанными переменными */
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var myList = document.getElementById("list");
var ul = document.getElementsByTagName("ul");
var story = myList.getElementsByClassName("item");
var popup  = document.getElementsByClassName("popup")[0];
var close = document.querySelector(".close");

/* допуск к сайту */
alert("Доступ к сайту разрешен");
console.log("Пользователь допущен");

/* старше ли ты 18 */
var day = 12;
var month = 12;
var year = 1996;
var age = 18;
var mydate = new Date();
mydate.setFullYear(year, month - 1, day);

var currdate = new Date();
var setDate = new Date();
setDate.setFullYear(mydate.getFullYear() + age, month - 1, day);

if ((currdate - setDate) > 0) {
  // you are above 18
  alert("above 18");
} else {
  alert("below 18");
}

/* вывод в console что бы протестировать */
console.log(btn1);
console.log(btn2);
console.log(ul);
console.log(story);

/* присвоение цвета ементу */
/* main.style.background = "green"; */


/* события в браузере */

/* функция добавления Элемента */
function addItem(){
  var newLi = document.createElement("li");
  newLi.innerHTML = "Новая задача!";
  newLi.className = "item";
  /* добавить к нему дочерний емент */
  myList.appendChild(newLi);
  popup.style.display = "none";
}
/* функция удаления Элемента */
function delItem() {
  myList.removeChild(story[0]);

  if(story.length == 0) {
    popup.style.display = "block";
  }


}
/* Закрыть всплывающее окно при клике на крестик */
function closePopup() {
  popup.style.display = "none";
  
}
// /* функция для кнопки */
// btn1.oneclick = function () {
  
// }
// /* либо подклбчить уже готовую функцию */
// btn1.oneclick = addItem; /* работает лишь первая функция */

/* привязка события */
btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);
