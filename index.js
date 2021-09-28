const express = require("express")
const app = express()

app.get("/",function(req, res){
    res.send("HELLO, LADIES AND GENTLEMEN")
})

app.listen(3000)