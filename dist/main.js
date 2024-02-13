/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/module1.js":
/*!************************!*\
  !*** ./src/module1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   check: () => (/* binding */ check)
/* harmony export */ });
// Единственная константа на экспорт, которая будет подгружена и использована в index.js
const check = 'Hurray! It finally works, motherf#cker!';

// тестовый вывод в консоль
console.log("CHEKC FROM MODULE1!!!!");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _module1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module1.js */ "./src/module1.js");




console.log("TEST from index.js");

// экспериментально попробуем вставить параграф "p" в элемент div с id="parent"
const parent = document.getElementById("parent");
const checkbox = document.createElement("p");
checkbox.innerHTML = "Paragraph from index.js before meta.hot";
parent.insertAdjacentElement("beforeEnd", checkbox);

// обязательно добавить проверку ниже, которая автоматом подтянет изменения из module1.js и выполнит всё, что будет описано в функции ниже
if (false) {}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7VUNKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNnQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxLQUFzQixFQUFFLEVBS3pCO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LWFwcC8uL3NyYy9zdHlsZS5jc3M/ZmNjMSIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL3NyYy9tb2R1bGUxLmpzIiwid2VicGFjazovL3Rlc3QtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rlc3QtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rlc3QtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8g0JXQtNC40L3RgdGC0LLQtdC90L3QsNGPINC60L7QvdGB0YLQsNC90YLQsCDQvdCwINGN0LrRgdC/0L7RgNGCLCDQutC+0YLQvtGA0LDRjyDQsdGD0LTQtdGCINC/0L7QtNCz0YDRg9C20LXQvdCwINC4INC40YHQv9C+0LvRjNC30L7QstCw0L3QsCDQsiBpbmRleC5qc1xyXG5leHBvcnQgY29uc3QgY2hlY2sgPSAnSHVycmF5ISBJdCBmaW5hbGx5IHdvcmtzLCBtb3RoZXJmI2NrZXIhJztcclxuXHJcbi8vINGC0LXRgdGC0L7QstGL0Lkg0LLRi9Cy0L7QtCDQsiDQutC+0L3RgdC+0LvRjFxyXG5jb25zb2xlLmxvZyhcIkNIRUtDIEZST00gTU9EVUxFMSEhISFcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0ICogYXMgdGVzdCBmcm9tIFwiLi9tb2R1bGUxLmpzXCI7XHJcblxyXG5cclxuY29uc29sZS5sb2coXCJURVNUIGZyb20gaW5kZXguanNcIik7XHJcblxyXG4vLyDRjdC60YHQv9C10YDQuNC80LXQvdGC0LDQu9GM0L3QviDQv9C+0L/RgNC+0LHRg9C10Lwg0LLRgdGC0LDQstC40YLRjCDQv9Cw0YDQsNCz0YDQsNGEIFwicFwiINCyINGN0LvQtdC80LXQvdGCIGRpdiDRgSBpZD1cInBhcmVudFwiXHJcbmNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFyZW50XCIpO1xyXG5jb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5jaGVja2JveC5pbm5lckhUTUwgPSBcIlBhcmFncmFwaCBmcm9tIGluZGV4LmpzIGJlZm9yZSBtZXRhLmhvdFwiO1xyXG5wYXJlbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlRW5kXCIsIGNoZWNrYm94KTtcclxuXHJcbi8vINC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQvtCx0LDQstC40YLRjCDQv9GA0L7QstC10YDQutGDINC90LjQttC1LCDQutC+0YLQvtGA0LDRjyDQsNCy0YLQvtC80LDRgtC+0Lwg0L/QvtC00YLRj9C90LXRgiDQuNC30LzQtdC90LXQvdC40Y8g0LjQtyBtb2R1bGUxLmpzINC4INCy0YvQv9C+0LvQvdC40YIg0LLRgdGRLCDRh9GC0L4g0LHRg9C00LXRgiDQvtC/0LjRgdCw0L3QviDQsiDRhNGD0L3QutGG0LjQuCDQvdC40LbQtVxyXG5pZiAoaW1wb3J0Lm1ldGEud2VicGFja0hvdCkge1xyXG4gICAgaW1wb3J0Lm1ldGEud2VicGFja0hvdC5hY2NlcHQoJy4vbW9kdWxlMS5qcycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQWNjZXB0aW5nIHRoZSB1cGRhdGVkICBtb2R1bGUxIS5qcycpO1xyXG4gICAgICAgIGNoZWNrYm94LmlubmVySFRNTCA9IHRlc3QuY2hlY2s7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=