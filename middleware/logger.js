"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
//@ts-ignore
function logger(req, res, next) {
    console.log(`[REQUEST] ${req.path}`);
    next();
}
exports.logger = logger;
