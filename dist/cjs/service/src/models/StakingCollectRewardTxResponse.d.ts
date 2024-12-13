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
import type { ChainActivity } from './ChainActivity';
/**
 *
 * @export
 * @interface StakingCollectRewardTxResponse
 */
export interface StakingCollectRewardTxResponse {
    /**
     *
     * @type {ChainActivity}
     * @memberof StakingCollectRewardTxResponse
     */
    chainActivity?: ChainActivity;
}
/**
 * Check if a given object implements the StakingCollectRewardTxResponse interface.
 */
export declare function instanceOfStakingCollectRewardTxResponse(value: object): value is StakingCollectRewardTxResponse;
export declare function StakingCollectRewardTxResponseFromJSON(json: any): StakingCollectRewardTxResponse;
export declare function StakingCollectRewardTxResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StakingCollectRewardTxResponse;
export declare function StakingCollectRewardTxResponseToJSON(json: any): StakingCollectRewardTxResponse;
export declare function StakingCollectRewardTxResponseToJSONTyped(value?: StakingCollectRewardTxResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=StakingCollectRewardTxResponse.d.ts.map