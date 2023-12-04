const express = require("express");
const { connection } = require("./db");

const { postRouter } = require("./Routes/Posts.route");
const cors=require("cors")


const app = express();

app.use(express.json());
app.use(cors())


app.use("/Appointments", postRouter);



app.listen(8080, async() => {
    try{
      await connection;
      console.log("Connected to the DB");
      console.log(`Running at 8080 port`);
    }catch(err){
        console.log(err);
    }
})