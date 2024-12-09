export * from './authApi';
import { AuthApi } from './authApi';
export * from './balanceApi';
import { BalanceApi } from './balanceApi';
export * from './coinsApi';
import { CoinsApi } from './coinsApi';
export * from './depositApi';
import { DepositApi } from './depositApi';
export * from './healthApi';
import { HealthApi } from './healthApi';
export * from './loansApi';
import { LoansApi } from './loansApi';
export * from './paymentApi';
import { PaymentApi } from './paymentApi';
export * from './pointsApi';
import { PointsApi } from './pointsApi';
export * from './redemptionsApi';
import { RedemptionsApi } from './redemptionsApi';
export * from './referralsApi';
import { ReferralsApi } from './referralsApi';
export * from './swapApi';
import { SwapApi } from './swapApi';
export * from './tasksApi';
import { TasksApi } from './tasksApi';
export * from './transactionsApi';
import { TransactionsApi } from './transactionsApi';
export * from './userApi';
import { UserApi } from './userApi';
export * from './withdrawApi';
import { WithdrawApi } from './withdrawApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AuthApi, BalanceApi, CoinsApi, DepositApi, HealthApi, LoansApi, PaymentApi, PointsApi, RedemptionsApi, ReferralsApi, SwapApi, TasksApi, TransactionsApi, UserApi, WithdrawApi];
