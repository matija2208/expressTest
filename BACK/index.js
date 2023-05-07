const ex=require("express");
const cors = require("cors");

const baza = require("./baza/baza");

const USER = require("./baza/FUNKCIJE/user");

const app = ex();

const PORT = 80;

app.use(cors());
app.use(ex.json());

app.use(ex.static("../FRONT"));

app.listen(PORT,function (){
    console.log("server slusa na portu: "+PORT+"\n");
})

baza();



app.get("/api/user", USER.get);
app.post("/api/user", USER.post);
