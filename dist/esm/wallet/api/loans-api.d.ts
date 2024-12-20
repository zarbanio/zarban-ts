/**
 * Zarban Wallet API
 * API for Zarban wallet services.
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
import { type RequestArgs, BaseAPI } from '../base';
import type { Currency } from '../model';
import type { LoanCreateRequest } from '../model';
import type { LoanPlanResponse } from '../model';
import type { LoanToValueOptions } from '../model';
import type { LoansResponse } from '../model';
import type { LoansResponseList } from '../model';
import type { RepayLoanRequest } from '../model';
/**
 * LoansApi - axios parameter creator
 * @export
 */
export declare const LoansApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Create a vault
     * @summary Create vault
     * @param {LoanCreateRequest} loanCreateRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createLoanVault: (loanCreateRequest: LoanCreateRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get an estimate of required collateral for a specific loan amount, and vice versa.
     * @summary Get collateral and loan amount estimation
     * @param {string} planName The name of the loan plan
     * @param {LoanToValueOptions} loanToValueOption The desired loan to value option
     * @param {string} amount Loan/Collateral amount
     * @param {EstimateLoanCollateralInputTypeEnum} inputType The type of the input amount
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    estimateLoanCollateral: (planName: string, loanToValueOption: LoanToValueOptions, amount: string, inputType: EstimateLoanCollateralInputTypeEnum, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get a list of the available plan loans.
     * @summary Get all plan loans
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllLoanPlans: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get the details of a loan.
     * @summary Get loan
     * @param {string} id Loan ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLoanDetails: (id: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get a list of the user\'s loans.
     * @summary Get user loans
     * @param {GetUserLoansStateEnum} [state] loan state
     * @param {string} [planName] loan plan name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserLoans: (state?: GetUserLoansStateEnum, planName?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Repay a loan totally
     * @summary Repay Loan
     * @param {RepayLoanRequest} repayLoanRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    repayLoan: (repayLoanRequest: RepayLoanRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * LoansApi - functional programming interface
 * @export
 */
export declare const LoansApiFp: (configuration?: Configuration) => {
    /**
     * Create a vault
     * @summary Create vault
     * @param {LoanCreateRequest} loanCreateRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createLoanVault(loanCreateRequest: LoanCreateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoansResponse>>;
    /**
     * Get an estimate of required collateral for a specific loan amount, and vice versa.
     * @summary Get collateral and loan amount estimation
     * @param {string} planName The name of the loan plan
     * @param {LoanToValueOptions} loanToValueOption The desired loan to value option
     * @param {string} amount Loan/Collateral amount
     * @param {EstimateLoanCollateralInputTypeEnum} inputType The type of the input amount
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    estimateLoanCollateral(planName: string, loanToValueOption: LoanToValueOptions, amount: string, inputType: EstimateLoanCollateralInputTypeEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Currency>>;
    /**
     * Get a list of the available plan loans.
     * @summary Get all plan loans
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllLoanPlans(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoanPlanResponse>>;
    /**
     * Get the details of a loan.
     * @summary Get loan
     * @param {string} id Loan ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLoanDetails(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoansResponse>>;
    /**
     * Get a list of the user\'s loans.
     * @summary Get user loans
     * @param {GetUserLoansStateEnum} [state] loan state
     * @param {string} [planName] loan plan name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserLoans(state?: GetUserLoansStateEnum, planName?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoansResponseList>>;
    /**
     * Repay a loan totally
     * @summary Repay Loan
     * @param {RepayLoanRequest} repayLoanRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    repayLoan(repayLoanRequest: RepayLoanRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoansResponse>>;
};
/**
 * LoansApi - factory interface
 * @export
 */
export declare const LoansApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Create a vault
     * @summary Create vault
     * @param {LoanCreateRequest} loanCreateRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createLoanVault(loanCreateRequest: LoanCreateRequest, options?: RawAxiosRequestConfig): AxiosPromise<LoansResponse>;
    /**
     * Get an estimate of required collateral for a specific loan amount, and vice versa.
     * @summary Get collateral and loan amount estimation
     * @param {string} planName The name of the loan plan
     * @param {LoanToValueOptions} loanToValueOption The desired loan to value option
     * @param {string} amount Loan/Collateral amount
     * @param {EstimateLoanCollateralInputTypeEnum} inputType The type of the input amount
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    estimateLoanCollateral(planName: string, loanToValueOption: LoanToValueOptions, amount: string, inputType: EstimateLoanCollateralInputTypeEnum, options?: RawAxiosRequestConfig): AxiosPromise<Currency>;
    /**
     * Get a list of the available plan loans.
     * @summary Get all plan loans
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllLoanPlans(options?: RawAxiosRequestConfig): AxiosPromise<LoanPlanResponse>;
    /**
     * Get the details of a loan.
     * @summary Get loan
     * @param {string} id Loan ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLoanDetails(id: string, options?: RawAxiosRequestConfig): AxiosPromise<LoansResponse>;
    /**
     * Get a list of the user\'s loans.
     * @summary Get user loans
     * @param {GetUserLoansStateEnum} [state] loan state
     * @param {string} [planName] loan plan name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserLoans(state?: GetUserLoansStateEnum, planName?: string, options?: RawAxiosRequestConfig): AxiosPromise<LoansResponseList>;
    /**
     * Repay a loan totally
     * @summary Repay Loan
     * @param {RepayLoanRequest} repayLoanRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    repayLoan(repayLoanRequest: RepayLoanRequest, options?: RawAxiosRequestConfig): AxiosPromise<LoansResponse>;
};
/**
 * LoansApi - interface
 * @export
 * @interface LoansApi
 */
export interface LoansApiInterface {
    /**
     * Create a vault
     * @summary Create vault
     * @param {LoanCreateRequest} loanCreateRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoansApiInterface
     */
    createLoanVault(loanCreateRequest: LoanCreateRequest, options?: RawAxiosRequestConfig): AxiosPromise<LoansResponse>;
    /**
     * Get an estimate of required collateral for a specific loan amount, and vice versa.
     * @summary Get collateral and loan amount estimation
     * @param {string} planName The name of the loan plan
     * @param {LoanToValueOptions} loanToValueOption The desired loan to value option
     * @param {string} amount Loan/Collateral amount
     * @param {EstimateLoanCollateralInputTypeEnum} inputType The type of the input amount
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoansApiInterface
     */
    estimateLoanCollateral(planName: string, loanToValueOption: LoanToValueOptions, amount: string, inputType: EstimateLoanCollateralInputTypeEnum, options?: RawAxiosRequestConfig): AxiosPromise<Currency>;
    /**
     * Get a list of the available plan loans.
     * @summary Get all plan loans
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoansApiInterface
     */
    getAllLoanPlans(options?: RawAxiosRequestConfig): AxiosPromise<LoanPlanResponse>;
    /**
     * Get the details of a loan.
     * @summary Get loan
     * @param {string} id Loan ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoansApiInterface
     */
    getLoanDetails(id: string, options?: RawAxiosRequestConfig): AxiosPromise<LoansResponse>;
    /**
     * Get a list of the user\'s loans.
     * @summary Get user loans
     * @param {GetUserLoansStateEnum} [state] loan state
     * @param {string} [planName] loan plan name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoansApiInterface
     */
    getUserLoans(state?: GetUserLoansStateEnum, planName?: string, options?: RawAxiosRequestConfig): AxiosPromise<LoansResponseList>;
    /**
     * Repay a loan totally
     * @summary Repay Loan
     * @param {RepayLoanRequest} repayLoanRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoansApiInterface
     */
    repayLoan(repayLoanRequest: RepayLoanRequest, options?: RawAxiosRequestConfig): AxiosPromise<LoansResponse>;
}
/**
 * LoansApi - object-oriented interface
 * @export
 * @class LoansApi
 * @extends {BaseAPI}
 */
export declare class LoansApi extends BaseAPI implements LoansApiInterface {
    /**
     * Create a vault
     * @summary Create vault
     * @param {LoanCreateRequest} loanCreateRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoansApi
     */
    createLoanVault(loanCreateRequest: LoanCreateRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<LoansResponse, any>>;
    /**
     * Get an estimate of required collateral for a specific loan amount, and vice versa.
     * @summary Get collateral and loan amount estimation
     * @param {string} planName The name of the loan plan
     * @param {LoanToValueOptions} loanToValueOption The desired loan to value option
     * @param {string} amount Loan/Collateral amount
     * @param {EstimateLoanCollateralInputTypeEnum} inputType The type of the input amount
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoansApi
     */
    estimateLoanCollateral(planName: string, loanToValueOption: LoanToValueOptions, amount: string, inputType: EstimateLoanCollateralInputTypeEnum, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Currency, any>>;
    /**
     * Get a list of the available plan loans.
     * @summary Get all plan loans
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoansApi
     */
    getAllLoanPlans(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<LoanPlanResponse, any>>;
    /**
     * Get the details of a loan.
     * @summary Get loan
     * @param {string} id Loan ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoansApi
     */
    getLoanDetails(id: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<LoansResponse, any>>;
    /**
     * Get a list of the user\'s loans.
     * @summary Get user loans
     * @param {GetUserLoansStateEnum} [state] loan state
     * @param {string} [planName] loan plan name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoansApi
     */
    getUserLoans(state?: GetUserLoansStateEnum, planName?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<LoansResponseList, any>>;
    /**
     * Repay a loan totally
     * @summary Repay Loan
     * @param {RepayLoanRequest} repayLoanRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoansApi
     */
    repayLoan(repayLoanRequest: RepayLoanRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<LoansResponse, any>>;
}
/**
 * @export
 */
export declare const EstimateLoanCollateralInputTypeEnum: {
    readonly LOAN: "loan";
    readonly COLLATERAL: "collateral";
};
export type EstimateLoanCollateralInputTypeEnum = typeof EstimateLoanCollateralInputTypeEnum[keyof typeof EstimateLoanCollateralInputTypeEnum];
/**
 * @export
 */
export declare const GetUserLoansStateEnum: {
    readonly PENDING: "pending";
    readonly ACTIVE: "active";
    readonly REPAYMENT_ONGOING: "repayment-ongoing";
    readonly SETTLED: "settled";
    readonly CREATION_FAILED: "creation-failed";
    readonly SETTLEMENT_FAILED: "settlement-failed";
};
export type GetUserLoansStateEnum = typeof GetUserLoansStateEnum[keyof typeof GetUserLoansStateEnum];
//# sourceMappingURL=loans-api.d.ts.map