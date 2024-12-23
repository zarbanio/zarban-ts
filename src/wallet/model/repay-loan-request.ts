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



/**
 * 
 * @export
 * @interface RepayLoanRequest
 */
export interface RepayLoanRequest {
    /**
     * Intent to repay a loan
     * @type {string}
     * @memberof RepayLoanRequest
     */
    'intent': RepayLoanRequestIntentEnum;
    /**
     * The id of a loan
     * @type {string}
     * @memberof RepayLoanRequest
     */
    'loanId': string;
}

export const RepayLoanRequestIntentEnum = {
    REPAY: 'Repay',
    PREVIEW: 'Preview'
} as const;

export type RepayLoanRequestIntentEnum = typeof RepayLoanRequestIntentEnum[keyof typeof RepayLoanRequestIntentEnum];


