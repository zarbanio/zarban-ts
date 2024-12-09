export * from './accountsApi';
import { AccountsApi } from './accountsApi';
export * from './addressesApi';
import { AddressesApi } from './addressesApi';
export * from './borrowsApi';
import { BorrowsApi } from './borrowsApi';
export * from './collectorApi';
import { CollectorApi } from './collectorApi';
export * from './depositsApi';
import { DepositsApi } from './depositsApi';
export * from './ilksApi';
import { IlksApi } from './ilksApi';
export * from './lendingPoolApi';
import { LendingPoolApi } from './lendingPoolApi';
export * from './logsApi';
import { LogsApi } from './logsApi';
export * from './ordersApi';
import { OrdersApi } from './ordersApi';
export * from './permitApi';
import { PermitApi } from './permitApi';
export * from './pointsApi';
import { PointsApi } from './pointsApi';
export * from './pricesApi';
import { PricesApi } from './pricesApi';
export * from './stableCoinSystemApi';
import { StableCoinSystemApi } from './stableCoinSystemApi';
export * from './stakingApi';
import { StakingApi } from './stakingApi';
export * from './swapApi';
import { SwapApi } from './swapApi';
export * from './vaultsApi';
import { VaultsApi } from './vaultsApi';
export * from './websocketApi';
import { WebsocketApi } from './websocketApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AccountsApi, AddressesApi, BorrowsApi, CollectorApi, DepositsApi, IlksApi, LendingPoolApi, LogsApi, OrdersApi, PermitApi, PointsApi, PricesApi, StableCoinSystemApi, StakingApi, SwapApi, VaultsApi, WebsocketApi];
