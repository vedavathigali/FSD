var execute = function (action, x, y) {
    var result;
    switch (action) {
        case 'add':
            result = _add(x, y);
            break;
        case 'diff':
            result = _diff(x, y);
            break;
        case 'mul':
            result = _mul(x, y);
    }
    return result;
};
var _add = function (x, y) {
    return x + y;
};
var _diff = function (x, y) {
    return x - y;
};
var _mul = function (x, y) {
    return x * y;
};
console.log(execute("add", 5, 10));
console.log(execute("diff", 5, 10));
console.log(execute("mul", 5, 10));
