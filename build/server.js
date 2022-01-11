"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./routes/api"));
const router = (0, express_1.default)();
router.use(express_1.default.urlencoded({ extended: false }));
router.use(express_1.default.json());
router.use('/', api_1.default);
router.listen("3000", () => {
    console.log(`Example app listening at http://localhost:3000`);
});
