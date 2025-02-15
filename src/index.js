require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectdb=require('./db');
const userRouter = require("../routes/user"); 
const itineraryRouter = require("../routes/itinerary"); 
const app = express();
app.use(cors());

const corsOptions = {
    origin: ["gotravel-wine.vercel.app"],
    methods: "POST,GET,PUT,DELETE,PATCH,HEAD",
    credentials: true,
};

app.use(express.json());

app.use(cors(corsOptions)); 
app.use("/api", itineraryRouter); 
app.use("/user",userRouter );


const PORT = 3000;
connectdb().then(()=>{
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })
})
