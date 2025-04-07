require('dotenv').config();  // Load environment variables from .env file

const express = require('express');
const cors = require('cors');
const app = express();



app.use(cors());

const PORT = process.env.PORT || 5001;

app.get("/api", (req, res) => {
    console.log("Received request on /api route");
    res.json({ "users": ["UserOne", "UserThree","UserFour","UserFive","Kshitij_215"] });
});

app.listen(PORT, () => {
    
    console.log(`Server started on port ${PORT}`);
});


  // This allows requests from any origin, including http://localhost:3000
