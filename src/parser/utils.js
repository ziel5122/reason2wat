"use strict";
exports.__esModule = true;
exports.isDigit = function (c) { return /^[0-9]$/.test(c); };
exports.isIdStart = function (c) { return /^[a-z_]$/.test(c); };
exports.isId = function (c) { return /^[a-z0-9-_]$/.test(c); };
