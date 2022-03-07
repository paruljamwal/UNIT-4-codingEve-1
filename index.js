const express = require("express");
const app = express();
 app.use(logger)

var books=[
    {name:"nodejs", author:"abc" , library:"oxford"},
    {name:"javascript",author:"def" , library:"XYZ"}
]
app.get("/books/:name", (req, res) => {
    const book=books.find(value=>value.name===(req.param.name))
    if(book){
        res.send(req.param.name)
    }
    else{
        res.status(404).send()
    }

   
})

app.get("/libraries",checkPermission, (req, res) => {
    res.send({ route: "libraries", permission: true })
})

app.get("/authors",checkPermission, (req, res) => {
    res.send({ route: "/authors", permission: true })
})


function logger(req, res, next) {
    console.log("Login")
    next()
}

function checkPermission(req,res,next){
    if("/authors"===true){
        res.send(authors)
    }
else if("/libraries"===true){
        res.send(libraries)
}
else{
    res.status(404).send()
}
next();
}





app.listen("5050", () => {
    console.log("listening to port 5050")
})
