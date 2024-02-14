export let requested_data = "";

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

