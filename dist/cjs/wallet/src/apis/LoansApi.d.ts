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
import * as runtime from '../runtime';
import type { Currency, LoanCreateRequest, LoanPlanResponse, LoanToValueOptions, LoansResponse, LoansResponseList, RepayLoanRequest } from '../models/index';
export interface CreateLoanVaultRequest {
    loanCreateRequest: LoanCreateRequest;
}
export interface EstimateLoanCollateralRequest {
    planName: string;
    loanToValueOption: LoanToValueOptions;
    amount: string;
    inputType: EstimateLoanCollateralInputTypeEnum;
}
export interface GetLoanDetailsRequest {
    id: string;
}
export interface GetUserLoansRequest {
    state?: GetUserLoansStateEnum;
    planName?: string;
}
export interface RepayLoanOperationRequest {
    repayLoanRequest: RepayLoanRequest;
}
/**
 * LoansApi - interface
 *
 * @export
 * @interface LoansApiInterface
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
    createLoanVaultRaw(requestParameters: CreateLoanVaultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoansResponse>>;
    /**
     * Create a vault
     * Create vault
     */
    createLoanVault(requestParameters: CreateLoanVaultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoansResponse>;
    /**
     * Get an estimate of required collateral for a specific loan amount, and vice versa.
     * @summary Get collateral and loan amount estimation
     * @param {string} planName The name of the loan plan
     * @param {LoanToValueOptions} loanToValueOption The desired loan to value option
     * @param {string} amount Loan/Collateral amount
     * @param {'loan' | 'collateral'} inputType The type of the input amount
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoansApiInterface
     */
    estimateLoanCollateralRaw(requestParameters: EstimateLoanCollateralRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Currency>>;
    /**
     * Get an estimate of required collateral for a specific loan amount, and vice versa.
     * Get collateral and loan amount estimation
     */
    estimateLoanCollateral(requestParameters: EstimateLoanCollateralRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Currency>;
    /**
     * Get a list of the available plan loans.
     * @summary Get all plan loans
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoansApiInterface
     */
    getAllLoanPlansRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoanPlanResponse>>;
    /**
     * Get a list of the available plan loans.
     * Get all plan loans
     */
    getAllLoanPlans(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoanPlanResponse>;
    /**
     * Get the details of a loan.
     * @summary Get loan
     * @param {string} id Loan ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoansApiInterface
     */
    getLoanDetailsRaw(requestParameters: GetLoanDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoansResponse>>;
    /**
     * Get the details of a loan.
     * Get loan
     */
    getLoanDetails(requestParameters: GetLoanDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoansResponse>;
    /**
     * Get a list of the user\'s loans.
     * @summary Get user loans
     * @param {'pending' | 'active' | 'repayment-ongoing' | 'settled' | 'creation-failed' | 'settlement-failed'} [state] loan state
     * @param {string} [planName] loan plan name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoansApiInterface
     */
    getUserLoansRaw(requestParameters: GetUserLoansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoansResponseList>>;
    /**
     * Get a list of the user\'s loans.
     * Get user loans
     */
    getUserLoans(requestParameters: GetUserLoansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoansResponseList>;
    /**
     * Repay a loan totally
     * @summary Repay Loan
     * @param {RepayLoanRequest} repayLoanRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoansApiInterface
     */
    repayLoanRaw(requestParameters: RepayLoanOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoansResponse>>;
    /**
     * Repay a loan totally
     * Repay Loan
     */
    repayLoan(requestParameters: RepayLoanOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoansResponse>;
}
/**
 *
 */
export declare class LoansApi extends runtime.BaseAPI implements LoansApiInterface {
    /**
     * Create a vault
     * Create vault
     */
    createLoanVaultRaw(requestParameters: CreateLoanVaultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoansResponse>>;
    /**
     * Create a vault
     * Create vault
     */
    createLoanVault(requestParameters: CreateLoanVaultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoansResponse>;
    /**
     * Get an estimate of required collateral for a specific loan amount, and vice versa.
     * Get collateral and loan amount estimation
     */
    estimateLoanCollateralRaw(requestParameters: EstimateLoanCollateralRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Currency>>;
    /**
     * Get an estimate of required collateral for a specific loan amount, and vice versa.
     * Get collateral and loan amount estimation
     */
    estimateLoanCollateral(requestParameters: EstimateLoanCollateralRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Currency>;
    /**
     * Get a list of the available plan loans.
     * Get all plan loans
     */
    getAllLoanPlansRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoanPlanResponse>>;
    /**
     * Get a list of the available plan loans.
     * Get all plan loans
     */
    getAllLoanPlans(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoanPlanResponse>;
    /**
     * Get the details of a loan.
     * Get loan
     */
    getLoanDetailsRaw(requestParameters: GetLoanDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoansResponse>>;
    /**
     * Get the details of a loan.
     * Get loan
     */
    getLoanDetails(requestParameters: GetLoanDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoansResponse>;
    /**
     * Get a list of the user\'s loans.
     * Get user loans
     */
    getUserLoansRaw(requestParameters: GetUserLoansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoansResponseList>>;
    /**
     * Get a list of the user\'s loans.
     * Get user loans
     */
    getUserLoans(requestParameters?: GetUserLoansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoansResponseList>;
    /**
     * Repay a loan totally
     * Repay Loan
     */
    repayLoanRaw(requestParameters: RepayLoanOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoansResponse>>;
    /**
     * Repay a loan totally
     * Repay Loan
     */
    repayLoan(requestParameters: RepayLoanOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoansResponse>;
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
//# sourceMappingURL=LoansApi.d.ts.map