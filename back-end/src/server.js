import express from 'express';
import { Location } from '../const/const.js';

const app = express();
app.use(express.json());

app.get("/StoreLocation", (req, res) => {
    res.send(JSON.stringify(Location));
});

app.listen(8000, ()=>{
    console.log("Server is listening on port 8000");
});