const express= require('express')
const app = express()

app.get("/api", (req, res) =>{
    res.json({"users": ["UserOne", "UserTwo", "userThree", "userFour"]})
})

app.listen(5001, () => { console.log("server started on port 5001")})