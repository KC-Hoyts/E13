import './style.css';
import * as test from "./module1.js";
import * as post_form from "./post_form.js";

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
        container.innerHTML = test.requested_data;

        // load-ring disactivate and disappear
        load_ring.style = "display: none";

        // Create pseudo-form for new post creation
        creation.insertAdjacentElement("afterBegin", post_form.input);
        creation.insertAdjacentElement("afterBegin", post_form.greeting);
        creation.insertAdjacentElement("beforeEnd", post_form.post_button);
        creation.insertAdjacentElement("beforeEnd", post_form.info_message);

        post_form.post_button.addEventListener("click", async () => {
            // read user`s info from input
            const data = {"title": post_form.input.value, "views": 0};

            // create post by send
            await post_form.send_request(data);

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
if (import.meta.webpackHot) {
    import.meta.webpackHot.accept('./module1.js', function () {
        checkbox.innerHTML += "<br>'Module1' js code was updated. Please refresh if needed.";
    });
  }

  if (import.meta.webpackHot) {
    import.meta.webpackHot.accept('./post_form.js', function () {
        checkbox.innerHTML += "<br>'Post_form' js code was updated. Please refresh if needed.";
    });
  }

