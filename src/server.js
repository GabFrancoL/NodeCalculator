const express = require('express');
const sendResult = require('./operator_send');
const app = express();
const port = 3000;

app.get('', (req, res) => {
    console.log(req.query);

    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);
    const oper = req.query.oper;

    res.setHeader('Content-Type', 'text/plain');
    sendResult(n1, n2, oper);
});

// app.post('/', (req, res) => {
//     const n1 = req.body.n1;
//     const n2 = req.body.n2;
//     const oper = req.body.oper;
// });

app.listen(port, () => {
    console.log(`Server's running on port ${port}`);
});