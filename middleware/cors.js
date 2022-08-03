"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsHandler = void 0;
//@ts-ignore
function corsHandler(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
}
exports.corsHandler = corsHandler;
