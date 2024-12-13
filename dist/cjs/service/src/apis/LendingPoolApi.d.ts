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
import * as runtime from '../runtime';
import type { FormattedReserveData, LendingpoolBorrowTxRequest, LendingpoolBorrowTxResponse, LendingpoolDepositTxRequest, LendingpoolDepositTxResponse, LendingpoolRepayTxRequest, LendingpoolRepayTxResponse, LendingpoolUseAssetAsCollateralTxRequest, LendingpoolUseAssetAsCollateralTxResponse, LendingpoolWithdrawTxRequest, LendingpoolWithdrawTxResponse, UserBorrowsResponse, UserDepositsResponse } from '../models/index';
export interface CreateLendingPoolBorrowRequest {
    lendingpoolBorrowTxRequest: LendingpoolBorrowTxRequest;
}
export interface CreateLendingPoolDepositRequest {
    lendingpoolDepositTxRequest: LendingpoolDepositTxRequest;
}
export interface CreateLendingPoolRepayRequest {
    lendingpoolRepayTxRequest: LendingpoolRepayTxRequest;
}
export interface CreateLendingPoolWithdrawRequest {
    lendingpoolWithdrawTxRequest: LendingpoolWithdrawTxRequest;
}
export interface FetchReserveDataByAssetRequest {
    asset?: string;
}
export interface GetUserBorrowsRequest {
    user?: string;
    reserve?: string;
    cursor?: number;
    limit?: number;
}
export interface GetUserDepositsRequest {
    user?: string;
    reserve?: string;
    cursor?: number;
    limit?: number;
}
export interface SetLendingPoolAssetCollateralRequest {
    lendingpoolUseAssetAsCollateralTxRequest: LendingpoolUseAssetAsCollateralTxRequest;
}
/**
 * LendingPoolApi - interface
 *
 * @export
 * @interface LendingPoolApiInterface
 */
export interface LendingPoolApiInterface {
    /**
     * Borrow from lending pool
     * @summary Borrow from lending pool
     * @param {LendingpoolBorrowTxRequest} lendingpoolBorrowTxRequest Borrow transaction request, if amount is not provided, it will be calculated based on the token balance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LendingPoolApiInterface
     */
    createLendingPoolBorrowRaw(requestParameters: CreateLendingPoolBorrowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LendingpoolBorrowTxResponse>>;
    /**
     * Borrow from lending pool
     * Borrow from lending pool
     */
    createLendingPoolBorrow(requestParameters: CreateLendingPoolBorrowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LendingpoolBorrowTxResponse>;
    /**
     * Deposit to lending pool
     * @summary Deposit to lending pool
     * @param {LendingpoolDepositTxRequest} lendingpoolDepositTxRequest Deposit transaction request, if amount is not provided, it will be calculated based on the token balance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LendingPoolApiInterface
     */
    createLendingPoolDepositRaw(requestParameters: CreateLendingPoolDepositRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LendingpoolDepositTxResponse>>;
    /**
     * Deposit to lending pool
     * Deposit to lending pool
     */
    createLendingPoolDeposit(requestParameters: CreateLendingPoolDepositRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LendingpoolDepositTxResponse>;
    /**
     * Repay to lending pool
     * @summary Repay to lending pool
     * @param {LendingpoolRepayTxRequest} lendingpoolRepayTxRequest Repay transaction request, if amount is not provided, it will repay the maximum possible amount
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LendingPoolApiInterface
     */
    createLendingPoolRepayRaw(requestParameters: CreateLendingPoolRepayRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LendingpoolRepayTxResponse>>;
    /**
     * Repay to lending pool
     * Repay to lending pool
     */
    createLendingPoolRepay(requestParameters: CreateLendingPoolRepayRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LendingpoolRepayTxResponse>;
    /**
     * Withdraw from lending pool
     * @summary Withdraw from lending pool
     * @param {LendingpoolWithdrawTxRequest} lendingpoolWithdrawTxRequest Withdraw transaction request, if amount is not provided, it will be calculated based on the user account status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LendingPoolApiInterface
     */
    createLendingPoolWithdrawRaw(requestParameters: CreateLendingPoolWithdrawRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LendingpoolWithdrawTxResponse>>;
    /**
     * Withdraw from lending pool
     * Withdraw from lending pool
     */
    createLendingPoolWithdraw(requestParameters: CreateLendingPoolWithdrawRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LendingpoolWithdrawTxResponse>;
    /**
     * Retrieve data of reserves
     * @summary Fetch Reserve Data By Asset
     * @param {string} [asset] The asset address in hexadecimal format.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LendingPoolApiInterface
     */
    fetchReserveDataByAssetRaw(requestParameters: FetchReserveDataByAssetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FormattedReserveData>>;
    /**
     * Retrieve data of reserves
     * Fetch Reserve Data By Asset
     */
    fetchReserveDataByAsset(requestParameters: FetchReserveDataByAssetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FormattedReserveData>;
    /**
     * Get user borrows of lendingpool
     * @summary Get user borrows of lendingpool
     * @param {string} [user] Ethereum address of the user
     * @param {string} [reserve] Ethereum address of the reserve
     * @param {number} [cursor] Cursor for pagination
     * @param {number} [limit] Limit the number of deposits returned (default is 50)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LendingPoolApiInterface
     */
    getUserBorrowsRaw(requestParameters: GetUserBorrowsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserBorrowsResponse>>;
    /**
     * Get user borrows of lendingpool
     * Get user borrows of lendingpool
     */
    getUserBorrows(requestParameters: GetUserBorrowsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserBorrowsResponse>;
    /**
     * Get user deposits of Lendingpool
     * @summary Get user deposits of Lendingpool
     * @param {string} [user] Ethereum address of the user
     * @param {string} [reserve] Ethereum address of the reserve
     * @param {number} [cursor] Cursor for pagination
     * @param {number} [limit] Limit the number of deposits returned (default is 50)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LendingPoolApiInterface
     */
    getUserDepositsRaw(requestParameters: GetUserDepositsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDepositsResponse>>;
    /**
     * Get user deposits of Lendingpool
     * Get user deposits of Lendingpool
     */
    getUserDeposits(requestParameters: GetUserDepositsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDepositsResponse>;
    /**
     * Allows to enable/disable a specific asset as collateral
     * @summary Enable/Disable asset as collateral
     * @param {LendingpoolUseAssetAsCollateralTxRequest} lendingpoolUseAssetAsCollateralTxRequest UseAssetAsCollateral transaction request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LendingPoolApiInterface
     */
    setLendingPoolAssetCollateralRaw(requestParameters: SetLendingPoolAssetCollateralRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LendingpoolUseAssetAsCollateralTxResponse>>;
    /**
     * Allows to enable/disable a specific asset as collateral
     * Enable/Disable asset as collateral
     */
    setLendingPoolAssetCollateral(requestParameters: SetLendingPoolAssetCollateralRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LendingpoolUseAssetAsCollateralTxResponse>;
}
/**
 *
 */
export declare class LendingPoolApi extends runtime.BaseAPI implements LendingPoolApiInterface {
    /**
     * Borrow from lending pool
     * Borrow from lending pool
     */
    createLendingPoolBorrowRaw(requestParameters: CreateLendingPoolBorrowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LendingpoolBorrowTxResponse>>;
    /**
     * Borrow from lending pool
     * Borrow from lending pool
     */
    createLendingPoolBorrow(requestParameters: CreateLendingPoolBorrowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LendingpoolBorrowTxResponse>;
    /**
     * Deposit to lending pool
     * Deposit to lending pool
     */
    createLendingPoolDepositRaw(requestParameters: CreateLendingPoolDepositRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LendingpoolDepositTxResponse>>;
    /**
     * Deposit to lending pool
     * Deposit to lending pool
     */
    createLendingPoolDeposit(requestParameters: CreateLendingPoolDepositRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LendingpoolDepositTxResponse>;
    /**
     * Repay to lending pool
     * Repay to lending pool
     */
    createLendingPoolRepayRaw(requestParameters: CreateLendingPoolRepayRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LendingpoolRepayTxResponse>>;
    /**
     * Repay to lending pool
     * Repay to lending pool
     */
    createLendingPoolRepay(requestParameters: CreateLendingPoolRepayRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LendingpoolRepayTxResponse>;
    /**
     * Withdraw from lending pool
     * Withdraw from lending pool
     */
    createLendingPoolWithdrawRaw(requestParameters: CreateLendingPoolWithdrawRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LendingpoolWithdrawTxResponse>>;
    /**
     * Withdraw from lending pool
     * Withdraw from lending pool
     */
    createLendingPoolWithdraw(requestParameters: CreateLendingPoolWithdrawRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LendingpoolWithdrawTxResponse>;
    /**
     * Retrieve data of reserves
     * Fetch Reserve Data By Asset
     */
    fetchReserveDataByAssetRaw(requestParameters: FetchReserveDataByAssetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FormattedReserveData>>;
    /**
     * Retrieve data of reserves
     * Fetch Reserve Data By Asset
     */
    fetchReserveDataByAsset(requestParameters?: FetchReserveDataByAssetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FormattedReserveData>;
    /**
     * Get user borrows of lendingpool
     * Get user borrows of lendingpool
     */
    getUserBorrowsRaw(requestParameters: GetUserBorrowsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserBorrowsResponse>>;
    /**
     * Get user borrows of lendingpool
     * Get user borrows of lendingpool
     */
    getUserBorrows(requestParameters?: GetUserBorrowsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserBorrowsResponse>;
    /**
     * Get user deposits of Lendingpool
     * Get user deposits of Lendingpool
     */
    getUserDepositsRaw(requestParameters: GetUserDepositsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDepositsResponse>>;
    /**
     * Get user deposits of Lendingpool
     * Get user deposits of Lendingpool
     */
    getUserDeposits(requestParameters?: GetUserDepositsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDepositsResponse>;
    /**
     * Allows to enable/disable a specific asset as collateral
     * Enable/Disable asset as collateral
     */
    setLendingPoolAssetCollateralRaw(requestParameters: SetLendingPoolAssetCollateralRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LendingpoolUseAssetAsCollateralTxResponse>>;
    /**
     * Allows to enable/disable a specific asset as collateral
     * Enable/Disable asset as collateral
     */
    setLendingPoolAssetCollateral(requestParameters: SetLendingPoolAssetCollateralRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LendingpoolUseAssetAsCollateralTxResponse>;
}
//# sourceMappingURL=LendingPoolApi.d.ts.map