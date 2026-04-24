const express = require('express');
const mysql = require("mysql2");
const app = express();
const methodOverride = require('method-override')
const path = require("path")
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'demo_app',
  password: 'nithin@061',
});


// app.get("/", async (req, res)=>{

//     let q = `SELECT COUNT(*) FROM user`

//     try{
//         const [result, fields] = await connection.query(q);
//         console.log(result);
//         res.send("successful")
//     }
//     catch(err){
//         res.status(500).send("some error occured");
//     }
// })

app.get("/", (req, res)=>{

    let q = `SELECT COUNT(*) FROM user`;

    connection.query(q, (err, result)=>{

        if(err)
        {
            res.send("some error with the database");
        }
        else
        {
            console.log(result);
            let count = result[0]["COUNT(*)"];
            res.send(`successful ${count}`);
        }
    });


});


app.get("/users", (req, res)=>{
    let q = `SELECT * FROM user`;
    try{
        connection.query(q, (err, result)=>{
            if(err){
                res.send("some error in database");
            }
            else{
                console.log(result);
                res.render("users.ejs", {result});
            }
        });
    }
    catch(err){
        res.status(500).send("some error occured");
    }
    
});

app.get("/users/:id/edit", (req, res)=>{
    let {id} = req.params;

    let q = `SELECT * FROM user where id='${id}'`;
    console.log(q);
    try{
        connection.query(q, (err, result) =>{
            if(err){
                res.send("some error in DB");
            }
            else
            {
                console.log(result);
                let user = result[0]
                res.render("edit.ejs", {user});
            }
        } )
    }
    catch(err){
        res.send("some error in api execution");
    }

})

app.patch("/users/:id", (req, res)=>{
    let {id} = req.params;
    let user_changes = req.body;

    let q = `SELECT * FROM user WHERE id='${id}'`;

    try{
        connection.query(q, (err, result)=>{
            if(err){
                res.send("some error in DB")
            }
            else
            {
                let user = result[0];
                if(user_changes.password !== user.password)
                {
                    res.send("Wrong Passwprd! Username is not updated");
                }
                else
                {
                    let updateQ = `UPDATE user SET username='${user_changes.username}' WHERE id='${id}'`;
                    connection.query(updateQ, (err, result)=>{
                        if(err)
                        {
                            res.send("some error in DB while updating");
                        }
                        else{
                            res.redirect('/users');
                        }

                    })
                }
            }
        })
    }
    catch(error)
    {
        res.send("some error in DB")
    }

})

