const title = document.querySelector("#title");

console.dir(title);

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handler(){
    const Tcolor = title.style.color;
    console.log(Tcolor);
    if(Tcolor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }
    else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter",handler);
}

init();

function handoff(){
    console.log("인터넷꺼짐!");
}

function handon(){
    console.log("인터넷연결됨!");
}

window.addEventListener("offline",handoff);
window.addEventListener("online",handon);