let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener('click', function(){
    console.log(inp.value)
    let item = document.createElement("li");
    item.innerText = inp.value;


    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete")
    item.appendChild(delBtn);
    
    // delBtn.addEventListener("click", function () {
    //     let par = this.parentElement;
    //     console.log(par);
    //     par.remove();
    // });


    ul.appendChild(item);
    inp.value = "";
})

// let delBtns = document.querySelectorAll(".delete");

// for (delBtn of delBtns) {
//   delBtn.addEventListener("click", function () {
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
//   });
// }


ul.addEventListener('click', function(event){
   if(event.target.nodeName === "BUTTON")
   {
        event.target.parentElement.remove();
        console.log("task has been removed from dom")
   }
})
