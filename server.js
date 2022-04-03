const express = require('express');
const { doOperation, operators } = require('./operation');
const app = express();
const port = 3000;

app.get('', (req, res) => {
    console.log(req.query);

    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);
    const oper = req.query.oper;

    res.setHeader('Content-Type', 'text/plain');
    
    if (isNaN(n1) || isNaN(n2)) {
        res.statusCode = 404;
        res.end(`Invalid number(s)`);    
    } else {
        for (let i = 0; i < operators.length; i++) {
            var aux = operators[i] == oper;
            if (aux) {
                break;
            }
        };

        if (oper == 'divide' && n2 == 0) {
            res.statusCode = 404;
            res.end(`Cannot divide ${n1} by 0`);    
        } else if (aux) {
            res.statusCode = 200;
            const result = doOperation(oper, n1, n2, operators);
            res.end(result);
            console.log(result);
        } else {
            res.statusCode = 404;
            res.end(`The operator '${oper}' is invalid`);
        }
    };
});

app.listen(port, () => {
    console.log(`Server's running on port ${port}`);
});