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
import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
import { type RequestArgs, BaseAPI } from '../base';
import type { FormattedReserveData } from '../model';
import type { LendingpoolBorrowTxRequest } from '../model';
import type { LendingpoolBorrowTxResponse } from '../model';
import type { LendingpoolDepositTxRequest } from '../model';
import type { LendingpoolDepositTxResponse } from '../model';
import type { LendingpoolRepayTxRequest } from '../model';
import type { LendingpoolRepayTxResponse } from '../model';
import type { LendingpoolUseAssetAsCollateralTxRequest } from '../model';
import type { LendingpoolUseAssetAsCollateralTxResponse } from '../model';
import type { LendingpoolWithdrawTxRequest } from '../model';
import type { LendingpoolWithdrawTxResponse } from '../model';
import type { UserBorrowsResponse } from '../model';
import type { UserDepositsResponse } from '../model';
/**
 * LendingPoolApi - axios parameter creator
 * @export
 */
export declare const LendingPoolApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Borrow from lending pool
     * @summary Borrow from lending pool
     * @param {LendingpoolBorrowTxRequest} lendingpoolBorrowTxRequest Borrow transaction request, if amount is not provided, it will be calculated based on the token balance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createLendingPoolBorrow: (lendingpoolBorrowTxRequest: LendingpoolBorrowTxRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Deposit to lending pool
     * @summary Deposit to lending pool
     * @param {LendingpoolDepositTxRequest} lendingpoolDepositTxRequest Deposit transaction request, if amount is not provided, it will be calculated based on the token balance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createLendingPoolDeposit: (lendingpoolDepositTxRequest: LendingpoolDepositTxRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Repay to lending pool
     * @summary Repay to lending pool
     * @param {LendingpoolRepayTxRequest} lendingpoolRepayTxRequest Repay transaction request, if amount is not provided, it will repay the maximum possible amount
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createLendingPoolRepay: (lendingpoolRepayTxRequest: LendingpoolRepayTxRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Withdraw from lending pool
     * @summary Withdraw from lending pool
     * @param {LendingpoolWithdrawTxRequest} lendingpoolWithdrawTxRequest Withdraw transaction request, if amount is not provided, it will be calculated based on the user account status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createLendingPoolWithdraw: (lendingpoolWithdrawTxRequest: LendingpoolWithdrawTxRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Retrieve data of reserves
     * @summary Fetch Reserve Data By Asset
     * @param {string} [asset] The asset address in hexadecimal format.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchReserveDataByAsset: (asset?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get user borrows of lendingpool
     * @summary Get user borrows of lendingpool
     * @param {string} [user] Ethereum address of the user
     * @param {string} [reserve] Ethereum address of the reserve
     * @param {number} [cursor] Cursor for pagination
     * @param {number} [limit] Limit the number of deposits returned (default is 50)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserBorrows: (user?: string, reserve?: string, cursor?: number, limit?: number, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get user deposits of Lendingpool
     * @summary Get user deposits of Lendingpool
     * @param {string} [user] Ethereum address of the user
     * @param {string} [reserve] Ethereum address of the reserve
     * @param {number} [cursor] Cursor for pagination
     * @param {number} [limit] Limit the number of deposits returned (default is 50)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserDeposits: (user?: string, reserve?: string, cursor?: number, limit?: number, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Allows to enable/disable a specific asset as collateral
     * @summary Enable/Disable asset as collateral
     * @param {LendingpoolUseAssetAsCollateralTxRequest} lendingpoolUseAssetAsCollateralTxRequest UseAssetAsCollateral transaction request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    setLendingPoolAssetCollateral: (lendingpoolUseAssetAsCollateralTxRequest: LendingpoolUseAssetAsCollateralTxRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * LendingPoolApi - functional programming interface
 * @export
 */
export declare const LendingPoolApiFp: (configuration?: Configuration) => {
    /**
     * Borrow from lending pool
     * @summary Borrow from lending pool
     * @param {LendingpoolBorrowTxRequest} lendingpoolBorrowTxRequest Borrow transaction request, if amount is not provided, it will be calculated based on the token balance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createLendingPoolBorrow(lendingpoolBorrowTxRequest: LendingpoolBorrowTxRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LendingpoolBorrowTxResponse>>;
    /**
     * Deposit to lending pool
     * @summary Deposit to lending pool
     * @param {LendingpoolDepositTxRequest} lendingpoolDepositTxRequest Deposit transaction request, if amount is not provided, it will be calculated based on the token balance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createLendingPoolDeposit(lendingpoolDepositTxRequest: LendingpoolDepositTxRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LendingpoolDepositTxResponse>>;
    /**
     * Repay to lending pool
     * @summary Repay to lending pool
     * @param {LendingpoolRepayTxRequest} lendingpoolRepayTxRequest Repay transaction request, if amount is not provided, it will repay the maximum possible amount
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createLendingPoolRepay(lendingpoolRepayTxRequest: LendingpoolRepayTxRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LendingpoolRepayTxResponse>>;
    /**
     * Withdraw from lending pool
     * @summary Withdraw from lending pool
     * @param {LendingpoolWithdrawTxRequest} lendingpoolWithdrawTxRequest Withdraw transaction request, if amount is not provided, it will be calculated based on the user account status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createLendingPoolWithdraw(lendingpoolWithdrawTxRequest: LendingpoolWithdrawTxRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LendingpoolWithdrawTxResponse>>;
    /**
     * Retrieve data of reserves
     * @summary Fetch Reserve Data By Asset
     * @param {string} [asset] The asset address in hexadecimal format.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchReserveDataByAsset(asset?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FormattedReserveData>>;
    /**
     * Get user borrows of lendingpool
     * @summary Get user borrows of lendingpool
     * @param {string} [user] Ethereum address of the user
     * @param {string} [reserve] Ethereum address of the reserve
     * @param {number} [cursor] Cursor for pagination
     * @param {number} [limit] Limit the number of deposits returned (default is 50)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserBorrows(user?: string, reserve?: string, cursor?: number, limit?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserBorrowsResponse>>;
    /**
     * Get user deposits of Lendingpool
     * @summary Get user deposits of Lendingpool
     * @param {string} [user] Ethereum address of the user
     * @param {string} [reserve] Ethereum address of the reserve
     * @param {number} [cursor] Cursor for pagination
     * @param {number} [limit] Limit the number of deposits returned (default is 50)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserDeposits(user?: string, reserve?: string, cursor?: number, limit?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserDepositsResponse>>;
    /**
     * Allows to enable/disable a specific asset as collateral
     * @summary Enable/Disable asset as collateral
     * @param {LendingpoolUseAssetAsCollateralTxRequest} lendingpoolUseAssetAsCollateralTxRequest UseAssetAsCollateral transaction request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    setLendingPoolAssetCollateral(lendingpoolUseAssetAsCollateralTxRequest: LendingpoolUseAssetAsCollateralTxRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LendingpoolUseAssetAsCollateralTxResponse>>;
};
/**
 * LendingPoolApi - factory interface
 * @export
 */
export declare const LendingPoolApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Borrow from lending pool
     * @summary Borrow from lending pool
     * @param {LendingpoolBorrowTxRequest} lendingpoolBorrowTxRequest Borrow transaction request, if amount is not provided, it will be calculated based on the token balance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createLendingPoolBorrow(lendingpoolBorrowTxRequest: LendingpoolBorrowTxRequest, options?: RawAxiosRequestConfig): AxiosPromise<LendingpoolBorrowTxResponse>;
    /**
     * Deposit to lending pool
     * @summary Deposit to lending pool
     * @param {LendingpoolDepositTxRequest} lendingpoolDepositTxRequest Deposit transaction request, if amount is not provided, it will be calculated based on the token balance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createLendingPoolDeposit(lendingpoolDepositTxRequest: LendingpoolDepositTxRequest, options?: RawAxiosRequestConfig): AxiosPromise<LendingpoolDepositTxResponse>;
    /**
     * Repay to lending pool
     * @summary Repay to lending pool
     * @param {LendingpoolRepayTxRequest} lendingpoolRepayTxRequest Repay transaction request, if amount is not provided, it will repay the maximum possible amount
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createLendingPoolRepay(lendingpoolRepayTxRequest: LendingpoolRepayTxRequest, options?: RawAxiosRequestConfig): AxiosPromise<LendingpoolRepayTxResponse>;
    /**
     * Withdraw from lending pool
     * @summary Withdraw from lending pool
     * @param {LendingpoolWithdrawTxRequest} lendingpoolWithdrawTxRequest Withdraw transaction request, if amount is not provided, it will be calculated based on the user account status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createLendingPoolWithdraw(lendingpoolWithdrawTxRequest: LendingpoolWithdrawTxRequest, options?: RawAxiosRequestConfig): AxiosPromise<LendingpoolWithdrawTxResponse>;
    /**
     * Retrieve data of reserves
     * @summary Fetch Reserve Data By Asset
     * @param {string} [asset] The asset address in hexadecimal format.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchReserveDataByAsset(asset?: string, options?: RawAxiosRequestConfig): AxiosPromise<FormattedReserveData>;
    /**
     * Get user borrows of lendingpool
     * @summary Get user borrows of lendingpool
     * @param {string} [user] Ethereum address of the user
     * @param {string} [reserve] Ethereum address of the reserve
     * @param {number} [cursor] Cursor for pagination
     * @param {number} [limit] Limit the number of deposits returned (default is 50)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserBorrows(user?: string, reserve?: string, cursor?: number, limit?: number, options?: RawAxiosRequestConfig): AxiosPromise<UserBorrowsResponse>;
    /**
     * Get user deposits of Lendingpool
     * @summary Get user deposits of Lendingpool
     * @param {string} [user] Ethereum address of the user
     * @param {string} [reserve] Ethereum address of the reserve
     * @param {number} [cursor] Cursor for pagination
     * @param {number} [limit] Limit the number of deposits returned (default is 50)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserDeposits(user?: string, reserve?: string, cursor?: number, limit?: number, options?: RawAxiosRequestConfig): AxiosPromise<UserDepositsResponse>;
    /**
     * Allows to enable/disable a specific asset as collateral
     * @summary Enable/Disable asset as collateral
     * @param {LendingpoolUseAssetAsCollateralTxRequest} lendingpoolUseAssetAsCollateralTxRequest UseAssetAsCollateral transaction request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    setLendingPoolAssetCollateral(lendingpoolUseAssetAsCollateralTxRequest: LendingpoolUseAssetAsCollateralTxRequest, options?: RawAxiosRequestConfig): AxiosPromise<LendingpoolUseAssetAsCollateralTxResponse>;
};
/**
 * LendingPoolApi - interface
 * @export
 * @interface LendingPoolApi
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
    createLendingPoolBorrow(lendingpoolBorrowTxRequest: LendingpoolBorrowTxRequest, options?: RawAxiosRequestConfig): AxiosPromise<LendingpoolBorrowTxResponse>;
    /**
     * Deposit to lending pool
     * @summary Deposit to lending pool
     * @param {LendingpoolDepositTxRequest} lendingpoolDepositTxRequest Deposit transaction request, if amount is not provided, it will be calculated based on the token balance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LendingPoolApiInterface
     */
    createLendingPoolDeposit(lendingpoolDepositTxRequest: LendingpoolDepositTxRequest, options?: RawAxiosRequestConfig): AxiosPromise<LendingpoolDepositTxResponse>;
    /**
     * Repay to lending pool
     * @summary Repay to lending pool
     * @param {LendingpoolRepayTxRequest} lendingpoolRepayTxRequest Repay transaction request, if amount is not provided, it will repay the maximum possible amount
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LendingPoolApiInterface
     */
    createLendingPoolRepay(lendingpoolRepayTxRequest: LendingpoolRepayTxRequest, options?: RawAxiosRequestConfig): AxiosPromise<LendingpoolRepayTxResponse>;
    /**
     * Withdraw from lending pool
     * @summary Withdraw from lending pool
     * @param {LendingpoolWithdrawTxRequest} lendingpoolWithdrawTxRequest Withdraw transaction request, if amount is not provided, it will be calculated based on the user account status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LendingPoolApiInterface
     */
    createLendingPoolWithdraw(lendingpoolWithdrawTxRequest: LendingpoolWithdrawTxRequest, options?: RawAxiosRequestConfig): AxiosPromise<LendingpoolWithdrawTxResponse>;
    /**
     * Retrieve data of reserves
     * @summary Fetch Reserve Data By Asset
     * @param {string} [asset] The asset address in hexadecimal format.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LendingPoolApiInterface
     */
    fetchReserveDataByAsset(asset?: string, options?: RawAxiosRequestConfig): AxiosPromise<FormattedReserveData>;
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
    getUserBorrows(user?: string, reserve?: string, cursor?: number, limit?: number, options?: RawAxiosRequestConfig): AxiosPromise<UserBorrowsResponse>;
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
    getUserDeposits(user?: string, reserve?: string, cursor?: number, limit?: number, options?: RawAxiosRequestConfig): AxiosPromise<UserDepositsResponse>;
    /**
     * Allows to enable/disable a specific asset as collateral
     * @summary Enable/Disable asset as collateral
     * @param {LendingpoolUseAssetAsCollateralTxRequest} lendingpoolUseAssetAsCollateralTxRequest UseAssetAsCollateral transaction request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LendingPoolApiInterface
     */
    setLendingPoolAssetCollateral(lendingpoolUseAssetAsCollateralTxRequest: LendingpoolUseAssetAsCollateralTxRequest, options?: RawAxiosRequestConfig): AxiosPromise<LendingpoolUseAssetAsCollateralTxResponse>;
}
/**
 * LendingPoolApi - object-oriented interface
 * @export
 * @class LendingPoolApi
 * @extends {BaseAPI}
 */
export declare class LendingPoolApi extends BaseAPI implements LendingPoolApiInterface {
    /**
     * Borrow from lending pool
     * @summary Borrow from lending pool
     * @param {LendingpoolBorrowTxRequest} lendingpoolBorrowTxRequest Borrow transaction request, if amount is not provided, it will be calculated based on the token balance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LendingPoolApi
     */
    createLendingPoolBorrow(lendingpoolBorrowTxRequest: LendingpoolBorrowTxRequest, options?: RawAxiosRequestConfig): Promise<globalAxios.AxiosResponse<LendingpoolBorrowTxResponse, any>>;
    /**
     * Deposit to lending pool
     * @summary Deposit to lending pool
     * @param {LendingpoolDepositTxRequest} lendingpoolDepositTxRequest Deposit transaction request, if amount is not provided, it will be calculated based on the token balance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LendingPoolApi
     */
    createLendingPoolDeposit(lendingpoolDepositTxRequest: LendingpoolDepositTxRequest, options?: RawAxiosRequestConfig): Promise<globalAxios.AxiosResponse<LendingpoolDepositTxResponse, any>>;
    /**
     * Repay to lending pool
     * @summary Repay to lending pool
     * @param {LendingpoolRepayTxRequest} lendingpoolRepayTxRequest Repay transaction request, if amount is not provided, it will repay the maximum possible amount
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LendingPoolApi
     */
    createLendingPoolRepay(lendingpoolRepayTxRequest: LendingpoolRepayTxRequest, options?: RawAxiosRequestConfig): Promise<globalAxios.AxiosResponse<LendingpoolRepayTxResponse, any>>;
    /**
     * Withdraw from lending pool
     * @summary Withdraw from lending pool
     * @param {LendingpoolWithdrawTxRequest} lendingpoolWithdrawTxRequest Withdraw transaction request, if amount is not provided, it will be calculated based on the user account status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LendingPoolApi
     */
    createLendingPoolWithdraw(lendingpoolWithdrawTxRequest: LendingpoolWithdrawTxRequest, options?: RawAxiosRequestConfig): Promise<globalAxios.AxiosResponse<LendingpoolWithdrawTxResponse, any>>;
    /**
     * Retrieve data of reserves
     * @summary Fetch Reserve Data By Asset
     * @param {string} [asset] The asset address in hexadecimal format.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LendingPoolApi
     */
    fetchReserveDataByAsset(asset?: string, options?: RawAxiosRequestConfig): Promise<globalAxios.AxiosResponse<FormattedReserveData, any>>;
    /**
     * Get user borrows of lendingpool
     * @summary Get user borrows of lendingpool
     * @param {string} [user] Ethereum address of the user
     * @param {string} [reserve] Ethereum address of the reserve
     * @param {number} [cursor] Cursor for pagination
     * @param {number} [limit] Limit the number of deposits returned (default is 50)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LendingPoolApi
     */
    getUserBorrows(user?: string, reserve?: string, cursor?: number, limit?: number, options?: RawAxiosRequestConfig): Promise<globalAxios.AxiosResponse<UserBorrowsResponse, any>>;
    /**
     * Get user deposits of Lendingpool
     * @summary Get user deposits of Lendingpool
     * @param {string} [user] Ethereum address of the user
     * @param {string} [reserve] Ethereum address of the reserve
     * @param {number} [cursor] Cursor for pagination
     * @param {number} [limit] Limit the number of deposits returned (default is 50)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LendingPoolApi
     */
    getUserDeposits(user?: string, reserve?: string, cursor?: number, limit?: number, options?: RawAxiosRequestConfig): Promise<globalAxios.AxiosResponse<UserDepositsResponse, any>>;
    /**
     * Allows to enable/disable a specific asset as collateral
     * @summary Enable/Disable asset as collateral
     * @param {LendingpoolUseAssetAsCollateralTxRequest} lendingpoolUseAssetAsCollateralTxRequest UseAssetAsCollateral transaction request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LendingPoolApi
     */
    setLendingPoolAssetCollateral(lendingpoolUseAssetAsCollateralTxRequest: LendingpoolUseAssetAsCollateralTxRequest, options?: RawAxiosRequestConfig): Promise<globalAxios.AxiosResponse<LendingpoolUseAssetAsCollateralTxResponse, any>>;
}
//# sourceMappingURL=lending-pool-api.d.ts.map