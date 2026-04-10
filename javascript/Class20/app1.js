let url = "https://catfact.ninja/fact";

let btn = document.querySelector("button");
let p = document.querySelector("p");


let url2 = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener('click', async ()=>{

    let res = await axios.get(url2);

});
