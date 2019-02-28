var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var StaticCalculator = /** @class */ (function () {
    function StaticCalculator() {
    }
    StaticCalculator._add = function (_first, _second) {
        return _first + _second;
    };
    return StaticCalculator;
}());
var Calculator = /** @class */ (function (_super) {
    __extends(Calculator, _super);
    function Calculator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._first = 10;
        return _this;
    }
    return Calculator;
}(StaticCalculator));
var calc = new Calculator();
var abc = {
    _third: 1
};
// static attributes have
// direct access via class name 
var sum = Calculator._add(10, 2);
console.log('SUM is ', sum);
