"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
//@ts-ignore
function handler(req, res) {
    console.log('listening');
    console.log(req.body.data);
}
exports.handler = handler;
