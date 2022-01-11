"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (req, res, next) => {
    if (req.headers["auth-token"] == undefined) {
        console.log(req.headers["auth-token"]);
        return res.status(401).send('Token is missing. Please enter a valid token');
    }
    let token = req.headers["auth-token"].toString();
    try {
        let decoded = jsonwebtoken_1.default.verify(token, "altaf");
        console.log(decoded);
    }
    catch (e) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};
module.exports = verifyToken;
