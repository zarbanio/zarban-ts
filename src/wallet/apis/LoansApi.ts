/* tslint:disable */
/* eslint-disable */
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
import type {
  Currency,
  LoanCreateRequest,
  LoanPlanResponse,
  LoanToValueOptions,
  LoansResponse,
  LoansResponseList,
  RepayLoanRequest,
  UserError,
} from '../models/index';
import {
    CurrencyFromJSON,
    CurrencyToJSON,
    LoanCreateRequestFromJSON,
    LoanCreateRequestToJSON,
    LoanPlanResponseFromJSON,
    LoanPlanResponseToJSON,
    LoanToValueOptionsFromJSON,
    LoanToValueOptionsToJSON,
    LoansResponseFromJSON,
    LoansResponseToJSON,
    LoansResponseListFromJSON,
    LoansResponseListToJSON,
    RepayLoanRequestFromJSON,
    RepayLoanRequestToJSON,
    UserErrorFromJSON,
    UserErrorToJSON,
} from '../models/index';

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
 * 
 */
export class LoansApi extends runtime.BaseAPI {

    /**
     * Create a vault
     * Create vault
     */
    async createLoanVaultRaw(requestParameters: CreateLoanVaultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoansResponse>> {
        if (requestParameters['loanCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'loanCreateRequest',
                'Required parameter "loanCreateRequest" was null or undefined when calling createLoanVault().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/loans/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LoanCreateRequestToJSON(requestParameters['loanCreateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LoansResponseFromJSON(jsonValue));
    }

    /**
     * Create a vault
     * Create vault
     */
    async createLoanVault(requestParameters: CreateLoanVaultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoansResponse> {
        const response = await this.createLoanVaultRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get an estimate of required collateral for a specific loan amount, and vice versa.
     * Get collateral and loan amount estimation
     */
    async estimateLoanCollateralRaw(requestParameters: EstimateLoanCollateralRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Currency>> {
        if (requestParameters['planName'] == null) {
            throw new runtime.RequiredError(
                'planName',
                'Required parameter "planName" was null or undefined when calling estimateLoanCollateral().'
            );
        }

        if (requestParameters['loanToValueOption'] == null) {
            throw new runtime.RequiredError(
                'loanToValueOption',
                'Required parameter "loanToValueOption" was null or undefined when calling estimateLoanCollateral().'
            );
        }

        if (requestParameters['amount'] == null) {
            throw new runtime.RequiredError(
                'amount',
                'Required parameter "amount" was null or undefined when calling estimateLoanCollateral().'
            );
        }

        if (requestParameters['inputType'] == null) {
            throw new runtime.RequiredError(
                'inputType',
                'Required parameter "inputType" was null or undefined when calling estimateLoanCollateral().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['planName'] != null) {
            queryParameters['planName'] = requestParameters['planName'];
        }

        if (requestParameters['loanToValueOption'] != null) {
            queryParameters['loanToValueOption'] = requestParameters['loanToValueOption'];
        }

        if (requestParameters['amount'] != null) {
            queryParameters['amount'] = requestParameters['amount'];
        }

        if (requestParameters['inputType'] != null) {
            queryParameters['inputType'] = requestParameters['inputType'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/loans/estimate`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CurrencyFromJSON(jsonValue));
    }

    /**
     * Get an estimate of required collateral for a specific loan amount, and vice versa.
     * Get collateral and loan amount estimation
     */
    async estimateLoanCollateral(requestParameters: EstimateLoanCollateralRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Currency> {
        const response = await this.estimateLoanCollateralRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a list of the available plan loans.
     * Get all plan loans
     */
    async getAllLoanPlansRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoanPlanResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/loans/plans`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LoanPlanResponseFromJSON(jsonValue));
    }

    /**
     * Get a list of the available plan loans.
     * Get all plan loans
     */
    async getAllLoanPlans(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoanPlanResponse> {
        const response = await this.getAllLoanPlansRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get the details of a loan.
     * Get loan
     */
    async getLoanDetailsRaw(requestParameters: GetLoanDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoansResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getLoanDetails().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/loans/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LoansResponseFromJSON(jsonValue));
    }

    /**
     * Get the details of a loan.
     * Get loan
     */
    async getLoanDetails(requestParameters: GetLoanDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoansResponse> {
        const response = await this.getLoanDetailsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a list of the user\'s loans.
     * Get user loans
     */
    async getUserLoansRaw(requestParameters: GetUserLoansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoansResponseList>> {
        const queryParameters: any = {};

        if (requestParameters['state'] != null) {
            queryParameters['state'] = requestParameters['state'];
        }

        if (requestParameters['planName'] != null) {
            queryParameters['planName'] = requestParameters['planName'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/loans`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LoansResponseListFromJSON(jsonValue));
    }

    /**
     * Get a list of the user\'s loans.
     * Get user loans
     */
    async getUserLoans(requestParameters: GetUserLoansRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoansResponseList> {
        const response = await this.getUserLoansRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Repay a loan totally
     * Repay Loan
     */
    async repayLoanRaw(requestParameters: RepayLoanOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoansResponse>> {
        if (requestParameters['repayLoanRequest'] == null) {
            throw new runtime.RequiredError(
                'repayLoanRequest',
                'Required parameter "repayLoanRequest" was null or undefined when calling repayLoan().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/loans/repay`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RepayLoanRequestToJSON(requestParameters['repayLoanRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LoansResponseFromJSON(jsonValue));
    }

    /**
     * Repay a loan totally
     * Repay Loan
     */
    async repayLoan(requestParameters: RepayLoanOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoansResponse> {
        const response = await this.repayLoanRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const EstimateLoanCollateralInputTypeEnum = {
    Loan: 'loan',
    Collateral: 'collateral'
} as const;
export type EstimateLoanCollateralInputTypeEnum = typeof EstimateLoanCollateralInputTypeEnum[keyof typeof EstimateLoanCollateralInputTypeEnum];
/**
 * @export
 */
export const GetUserLoansStateEnum = {
    Pending: 'pending',
    Active: 'active',
    RepaymentOngoing: 'repayment-ongoing',
    Settled: 'settled',
    CreationFailed: 'creation-failed',
    SettlementFailed: 'settlement-failed'
} as const;
export type GetUserLoansStateEnum = typeof GetUserLoansStateEnum[keyof typeof GetUserLoansStateEnum];
