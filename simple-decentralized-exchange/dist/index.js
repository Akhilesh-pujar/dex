"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
let ETH_BALANCE = 200;
let USDC_BALANCE = 70000;
app.post("/add-liquidity", (req, res) => {
});
app.post("/buy-asset", (req, res) => {
    const quantity = req.body.quantity;
    const updatedquantity = ETH_BALANCE - quantity;
    const updated_balance = ETH_BALANCE * USDC_BALANCE / updatedquantity;
    const paidAmount = updated_balance - USDC_BALANCE;
    ETH_BALANCE = updatedquantity;
    USDC_BALANCE = updated_balance;
    res.json({
        message: `You paid  ${paidAmount} USDC for ${quantity}ETH`
    });
});
app.post("/sell-asset", (req, res) => {
    const quantity = req.body.quantity;
    const updatedquantity = USDC_BALANCE - quantity;
    const updated_balance_eth = ETH_BALANCE * USDC_BALANCE / updatedquantity;
    const paidAmount = updated_balance_eth - ETH_BALANCE;
    ETH_BALANCE = updatedquantity;
    USDC_BALANCE = updated_balance_eth;
    res.json({
        message: `You paid  ${paidAmount} USDC for ${quantity}ETH`
    });
});
app.post("/quote", (req, res) => {
});
app.listen(3000);
