const express = require("express")
const app = express()
const port = 3000

app.get("/",function(req, res){
    res.send("HELLO, LADIES AND GENTLEMEN, ARE YOU GUYS HAVING FUN?")
})

app.listen(process.env.PORT || port)