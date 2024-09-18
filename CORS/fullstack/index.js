// import express from "express";
// import cors from 'cors';
const express = require("express")
const app = express();
// app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.sendFile(__dirname+ "/frontend/index.html")
});

app.post("/sum", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        answer: a + b,
    });
});

app.listen(3000);