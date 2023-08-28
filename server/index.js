const express = require("express");
const cors = require("cors");

const controller= require('./controller')


const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getAdvice, getAffirmation, addAtt } = require('./controller')

app.get("/api/compliment", getCompliment)
app.get("/api/fortune", getFortune)
app.get("/api/advice", getAdvice)
app.get("/api/affirmation", getAffirmation)
app.post("/api/attribute", addAtt)



app.listen(4000, () => console.log("Server running on 4000"));
