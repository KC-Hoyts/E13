export let greeting = document.createElement("h3");
export let input = document.createElement("input");
export const post_button = document.createElement("button");
export let info_message = document.createElement("p");


greeting.innerHTML = "You could create a new post at following form:";
post_button.innerHTML = "SEND POST";

input.setAttribute("type", "text");
input.setAttribute("id", "input");
input.setAttribute("class", "input");
input.setAttribute("placeholder", "Enter article title...");

info_message.setAttribute("style", "color: white; font-size: 20px");

const url_posts = "http://localhost:3000/posts";

export async function send_request(data) {
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