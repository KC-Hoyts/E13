(()=>{"use strict";let e,t="";fetch("http://localhost:3000/comments").then((e=>e.json())).then((t=>{e=t})).catch((()=>{})),setInterval((()=>{fetch("http://localhost:3000/posts").then((e=>e.json())).then((n=>{t="",n.forEach((n=>{t+=`\n            <div class="post-container">\n                <h4>${n.title.toString().toUpperCase()}</h4>\n                <p style="font-size: 15px;">${n.views} views</p>\n                <br>\n                <div>\n                    <b><i>Post comments:</i></b><br>\n                    <p class="comments">${function(e,t){let n=[];for(let s=0;s<t.length;s++)t[s].postId==e.id&&(n.push(" - "),n.push(t[s].text.toString()),n.push("<br>"));let s="";return n.forEach((e=>{s+=e})),s}(n,e)}</p>\n                </div>\n            </div>`}))})).catch((e=>{t="Sorry, but seems server unavailable now. <br> Please, Try request again later.<br><br>ERROR:<br>"+e}))}),1e3);let n=document.createElement("h3"),s=document.createElement("input");const o=document.createElement("button");let l=document.createElement("p");n.innerHTML="You could create a new post at following form:",o.innerHTML="SEND POST",s.setAttribute("type","text"),s.setAttribute("id","input"),s.setAttribute("class","input"),s.setAttribute("placeholder","Enter article title..."),l.setAttribute("style","color: white; font-size: 20px");const r=document.getElementById("posts-container"),i=document.getElementById("create-container"),c=document.getElementById("parent"),a=document.createElement("p");a.style="font-size: 30px; color: red",a.innerHTML="",c.insertAdjacentElement("beforeEnd",a);const d=document.getElementById("send-requests");d.addEventListener("click",(()=>{let e=document.getElementsByClassName("lds-spinner")[0];e.style="display: inline-block",setTimeout((()=>{r.innerHTML=t,e.style="display: none",i.insertAdjacentElement("afterBegin",s),i.insertAdjacentElement("afterBegin",n),i.insertAdjacentElement("beforeEnd",o),i.insertAdjacentElement("beforeEnd",l),o.addEventListener("click",(async()=>{const e={title:s.value,views:0};await async function(e){try{await fetch("http://localhost:3000/posts",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}),l.innerHTML="Post was succesfully created."}catch(e){l.innerHTML=`Error while tried sent request:<br> ${e}`}}(e),await setTimeout((()=>{d.click(),setTimeout((()=>{document.body.scrollIntoView({behavior:"smooth",block:"end"}),r.lastElementChild.style="background-color: red",r.lastElementChild.style.transition="background-color 3s",setTimeout((()=>{r.lastElementChild.style="background-color: none",r.lastElementChild.style.transition="background-color 3s"}),3e3)}),2e3)}),1e3)}))}),1100)}))})();