const express = require('express');
const app = express();
const port = 3000;

function getInput(param){
    var param = param;
    if (typeof(Number)) {
        param = parseFloat(param);
    } else {

    };

    app.param('n1=')
}