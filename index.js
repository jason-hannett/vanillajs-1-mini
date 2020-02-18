// console.log("hello world")

let count = 0;
const element = document.getElementById("counter");

function increase(){
    count = count + 1;
    // console.log(count)
    element.innerText = count;
    // count.addEventListener("click", )
}

increase()

function decrease(){
    count = count -1;
    element.innerText = count;
    // console.log(count)
}

decrease()

function reset(){
    count = 0
    count.innerHTML = "<mark>" + count + "</mark>";
    // console.log(count)
}

reset()


function selectTheme(theme){
    document.getElementsByTagName("body").className = "theme";
    document.getElementsByTagName("main").className = "theme";
    const buttons = document.getElementsByTagName("button");
    
    for (i = 0; i < buttons.length; i++){
        buttons[i].className = theme;
    }
}


