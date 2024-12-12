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
import type { LoanToValueOptions } from './loan-to-value-options';
/**
 *
 * @export
 * @interface LoanCreateRequest
 */
export interface LoanCreateRequest {
    /**
     * Intent to create a vault
     * @type {string}
     * @memberof LoanCreateRequest
     */
    'intent': LoanCreateRequestIntentEnum;
    /**
     * The name of the loan plan
     * @type {string}
     * @memberof LoanCreateRequest
     */
    'planName': string;
    /**
     * Collateral amount
     * @type {string}
     * @memberof LoanCreateRequest
     */
    'collateral'?: string;
    /**
     * Debt amount
     * @type {string}
     * @memberof LoanCreateRequest
     */
    'debt'?: string;
    /**
     * Coin symbol
     * @type {string}
     * @memberof LoanCreateRequest
     */
    'symbol': string;
    /**
     *
     * @type {LoanToValueOptions}
     * @memberof LoanCreateRequest
     */
    'loanToValueOption': LoanToValueOptions;
}
export declare const LoanCreateRequestIntentEnum: {
    readonly CREATE: "create";
    readonly PREVIEW: "preview";
};
export type LoanCreateRequestIntentEnum = typeof LoanCreateRequestIntentEnum[keyof typeof LoanCreateRequestIntentEnum];
//# sourceMappingURL=loan-create-request.d.ts.map