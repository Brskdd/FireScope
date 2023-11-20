const express = require("express")
const app = express()

let randvar = 100;
function randtherandvar() {
    randvar = Math.floor((Math.random())*100)
}
const runtherandtherandvar = setInterval(randtherandvar,100);

app.get("/api", (req,res) => {
    res.send(200)
})

app.listen(5000, () => {
    console.log("server up")
})