"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDecimalCast = exports.stringToSimpleArray = exports.simpleArrayToString = exports.dateToTimeString = exports.dateToDateString = exports.dateToDateTimeString = void 0;
var pad = function (val, num) {
    if (num === void 0) { num = 2; }
    return '0'.repeat(num - (val.toString()).length) + val;
};
var dateToDateTimeString = function (date) {
    var year = date.getUTCFullYear();
    var month = date.getUTCMonth() + 1; // Convert to human month
    var day = date.getUTCDate();
    var hours = date.getUTCHours();
    var minutes = date.getUTCMinutes();
    var seconds = date.getUTCSeconds();
    var ms = date.getUTCMilliseconds();
    var fraction = ms <= 0 ? '' : ".".concat(pad(ms, 3));
    return "".concat(year, "-").concat(pad(month), "-").concat(pad(day), " ").concat(pad(hours), ":").concat(pad(minutes), ":").concat(pad(seconds)).concat(fraction);
};
exports.dateToDateTimeString = dateToDateTimeString;
var dateToDateString = function (date) {
    if (typeof date === 'string') {
        return date;
    }
    var year = date.getUTCFullYear();
    var month = date.getUTCMonth() + 1; // Convert to human month
    var day = date.getUTCDate();
    return "".concat(year, "-").concat(pad(month), "-").concat(pad(day));
};
exports.dateToDateString = dateToDateString;
var dateToTimeString = function (date) {
    if (typeof date === 'string') {
        return date;
    }
    var hours = date.getUTCHours();
    var minutes = date.getUTCMinutes();
    var seconds = date.getUTCSeconds();
    var ms = date.getUTCMilliseconds();
    var fraction = ms <= 0 ? '' : ".".concat(pad(ms, 3));
    return "".concat(pad(hours), ":").concat(pad(minutes), ":").concat(pad(seconds)).concat(fraction);
};
exports.dateToTimeString = dateToTimeString;
var simpleArrayToString = function (value) {
    if (Array.isArray(value)) {
        return value
            .map(function (i) { return String(i); })
            .join(',');
    }
    return value;
};
exports.simpleArrayToString = simpleArrayToString;
var stringToSimpleArray = function (value) {
    if (value instanceof String || typeof value === 'string') {
        if (value.length > 0) {
            return value.split(',');
        }
        return [];
    }
    return value;
};
exports.stringToSimpleArray = stringToSimpleArray;
var getDecimalCast = function (_a) {
    var precision = _a.precision, scale = _a.scale;
    if (!precision)
        return 'DECIMAL';
    if (!scale)
        return "DECIMAL(".concat(precision, ")");
    return "DECIMAL(".concat(precision, ",").concat(scale, ")");
};
exports.getDecimalCast = getDecimalCast;
//# sourceMappingURL=transform.utils.js.map