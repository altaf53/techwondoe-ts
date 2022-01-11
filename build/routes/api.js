"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.send("hello world");
});
//LOGIN API RETURN JWT TOKEN
router.get('/login', (req, res) => {
    let token = jsonwebtoken_1.default.sign({ user: "admin" }, "altaf", { expiresIn: 60 * 60 });
    // console.log(token)
    res.send({
        "token": token
    });
});
module.exports = router;
