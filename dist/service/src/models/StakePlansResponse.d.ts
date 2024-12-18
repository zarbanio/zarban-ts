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
import type { StakePlan } from './StakePlan';
/**
 *
 * @export
 * @interface StakePlansResponse
 */
export interface StakePlansResponse {
    /**
     *
     * @type {Array<StakePlan>}
     * @memberof StakePlansResponse
     */
    data: Array<StakePlan>;
}
/**
 * Check if a given object implements the StakePlansResponse interface.
 */
export declare function instanceOfStakePlansResponse(value: object): value is StakePlansResponse;
export declare function StakePlansResponseFromJSON(json: any): StakePlansResponse;
export declare function StakePlansResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StakePlansResponse;
export declare function StakePlansResponseToJSON(json: any): StakePlansResponse;
export declare function StakePlansResponseToJSONTyped(value?: StakePlansResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=StakePlansResponse.d.ts.map