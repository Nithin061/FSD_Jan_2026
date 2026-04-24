const express = require('express');
const app = express();
const path = require('path');
const port = 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views' ))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.post('/register', (req, res)=>{
    console.log(req.body);
    res.send('Posted')
})
app.get('/', (req, res)=>{
    res.render('index.ejs');
})
app.listen(port, ()=>{
    console.log(`Server is listening at the port: ${port}`)
})

