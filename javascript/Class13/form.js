let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let user = this.querySelector("#user");
    let pass = this.querySelector("#pass");
    console.log(user.value);
    console.log(pass.value);
    alert("form submitted");
})

let user = document.querySelector("#user");
let pass = document.querySelector("#pass");

user.addEventListener('change', function(){
    console.log('change event happened');
})