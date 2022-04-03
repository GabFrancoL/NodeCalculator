const operators = [
    'sum',
    'minus',
    'times',
    'divide',
    'elevate',
    'root',
    'log'
];

function doOperation(input_operator, n1, n2, operators) {
    switch (input_operator) {
        case operators[0]:
            return (`${n1} + ${n2} = ${n1 + n2}`)
            
        case operators[1]:
            return (`${n1} - ${n2} = ${n1 - n2}`)
            
        case operators[2]:
            return (`${n1} x ${n2} = ${n1 * n2}`)
            
        case operators[3]:
            return (`${n1} / ${n2} = ${n1 / n2}`)
            
        case operators[4]:
            return (`${n1} ^ ${n2} = ${n1 ** n2}`)
            
        case operators[5]:
            return (`${n1} ^ (1 / ${n2}) = ${n1 ** (1/n2)}`)

        case operators[6]:
            return (`log(${n2}, ${n1}) = ${Math.log(n1, n2)}`)
    }
};

module.exports = {
    operators,
    doOperation
};