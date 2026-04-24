const express = require('express')

const app = express();

const port = 3000;

const path = require('path')
const {v4: uuidv4} = require('uuid')
const methodOverride = require('method-override')

let posts = [
    {id: uuidv4(), username: 'opqtech', content:'Hello, this is my first post'},
    {id: uuidv4(), username: 'shiva', content:'Hello, this is my third post'},
    {id: uuidv4(), username: 'radha', content:'Hello, this is my second post'}
]

app.set('view engine', "ejs");
app.set("views", path.join(__dirname, "views"))


app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))


app.get('/', (req, res)=>{
    res.send("server is reachable");
});

app.get('/posts', (req, res)=>{
    res.render('index.ejs', {posts})
});


//handle new post creation.

app.get("/posts/newpost", (req, res)=>{

    res.render("newpost.ejs")
})

app.post("/posts", (req, res)=>{
    console.log(req.body);
    posts.push({id:uuidv4(), ...req.body})
    
    res.redirect("/posts")
});

app.get("/posts/:id", (req, res)=>{
    let id = req.params.id;
    let post = posts.find(p=> p.id == id)
    res.render("post.ejs", {post})

})

app.get("/posts/:id/edit", (req, res)=>{
    let id = req.params.id;
    let post = posts.find(p=> p.id == id)
    res.render("editpost.ejs", {post})

})

app.patch("/posts/:id/",(req, res)=>{
    let id = req.params.id;
    let {content} = req.body;

    let post = posts.find(p => p.id==id)

    post.content = content;
    console.log(posts)
    res.redirect("/posts")
})

app.listen(port, ()=>{
    console.log(`Server is running at the port: ${port}`)
});


