/* let person = {
    firstName: "Joseph",
    lastName: "ThankGod",
    age : 20,
    graduate: false,
    nameAndAge: function(){
        return this.firstName + " " + this.lastName;
    } 
}

let try1 = document.getElementById("count-el").innerHTML = person.nameAndAge();
*/

/*let name = ["John ", "frank ",  2 , " Jdjdjk ", " Mom ", " Mkik ", " scum ", 768, " eight ",  7689 ,  34567890 ,  345678, 76, ' tuityui '];
let position = name.length;
for (let i = 0; i < 6; i++){
    console.log(name[i]);
}

console.log(position);*/

let countEl = document.getElementById("count-el");

let count = 0;

function increment(){
    count++
    countEl.innerHTML = count;
}


function decrement(){
    count--
    countEl.innerHTML = count;
    if (count === 0){
        count = 0;
    }
}

