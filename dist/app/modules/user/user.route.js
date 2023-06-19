"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = require("../../middlewares/validateRequest/validateRequest");
const user_controller_1 = require("./user.controller");
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
router.get('/users', user_controller_1.getAllUsers);
router.get('/users/:id', user_controller_1.getUserById);
router.patch('/users/:id', (0, validateRequest_1.validateRequest)(user_validation_1.userValidation.updateUserZodSchema), user_controller_1.updateUser);
router.delete('/users/:id', user_controller_1.deleteUser);
router.post('/auth/signup', (0, validateRequest_1.validateRequest)(user_validation_1.userValidation.createUserZodSchema), user_controller_1.createUser);
exports.userRoutes = router;
