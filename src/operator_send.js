const express = require('express');
const { doOperation, operators } = require('./operation');
const app = express();

function sendResult(n1, n2, oper) {
    app.get('', (req, res) => {
        if (isNaN(n1) || isNaN(n2)) {
            res.statusCode = 404;
            res.end(`Invalid number(s)`);    
        } else {
            for (let i = 0; i < operators.length; i++) {
                var aux = operators[i] == oper;
                if (aux) {
                    break;
                };
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
    },
)};

module.exports = sendResult;