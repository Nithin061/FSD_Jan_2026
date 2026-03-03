let btn = document.querySelector("button");

// function sayHello(){
//     alert("Heloo!")
// }

// function sayName(){
//     alert("Opqtech")
// }
// let btns = document.querySelectorAll("button")


// for(b of btns)
// {
//     b.addEventListener('click', sayHello);
//     b.addEventListener('click', sayName);
// }


btn.addEventListener('mouseenter', function(event){
    console.log(event)
    console.log("mouseenter event happened")
});

let input_element = document.querySelector("input");
input_element.addEventListener('keypress', function(event){
    console.log(event.key)
    console.log("key was pressed");
})