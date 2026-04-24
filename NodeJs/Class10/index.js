const mongoose = require("mongoose");




async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/college');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const User = mongoose.model("User", userSchema);

main().then(()=>{
    console.log("Connection successful.")
}).catch(err => console.log(err));


// const user1 = new User({name: "Adam", email: "adam@yahoo.in", age:48});

// user1.save() // to save in database

// const user2 = new User({name: "eve", email: "eve@yahoo.in", age:49});

// user2.save()


// User.insertMany([
//     {name: "Tony", email:"tony@gmail.com", age: 50},
//     {name: "Bruce", email:"bruce@gmail.com", age:47},
//     {name: "Peter", email:"peter@gmail.com", age:30}
// ]).then((data)=>{
//     console.log(data)
// })


// User.find({age: {$gte: 47}}).then((data)=>{
//     console.log(data);
// });

User.findOneAndUpdate({name: "Bruce"}, {age: 72}, {new: true}).then((data)=>{
    console.log(data);
})