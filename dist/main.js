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
/* harmony export */   requested_data: () => (/* binding */ requested_data)
/* harmony export */ });
let requested_data = "";

const url_posts = "http://localhost:3000/posts";
const url_comments = "http://localhost:3000/comments";

let comments;

// GET comments
fetch(url_comments)
.then(data => {
    return data.json();
})
.then(data => {
    comments = data;
})
.catch(() => {
    
});


// Comments extractor function for each Post
function check(post_element, comment_array) {
    let post_comments = [];
    for (let i=0; i < comment_array.length; i++ ) {
        if (comment_array[i].postId == post_element["id"]) {
            post_comments.push(" - ");
            post_comments.push(comment_array[i]["text"].toString());
            post_comments.push("<br>");
        }
    }

    let clear_comments = "";
    post_comments.forEach(element => {clear_comments += element;});

    return clear_comments;
        
    }
    


// GET posts
setInterval(() => {
    fetch(url_posts)
    .then(data => {
        return data.json();
    })
    .then(data => {
        requested_data = "";
        data.forEach(element => {
            requested_data += `
            <div class="post-container">
                <h4>${element.title.toString().toUpperCase()}</h4>
                <p style="font-size: 15px;">${element.views} views</p>
                <br>
                <div>
                    <b><i>Post comments:</i></b><br>
                    <p class="comments">${check(element, comments)}</p>
                </div>
            </div>`;
        });
    })
    .catch((error) => {
        requested_data = "Sorry, but seems server unavailable now. <br> Please, Try request again later.<br><br>ERROR:<br>" + error;
    });
}, 1000);



/***/ }),

/***/ "./src/post_form.js":
/*!**************************!*\
  !*** ./src/post_form.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   greeting: () => (/* binding */ greeting),
/* harmony export */   info_message: () => (/* binding */ info_message),
/* harmony export */   input: () => (/* binding */ input),
/* harmony export */   post_button: () => (/* binding */ post_button),
/* harmony export */   send_request: () => (/* binding */ send_request)
/* harmony export */ });
let greeting = document.createElement("h3");
let input = document.createElement("input");
const post_button = document.createElement("button");
let info_message = document.createElement("p");


greeting.innerHTML = "You could create a new post at following form:";
post_button.innerHTML = "SEND POST";

input.setAttribute("type", "text");
input.setAttribute("id", "input");
input.setAttribute("class", "input");
input.setAttribute("placeholder", "Enter article title...");

info_message.setAttribute("style", "color: white; font-size: 20px");

const url_posts = "http://localhost:3000/posts";

async function send_request(data) {
    try {
        await fetch(url_posts, {
            method: "POST",
            body: JSON.stringify(data),
            headers : {
                "Content-Type": "application/json",
            }
        });
        
        info_message.innerHTML = `Post was succesfully created.`;
    } catch (error) {
        info_message.innerHTML = `Error while tried sent request:<br> ${error}`;
    }     
}

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
/* harmony import */ var _post_form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post_form.js */ "./src/post_form.js");




const container = document.getElementById("posts-container");
const creation = document.getElementById("create-container");

// экспериментально попробуем вставить параграф "p" в элемент div с id="parent"
const parent = document.getElementById("parent");
const checkbox = document.createElement("p");
checkbox.style = "font-size: 30px; color: red";
checkbox.innerHTML = "";
parent.insertAdjacentElement("beforeEnd", checkbox);



// Настройка кнопки получения данных
const get_button = document.getElementById("send-requests");
get_button.addEventListener("click", () =>{

    // load-ring activate and appear
    let load_ring = document.getElementsByClassName("lds-spinner")[0];
    load_ring.style = "display: inline-block";

    setTimeout(() => {
        // get all old posts
        container.innerHTML = _module1_js__WEBPACK_IMPORTED_MODULE_1__.requested_data;

        // load-ring disactivate and disappear
        load_ring.style = "display: none";

        // Create pseudo-form for new post creation
        creation.insertAdjacentElement("afterBegin", _post_form_js__WEBPACK_IMPORTED_MODULE_2__.input);
        creation.insertAdjacentElement("afterBegin", _post_form_js__WEBPACK_IMPORTED_MODULE_2__.greeting);
        creation.insertAdjacentElement("beforeEnd", _post_form_js__WEBPACK_IMPORTED_MODULE_2__.post_button);
        creation.insertAdjacentElement("beforeEnd", _post_form_js__WEBPACK_IMPORTED_MODULE_2__.info_message);

        _post_form_js__WEBPACK_IMPORTED_MODULE_2__.post_button.addEventListener("click", async () => {
            // read user`s info from input
            const data = {"title": _post_form_js__WEBPACK_IMPORTED_MODULE_2__.input.value, "views": 0};

            // create post by send
            await _post_form_js__WEBPACK_IMPORTED_MODULE_2__.send_request(data);

            await setTimeout(() =>{
                    // refresh posts list by get-button click
                    get_button.click();

                    setTimeout(()=>{
                        // scroll down to fresh post
                        document.body.scrollIntoView({behavior: "smooth", block: "end"});

                        // last fresh post background-on
                        container.lastElementChild.style = "background-color: red";
                        container.lastElementChild.style.transition = "background-color 3s";

                        // last fresh post background-off
                        setTimeout(()=> {
                            container.lastElementChild.style = "background-color: none";
                            container.lastElementChild.style.transition = "background-color 3s";
                        }, 3000);
                    },2000);
                }, 1000);
        });
    },1100);
});


// Add notification about js-modules code updating
if (false) {}

  if (false) {}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDBCQUEwQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDJCQUEyQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1Q0FBdUM7QUFDN0QsMENBQTBDLElBQUksZUFBZTtBQUM3RDtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMseUJBQXlCO0FBQ25FO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVPO0FBQ0E7QUFDQTtBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBTTtBQUNOLHdFQUF3RSxNQUFNO0FBQzlFO0FBQ0E7Ozs7OztVQ2hDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDZ0I7QUFDTztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsdURBQW1CO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsZ0RBQWU7QUFDcEUscURBQXFELG1EQUFrQjtBQUN2RSxvREFBb0Qsc0RBQXFCO0FBQ3pFLG9EQUFvRCx1REFBc0I7QUFDMUU7QUFDQSxRQUFRLHNEQUFxQjtBQUM3QjtBQUNBLDBCQUEwQixTQUFTLGdEQUFlO0FBQ2xEO0FBQ0E7QUFDQSxrQkFBa0IsdURBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELGlDQUFpQztBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLEtBQXNCLEVBQUUsRUFJekI7QUFDSDtBQUNBLE1BQU0sS0FBc0IsRUFBRSxFQUkzQjtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9zcmMvc3R5bGUuY3NzP2ZjYzEiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9zcmMvbW9kdWxlMS5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL3NyYy9wb3N0X2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Rlc3QtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgbGV0IHJlcXVlc3RlZF9kYXRhID0gXCJcIjtcclxuXHJcbmNvbnN0IHVybF9wb3N0cyA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3Bvc3RzXCI7XHJcbmNvbnN0IHVybF9jb21tZW50cyA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2NvbW1lbnRzXCI7XHJcblxyXG5sZXQgY29tbWVudHM7XHJcblxyXG4vLyBHRVQgY29tbWVudHNcclxuZmV0Y2godXJsX2NvbW1lbnRzKVxyXG4udGhlbihkYXRhID0+IHtcclxuICAgIHJldHVybiBkYXRhLmpzb24oKTtcclxufSlcclxuLnRoZW4oZGF0YSA9PiB7XHJcbiAgICBjb21tZW50cyA9IGRhdGE7XHJcbn0pXHJcbi5jYXRjaCgoKSA9PiB7XHJcbiAgICBcclxufSk7XHJcblxyXG5cclxuLy8gQ29tbWVudHMgZXh0cmFjdG9yIGZ1bmN0aW9uIGZvciBlYWNoIFBvc3RcclxuZnVuY3Rpb24gY2hlY2socG9zdF9lbGVtZW50LCBjb21tZW50X2FycmF5KSB7XHJcbiAgICBsZXQgcG9zdF9jb21tZW50cyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgY29tbWVudF9hcnJheS5sZW5ndGg7IGkrKyApIHtcclxuICAgICAgICBpZiAoY29tbWVudF9hcnJheVtpXS5wb3N0SWQgPT0gcG9zdF9lbGVtZW50W1wiaWRcIl0pIHtcclxuICAgICAgICAgICAgcG9zdF9jb21tZW50cy5wdXNoKFwiIC0gXCIpO1xyXG4gICAgICAgICAgICBwb3N0X2NvbW1lbnRzLnB1c2goY29tbWVudF9hcnJheVtpXVtcInRleHRcIl0udG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHBvc3RfY29tbWVudHMucHVzaChcIjxicj5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBjbGVhcl9jb21tZW50cyA9IFwiXCI7XHJcbiAgICBwb3N0X2NvbW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7Y2xlYXJfY29tbWVudHMgKz0gZWxlbWVudDt9KTtcclxuXHJcbiAgICByZXR1cm4gY2xlYXJfY29tbWVudHM7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuXHJcblxyXG4vLyBHRVQgcG9zdHNcclxuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgZmV0Y2godXJsX3Bvc3RzKVxyXG4gICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGEuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIHJlcXVlc3RlZF9kYXRhID0gXCJcIjtcclxuICAgICAgICBkYXRhLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RlZF9kYXRhICs9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvc3QtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQ+JHtlbGVtZW50LnRpdGxlLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKX08L2g0PlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6IDE1cHg7XCI+JHtlbGVtZW50LnZpZXdzfSB2aWV3czwvcD5cclxuICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGI+PGk+UG9zdCBjb21tZW50czo8L2k+PC9iPjxicj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvbW1lbnRzXCI+JHtjaGVjayhlbGVtZW50LCBjb21tZW50cyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIHJlcXVlc3RlZF9kYXRhID0gXCJTb3JyeSwgYnV0IHNlZW1zIHNlcnZlciB1bmF2YWlsYWJsZSBub3cuIDxicj4gUGxlYXNlLCBUcnkgcmVxdWVzdCBhZ2FpbiBsYXRlci48YnI+PGJyPkVSUk9SOjxicj5cIiArIGVycm9yO1xyXG4gICAgfSk7XHJcbn0sIDEwMDApO1xyXG5cclxuIiwiZXhwb3J0IGxldCBncmVldGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuZXhwb3J0IGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuZXhwb3J0IGNvbnN0IHBvc3RfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuZXhwb3J0IGxldCBpbmZvX21lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcblxyXG5ncmVldGluZy5pbm5lckhUTUwgPSBcIllvdSBjb3VsZCBjcmVhdGUgYSBuZXcgcG9zdCBhdCBmb2xsb3dpbmcgZm9ybTpcIjtcclxucG9zdF9idXR0b24uaW5uZXJIVE1MID0gXCJTRU5EIFBPU1RcIjtcclxuXHJcbmlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImlucHV0XCIpO1xyXG5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImlucHV0XCIpO1xyXG5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVudGVyIGFydGljbGUgdGl0bGUuLi5cIik7XHJcblxyXG5pbmZvX21lc3NhZ2Uuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJjb2xvcjogd2hpdGU7IGZvbnQtc2l6ZTogMjBweFwiKTtcclxuXHJcbmNvbnN0IHVybF9wb3N0cyA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3Bvc3RzXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZF9yZXF1ZXN0KGRhdGEpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZmV0Y2godXJsX3Bvc3RzLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgICAgICBoZWFkZXJzIDoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBpbmZvX21lc3NhZ2UuaW5uZXJIVE1MID0gYFBvc3Qgd2FzIHN1Y2Nlc2Z1bGx5IGNyZWF0ZWQuYDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgaW5mb19tZXNzYWdlLmlubmVySFRNTCA9IGBFcnJvciB3aGlsZSB0cmllZCBzZW50IHJlcXVlc3Q6PGJyPiAke2Vycm9yfWA7XHJcbiAgICB9ICAgICBcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAqIGFzIHRlc3QgZnJvbSBcIi4vbW9kdWxlMS5qc1wiO1xyXG5pbXBvcnQgKiBhcyBwb3N0X2Zvcm0gZnJvbSBcIi4vcG9zdF9mb3JtLmpzXCI7XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvc3RzLWNvbnRhaW5lclwiKTtcclxuY29uc3QgY3JlYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZS1jb250YWluZXJcIik7XHJcblxyXG4vLyDRjdC60YHQv9C10YDQuNC80LXQvdGC0LDQu9GM0L3QviDQv9C+0L/RgNC+0LHRg9C10Lwg0LLRgdGC0LDQstC40YLRjCDQv9Cw0YDQsNCz0YDQsNGEIFwicFwiINCyINGN0LvQtdC80LXQvdGCIGRpdiDRgSBpZD1cInBhcmVudFwiXHJcbmNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFyZW50XCIpO1xyXG5jb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5jaGVja2JveC5zdHlsZSA9IFwiZm9udC1zaXplOiAzMHB4OyBjb2xvcjogcmVkXCI7XHJcbmNoZWNrYm94LmlubmVySFRNTCA9IFwiXCI7XHJcbnBhcmVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVFbmRcIiwgY2hlY2tib3gpO1xyXG5cclxuXHJcblxyXG4vLyDQndCw0YHRgtGA0L7QudC60LAg0LrQvdC+0L/QutC4INC/0L7Qu9GD0YfQtdC90LjRjyDQtNCw0L3QvdGL0YVcclxuY29uc3QgZ2V0X2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VuZC1yZXF1ZXN0c1wiKTtcclxuZ2V0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XHJcblxyXG4gICAgLy8gbG9hZC1yaW5nIGFjdGl2YXRlIGFuZCBhcHBlYXJcclxuICAgIGxldCBsb2FkX3JpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGRzLXNwaW5uZXJcIilbMF07XHJcbiAgICBsb2FkX3Jpbmcuc3R5bGUgPSBcImRpc3BsYXk6IGlubGluZS1ibG9ja1wiO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vIGdldCBhbGwgb2xkIHBvc3RzXHJcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHRlc3QucmVxdWVzdGVkX2RhdGE7XHJcblxyXG4gICAgICAgIC8vIGxvYWQtcmluZyBkaXNhY3RpdmF0ZSBhbmQgZGlzYXBwZWFyXHJcbiAgICAgICAgbG9hZF9yaW5nLnN0eWxlID0gXCJkaXNwbGF5OiBub25lXCI7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBwc2V1ZG8tZm9ybSBmb3IgbmV3IHBvc3QgY3JlYXRpb25cclxuICAgICAgICBjcmVhdGlvbi5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlckJlZ2luXCIsIHBvc3RfZm9ybS5pbnB1dCk7XHJcbiAgICAgICAgY3JlYXRpb24uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJCZWdpblwiLCBwb3N0X2Zvcm0uZ3JlZXRpbmcpO1xyXG4gICAgICAgIGNyZWF0aW9uLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZUVuZFwiLCBwb3N0X2Zvcm0ucG9zdF9idXR0b24pO1xyXG4gICAgICAgIGNyZWF0aW9uLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZUVuZFwiLCBwb3N0X2Zvcm0uaW5mb19tZXNzYWdlKTtcclxuXHJcbiAgICAgICAgcG9zdF9mb3JtLnBvc3RfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHJlYWQgdXNlcmBzIGluZm8gZnJvbSBpbnB1dFxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1widGl0bGVcIjogcG9zdF9mb3JtLmlucHV0LnZhbHVlLCBcInZpZXdzXCI6IDB9O1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIHBvc3QgYnkgc2VuZFxyXG4gICAgICAgICAgICBhd2FpdCBwb3N0X2Zvcm0uc2VuZF9yZXF1ZXN0KGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgc2V0VGltZW91dCgoKSA9PntcclxuICAgICAgICAgICAgICAgICAgICAvLyByZWZyZXNoIHBvc3RzIGxpc3QgYnkgZ2V0LWJ1dHRvbiBjbGlja1xyXG4gICAgICAgICAgICAgICAgICAgIGdldF9idXR0b24uY2xpY2soKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzY3JvbGwgZG93biB0byBmcmVzaCBwb3N0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiBcInNtb290aFwiLCBibG9jazogXCJlbmRcIn0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGFzdCBmcmVzaCBwb3N0IGJhY2tncm91bmQtb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQuc3R5bGUgPSBcImJhY2tncm91bmQtY29sb3I6IHJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZC5zdHlsZS50cmFuc2l0aW9uID0gXCJiYWNrZ3JvdW5kLWNvbG9yIDNzXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsYXN0IGZyZXNoIHBvc3QgYmFja2dyb3VuZC1vZmZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkLnN0eWxlID0gXCJiYWNrZ3JvdW5kLWNvbG9yOiBub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZC5zdHlsZS50cmFuc2l0aW9uID0gXCJiYWNrZ3JvdW5kLWNvbG9yIDNzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sMjAwMCk7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sMTEwMCk7XHJcbn0pO1xyXG5cclxuXHJcbi8vIEFkZCBub3RpZmljYXRpb24gYWJvdXQganMtbW9kdWxlcyBjb2RlIHVwZGF0aW5nXHJcbmlmIChpbXBvcnQubWV0YS53ZWJwYWNrSG90KSB7XHJcbiAgICBpbXBvcnQubWV0YS53ZWJwYWNrSG90LmFjY2VwdCgnLi9tb2R1bGUxLmpzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNoZWNrYm94LmlubmVySFRNTCArPSBcIjxicj4nTW9kdWxlMScganMgY29kZSB3YXMgdXBkYXRlZC4gUGxlYXNlIHJlZnJlc2ggaWYgbmVlZGVkLlwiO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoaW1wb3J0Lm1ldGEud2VicGFja0hvdCkge1xyXG4gICAgaW1wb3J0Lm1ldGEud2VicGFja0hvdC5hY2NlcHQoJy4vcG9zdF9mb3JtLmpzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNoZWNrYm94LmlubmVySFRNTCArPSBcIjxicj4nUG9zdF9mb3JtJyBqcyBjb2RlIHdhcyB1cGRhdGVkLiBQbGVhc2UgcmVmcmVzaCBpZiBuZWVkZWQuXCI7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=