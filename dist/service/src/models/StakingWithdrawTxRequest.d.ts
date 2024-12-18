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
 * @interface StakingWithdrawTxRequest
 */
export interface StakingWithdrawTxRequest {
    /**
     * Ethereum address of the user
     * @type {string}
     * @memberof StakingWithdrawTxRequest
     */
    user: string;
    /**
     * Ethereum address of the staking contract
     * @type {string}
     * @memberof StakingWithdrawTxRequest
     */
    contractAddress: string;
    /**
     * The amount of asset to withdraw in native token units
     * @type {string}
     * @memberof StakingWithdrawTxRequest
     */
    amount?: string;
}
/**
 * Check if a given object implements the StakingWithdrawTxRequest interface.
 */
export declare function instanceOfStakingWithdrawTxRequest(value: object): value is StakingWithdrawTxRequest;
export declare function StakingWithdrawTxRequestFromJSON(json: any): StakingWithdrawTxRequest;
export declare function StakingWithdrawTxRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): StakingWithdrawTxRequest;
export declare function StakingWithdrawTxRequestToJSON(json: any): StakingWithdrawTxRequest;
export declare function StakingWithdrawTxRequestToJSONTyped(value?: StakingWithdrawTxRequest | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=StakingWithdrawTxRequest.d.ts.map