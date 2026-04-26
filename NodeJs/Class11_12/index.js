const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require('method-override');

const app = express()
const port = 3000;

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

main().then(() => console.log('MongoDB connected')).catch(err => console.log(err));


app.get("/", (req, res)=>{
    res.send("Hello World");
})

app.get("/chats", async (req, res)=>{
    try{
       const result = await Chat.find()
       console.log(result)
       res.render("index.ejs", {result});
    }
    catch(err){
        res.status(500).send("Error fetching the chats");
    }
})

app.get("/chats/new", (req, res)=>{
    res.render("new.ejs");
})

app.post("/chats/new", async(req, res)=>{

    const data = {...req.body, created_at: new Date()};
    const newChat = new Chat(data);
    try
    {
        await newChat.save();
        res.redirect('/chats')
    }
    catch{
        console.log(err);
        res.status(500).send("Error saving chat");
    }
})

app.get("/chats/:id/edit", async (req, res)=>{
    const chat = await Chat.findById(req.params.id);
    res.render("edit.ejs", {chat});
})

app.patch("/chats/:id/edit", async (req, res)=>{
    const {msg} = req.body; 
    await Chat.findByIdAndUpdate(req.params.id, {msg});
    res.redirect("/chats");
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});