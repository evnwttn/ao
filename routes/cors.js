"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
//@ts-ignore
function handler(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
}
exports.handler = handler;
