let countEl = document.getElementById("count-el");

let count = 0;

function increment(){
    count++
    countEl.innerHTML = count;
}


function decrement(){
    count--
    countEl.innerHTML = count;
}

function reset(){
    count = 0;
    countEl.innerHTML = count;
}


let question = prompt("What's your age", "");

if (question <= 0 || question <= 18){
    alert("You can check the program out")
}

else if (question >= 19 && question <= 30){
    alert("You're old enough to do what ever you pleased")
}

else{
    alert("Bomboclate my bro")
}

