const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors())

app.post('/api/compliment')

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const {addAtt} = require('./controller/attributes')



app.get("/api/compliment", getCompliment, getFortune,addAtt);

app.listen(4000, () => console.log("Server running on 4000"));
 