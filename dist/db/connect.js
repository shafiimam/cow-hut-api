"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config"));
const connect = async () => {
    try {
        await mongoose_1.default.connect(config_1.default.dataBaseUrl);
        console.log('Database connection established');
    }
    catch (error) {
        console.log(`Database connection: ${error}`);
    }
};
exports.default = connect;
