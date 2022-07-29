"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
//@ts-ignore
function handler(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    console.log('listening');
    // const body = req.body.Body
    // console.log(body);
}
exports.handler = handler;
