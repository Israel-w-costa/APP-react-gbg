require("dotenv").config();
const db = require ("./db");

const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());

app.use(cors());

app.get("/api/banner", async ( request,response) =>{
    const results = await db.getBanner()
    response.json(results)
})

app.post ("/api/banner", async (request, response) =>{
    const banner = request.body;
    await db.insertBanner(banner);
    response.sendStatus(201);
})

app.delete("/api/banner/:id", async(request,response) =>{
    const id = parseInt( request.params.id);
    await db.deleteBanner(id)
    response.sendStatus(204)
})


app.listen(process.env.PORT,() => {
    console.log("App is running");
    }
)