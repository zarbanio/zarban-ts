"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Zarban API
 * API for Zarban services.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: info@zarban.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsocketApi = exports.VaultsApi = exports.SwapApi = exports.StakingApi = exports.StableCoinSystemApi = exports.PricesApi = exports.PointsApi = exports.PermitApi = exports.OrdersApi = exports.LogsApi = exports.LendingPoolApi = exports.IlksApi = exports.DepositsApi = exports.CollectorApi = exports.BorrowsApi = exports.AddressesApi = exports.AccountsApi = void 0;
exports.AccountsApi = __importStar(require("./api/accounts-api"));
exports.AddressesApi = __importStar(require("./api/addresses-api"));
exports.BorrowsApi = __importStar(require("./api/borrows-api"));
exports.CollectorApi = __importStar(require("./api/collector-api"));
exports.DepositsApi = __importStar(require("./api/deposits-api"));
exports.IlksApi = __importStar(require("./api/ilks-api"));
exports.LendingPoolApi = __importStar(require("./api/lending-pool-api"));
exports.LogsApi = __importStar(require("./api/logs-api"));
exports.OrdersApi = __importStar(require("./api/orders-api"));
exports.PermitApi = __importStar(require("./api/permit-api"));
exports.PointsApi = __importStar(require("./api/points-api"));
exports.PricesApi = __importStar(require("./api/prices-api"));
exports.StableCoinSystemApi = __importStar(require("./api/stable-coin-system-api"));
exports.StakingApi = __importStar(require("./api/staking-api"));
exports.SwapApi = __importStar(require("./api/swap-api"));
exports.VaultsApi = __importStar(require("./api/vaults-api"));
exports.WebsocketApi = __importStar(require("./api/websocket-api"));
