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
import type { LoanPlan } from './LoanPlan';
/**
 *
 * @export
 * @interface LoanPlanResponse
 */
export interface LoanPlanResponse {
    /**
     *
     * @type {Array<LoanPlan>}
     * @memberof LoanPlanResponse
     */
    data: Array<LoanPlan>;
}
/**
 * Check if a given object implements the LoanPlanResponse interface.
 */
export declare function instanceOfLoanPlanResponse(value: object): value is LoanPlanResponse;
export declare function LoanPlanResponseFromJSON(json: any): LoanPlanResponse;
export declare function LoanPlanResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoanPlanResponse;
export declare function LoanPlanResponseToJSON(json: any): LoanPlanResponse;
export declare function LoanPlanResponseToJSONTyped(value?: LoanPlanResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=LoanPlanResponse.d.ts.map