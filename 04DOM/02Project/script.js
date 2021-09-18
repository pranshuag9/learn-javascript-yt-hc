var counter  =document.querySelector(".counter");
var followers = document.querySelector(".followers");

counter.innerHTML = 1001;

let count = 1;
let maxFollowers = 1000;

setInterval(()=>{
    if(count < maxFollowers){
        count++;
        counter.innerText = count;
    }
},10);

setTimeout(()=>{
    followers.innerText = "Followers on Instagram";
}, maxFollowers * 10);