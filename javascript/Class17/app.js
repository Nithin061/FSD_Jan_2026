// let h1 = document.querySelector("h1");

// function Change(color, delay, nextColoChange){

//     setTimeout(()=>{
//             h1.style.color = color;
//             if(nextColoChange){
//                 nextColoChange();
//             }
//         }, delay)

// }

// changeColor("red", 1000, ()=>{


//     changeColor("green", 1000, ()=>{


//         changeColor("blue", 1000);


//     });



// });


// function saveToDb(data, successfn, failurefn){

//         let internetSpeed = Math.floor(Math.random() * 10)+1;

//         if(internetSpeed > 4){
//             success("Data saved successfully");
//         }
//         else{
//             failurefn("Data save failed");
//         }
// }


// saveToDb("Opqtech", (message)=>{
//         console.log("Data saved successfully");
//         saveToDb("Opqtech is best", (message)=>{
//             console.log("Data saved successfully");
//         },
//         (error)=>{
//             console.log("Data save failed");
//         });
//     },

//     (error)=>{
//         console.log("Data save failed");
//     }
// );

function saveToDb(data){

    let obj =  Promise((resolve, reject)=>{

        let internetSpeed = Math.floor(Math.random() * 10)+1;

        if(internetSpeed > 4){
            return resolve("Data saved successfully");
        }
        else{
            return reject("Data save failed");
        }

    })


    return obj;
}

let promise1 = saveToDb("Opqtech");

promise1.then((message)=>{
    console.log(message);
    return saveToDb("Opqtech is best");
}).then((message)=>{
    console.log(message);
    return saveToDb("Opqtech is best in the world");
}).then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
});