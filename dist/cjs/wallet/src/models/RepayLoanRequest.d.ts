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
    intent: RepayLoanRequestIntentEnum;
    /**
     * The id of a loan
     * @type {string}
     * @memberof RepayLoanRequest
     */
    loanId: string;
}
/**
 * @export
 */
export declare const RepayLoanRequestIntentEnum: {
    readonly REPAY: "Repay";
    readonly PREVIEW: "Preview";
};
export type RepayLoanRequestIntentEnum = typeof RepayLoanRequestIntentEnum[keyof typeof RepayLoanRequestIntentEnum];
/**
 * Check if a given object implements the RepayLoanRequest interface.
 */
export declare function instanceOfRepayLoanRequest(value: object): value is RepayLoanRequest;
export declare function RepayLoanRequestFromJSON(json: any): RepayLoanRequest;
export declare function RepayLoanRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RepayLoanRequest;
export declare function RepayLoanRequestToJSON(json: any): RepayLoanRequest;
export declare function RepayLoanRequestToJSONTyped(value?: RepayLoanRequest | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=RepayLoanRequest.d.ts.map