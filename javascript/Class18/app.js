// async function greet() {

//     return "Hello World";
    
// }



// greet().then((message) => {

//     console.log(message);
// }).catch((error) => {

//     console.log(error);
// });


// function getNum(){
//     let obj = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10);
//             console.log(num);
//             resolve(num);
//         }, 1000);
//     });
    
//     return obj;
// }

// async function demo(){
//     try{
//         await getNum();
//         await getNum();
//         await getNum();
//         await getNum();
//         await getNum();
//     }
//     catch(error){
//         console.log(error);
//     }

//     console.log("I am in Demo");
// }

// demo();

function changeColor(color, delay)
{
    let obj = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.random();
            if(num < 0.5){
                reject("Error in changing color");
            }
            console.log(color);
            resolve(color);
            
        }, delay)
    });
    return obj;
}

// changeColor("Red", 1000).then((color)=>{
//     return changeColor("Green", 1000);
// }).then((color)=>{
//     return changeColor("Blue", 1000);
// }).then((color)=>{
//     return changeColor("Yellow", 1000);
// }).then((color)=>{
//     return changeColor("Pink", 1000);
// }   ).catch((error)=>{
//     console.log(error);
// });

async function demo(){
    try{
        await changeColor("Red", 1000);
        await changeColor("Green", 1000);
        await changeColor("Blue", 1000);
        await changeColor("Yellow", 1000);
        await changeColor("Pink", 1000);
    }
    catch(error){
        console.log(error);
    }
}

demo();
