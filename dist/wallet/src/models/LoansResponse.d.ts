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
import type { BulletContent } from './BulletContent';
import type { Currency } from './Currency';
import type { LoanPlan } from './LoanPlan';
/**
 *
 * @export
 * @interface LoansResponse
 */
export interface LoansResponse {
    /**
     * Identifier for the vault.
     * @type {string}
     * @memberof LoansResponse
     */
    id?: string;
    /**
     * Identifier for the user.
     * @type {number}
     * @memberof LoansResponse
     */
    userId: number;
    /**
     *
     * @type {Currency}
     * @memberof LoansResponse
     */
    liquidationPrice: Currency;
    /**
     *
     * @type {Currency}
     * @memberof LoansResponse
     */
    collateral: Currency;
    /**
     * The collateralization ratio of the vault.
     * @type {string}
     * @memberof LoansResponse
     */
    collateralizationRatio: string;
    /**
     * The loan to value of the vault.
     * @type {string}
     * @memberof LoansResponse
     */
    loanToValue: string;
    /**
     *
     * @type {Currency}
     * @memberof LoansResponse
     */
    debt: Currency;
    /**
     *
     * @type {Currency}
     * @memberof LoansResponse
     */
    principal: Currency;
    /**
     *
     * @type {Currency}
     * @memberof LoansResponse
     */
    scaledDebt: Currency;
    /**
     *
     * @type {LoanPlan}
     * @memberof LoansResponse
     */
    plan: LoanPlan;
    /**
     *
     * @type {{ [key: string]: string | undefined; }}
     * @memberof LoansResponse
     */
    state: {
        [key: string]: string | undefined;
    };
    /**
     *
     * @type {Currency}
     * @memberof LoansResponse
     */
    updatedCollateralTokenBalance?: Currency;
    /**
     *
     * @type {Currency}
     * @memberof LoansResponse
     */
    updatedDebtTokenBalance?: Currency;
    /**
     *
     * @type {BulletContent}
     * @memberof LoansResponse
     */
    termsAndConditions?: BulletContent;
}
/**
 * Check if a given object implements the LoansResponse interface.
 */
export declare function instanceOfLoansResponse(value: object): value is LoansResponse;
export declare function LoansResponseFromJSON(json: any): LoansResponse;
export declare function LoansResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoansResponse;
export declare function LoansResponseToJSON(json: any): LoansResponse;
export declare function LoansResponseToJSONTyped(value?: LoansResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=LoansResponse.d.ts.map