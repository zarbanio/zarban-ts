"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserLoansStateEnum = exports.EstimateLoanCollateralInputTypeEnum = exports.LoansApi = void 0;
const tslib_1 = require("tslib");
const runtime = tslib_1.__importStar(require("../runtime"));
const index_1 = require("../models/index");
/**
 *
 */
class LoansApi extends runtime.BaseAPI {
    /**
     * Create a vault
     * Create vault
     */
    async createLoanVaultRaw(requestParameters, initOverrides) {
        if (requestParameters['loanCreateRequest'] == null) {
            throw new runtime.RequiredError('loanCreateRequest', 'Required parameter "loanCreateRequest" was null or undefined when calling createLoanVault().');
        }
        const queryParameters = {};
        const headerParameters = {};
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
            body: (0, index_1.LoanCreateRequestToJSON)(requestParameters['loanCreateRequest']),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.LoansResponseFromJSON)(jsonValue));
    }
    /**
     * Create a vault
     * Create vault
     */
    async createLoanVault(requestParameters, initOverrides) {
        const response = await this.createLoanVaultRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Get an estimate of required collateral for a specific loan amount, and vice versa.
     * Get collateral and loan amount estimation
     */
    async estimateLoanCollateralRaw(requestParameters, initOverrides) {
        if (requestParameters['planName'] == null) {
            throw new runtime.RequiredError('planName', 'Required parameter "planName" was null or undefined when calling estimateLoanCollateral().');
        }
        if (requestParameters['loanToValueOption'] == null) {
            throw new runtime.RequiredError('loanToValueOption', 'Required parameter "loanToValueOption" was null or undefined when calling estimateLoanCollateral().');
        }
        if (requestParameters['amount'] == null) {
            throw new runtime.RequiredError('amount', 'Required parameter "amount" was null or undefined when calling estimateLoanCollateral().');
        }
        if (requestParameters['inputType'] == null) {
            throw new runtime.RequiredError('inputType', 'Required parameter "inputType" was null or undefined when calling estimateLoanCollateral().');
        }
        const queryParameters = {};
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
        const headerParameters = {};
        const response = await this.request({
            path: `/loans/estimate`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.CurrencyFromJSON)(jsonValue));
    }
    /**
     * Get an estimate of required collateral for a specific loan amount, and vice versa.
     * Get collateral and loan amount estimation
     */
    async estimateLoanCollateral(requestParameters, initOverrides) {
        const response = await this.estimateLoanCollateralRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Get a list of the available plan loans.
     * Get all plan loans
     */
    async getAllLoanPlansRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/loans/plans`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.LoanPlanResponseFromJSON)(jsonValue));
    }
    /**
     * Get a list of the available plan loans.
     * Get all plan loans
     */
    async getAllLoanPlans(initOverrides) {
        const response = await this.getAllLoanPlansRaw(initOverrides);
        return await response.value();
    }
    /**
     * Get the details of a loan.
     * Get loan
     */
    async getLoanDetailsRaw(requestParameters, initOverrides) {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling getLoanDetails().');
        }
        const queryParameters = {};
        const headerParameters = {};
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
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.LoansResponseFromJSON)(jsonValue));
    }
    /**
     * Get the details of a loan.
     * Get loan
     */
    async getLoanDetails(requestParameters, initOverrides) {
        const response = await this.getLoanDetailsRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Get a list of the user\'s loans.
     * Get user loans
     */
    async getUserLoansRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters['state'] != null) {
            queryParameters['state'] = requestParameters['state'];
        }
        if (requestParameters['planName'] != null) {
            queryParameters['planName'] = requestParameters['planName'];
        }
        const headerParameters = {};
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
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.LoansResponseListFromJSON)(jsonValue));
    }
    /**
     * Get a list of the user\'s loans.
     * Get user loans
     */
    async getUserLoans(requestParameters = {}, initOverrides) {
        const response = await this.getUserLoansRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Repay a loan totally
     * Repay Loan
     */
    async repayLoanRaw(requestParameters, initOverrides) {
        if (requestParameters['repayLoanRequest'] == null) {
            throw new runtime.RequiredError('repayLoanRequest', 'Required parameter "repayLoanRequest" was null or undefined when calling repayLoan().');
        }
        const queryParameters = {};
        const headerParameters = {};
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
            body: (0, index_1.RepayLoanRequestToJSON)(requestParameters['repayLoanRequest']),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.LoansResponseFromJSON)(jsonValue));
    }
    /**
     * Repay a loan totally
     * Repay Loan
     */
    async repayLoan(requestParameters, initOverrides) {
        const response = await this.repayLoanRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
exports.LoansApi = LoansApi;
/**
 * @export
 */
exports.EstimateLoanCollateralInputTypeEnum = {
    LOAN: 'loan',
    COLLATERAL: 'collateral'
};
/**
 * @export
 */
exports.GetUserLoansStateEnum = {
    PENDING: 'pending',
    ACTIVE: 'active',
    REPAYMENT_ONGOING: 'repayment-ongoing',
    SETTLED: 'settled',
    CREATION_FAILED: 'creation-failed',
    SETTLEMENT_FAILED: 'settlement-failed'
};
//# sourceMappingURL=LoansApi.js.map