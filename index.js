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



