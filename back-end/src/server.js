import express, { json } from 'express';
import 'dotenv/config';
import { Location } from '../const/const.js';

const app = express();
app.use(express.json());

app.get("/StoreLocation", (req, res) => {
    //If we this is not safe we can use the .env process.env.LOCATION
    res.status(200).send(JSON.stringify(Location));
});

app.get("/Map", (req, res) => {
    console.log(process.env.MAP_API_KEY);
    res.status(200).send(process.env.MAP_API_KEY);
});

app.listen(8000, ()=>{
    console.log("Server is listening on port 8000");
});