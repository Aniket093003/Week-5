
import express from 'express'

const app = express();

let reqCount = 0;

function check(req, res, next){
    reqCount += 1;
    console.log("total number of requests = " + reqCount);
    req.reqCount = reqCount;
    next();
}
   
app.get("/sum",check , function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    console.log("total number of requests = " + reqCount);

    res.json({
        ans: a + b,
    })
});

app.get("/multiply",check , function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b,
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b,
    })

});

app.get("/subtract", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a - b
    })
});

app.listen(3000);