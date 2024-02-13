import './style.css';
import * as test from "./module1.js";


console.log("TEST from index.js");

// экспериментально попробуем вставить параграф "p" в элемент div с id="parent"
const parent = document.getElementById("parent");
const checkbox = document.createElement("p");
checkbox.innerHTML = "Paragraph from index.js before meta.hot";
parent.insertAdjacentElement("beforeEnd", checkbox);

// обязательно добавить проверку ниже, которая автоматом подтянет изменения из module1.js и выполнит всё, что будет описано в функции ниже
if (import.meta.webpackHot) {
    import.meta.webpackHot.accept('./module1.js', function () {
        console.log('Accepting the updated  module1!.js');
        checkbox.innerHTML += test.check + "<br>";
        checkbox.innerHTML += "<br>alala OLOLO";
    });
  }

