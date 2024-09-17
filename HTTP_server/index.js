import express from 'express'

const app = express();


app.get("/sum/:a/:b", function(req, res) {
    
    const a = parseInt(req.param.a);
    const b = parseInt(req.params.b);

    res.json({
        answer: a + b
    })
});

app.get("/multiply", function(req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        answer: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        answer: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        answer: a - b
    })
});

app.listen(3000);