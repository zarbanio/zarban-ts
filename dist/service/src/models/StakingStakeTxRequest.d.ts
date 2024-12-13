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
/**
 *
 * @export
 * @interface StakingStakeTxRequest
 */
export interface StakingStakeTxRequest {
    /**
     * Ethereum address of the user
     * @type {string}
     * @memberof StakingStakeTxRequest
     */
    user: string;
    /**
     * Ethereum address of the staking contract
     * @type {string}
     * @memberof StakingStakeTxRequest
     */
    contractAddress: string;
    /**
     * The amount of asset to stake in native token units
     * @type {string}
     * @memberof StakingStakeTxRequest
     */
    amount?: string;
}
/**
 * Check if a given object implements the StakingStakeTxRequest interface.
 */
export declare function instanceOfStakingStakeTxRequest(value: object): value is StakingStakeTxRequest;
export declare function StakingStakeTxRequestFromJSON(json: any): StakingStakeTxRequest;
export declare function StakingStakeTxRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): StakingStakeTxRequest;
export declare function StakingStakeTxRequestToJSON(json: any): StakingStakeTxRequest;
export declare function StakingStakeTxRequestToJSONTyped(value?: StakingStakeTxRequest | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=StakingStakeTxRequest.d.ts.map