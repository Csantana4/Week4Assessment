const express = require("express");
const cors = require("cors");


const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune} = require('./controller/fortune')
const {addAtt}= require ('./controller/attributes')

app.get("/api/compliment", getCompliment, getFortune, addAtt);
// app.get("/api/fortune", getFortune);

// app.post('/api/attributes', addAtt)


app.listen(4000, () => console.log("----Server running on 4000-----"));
 