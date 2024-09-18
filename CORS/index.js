import express from "express"

const app = express();

app.get("/sum", (req, res) => {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        answer: a + b,
    });
});

app.listen(3000);