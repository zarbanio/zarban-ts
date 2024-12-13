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
import type { Coin } from './Coin';
/**
 *
 * @export
 * @interface CoinResponse
 */
export interface CoinResponse {
    /**
     *
     * @type {Array<Coin>}
     * @memberof CoinResponse
     */
    data: Array<Coin>;
}
/**
 * Check if a given object implements the CoinResponse interface.
 */
export declare function instanceOfCoinResponse(value: object): value is CoinResponse;
export declare function CoinResponseFromJSON(json: any): CoinResponse;
export declare function CoinResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoinResponse;
export declare function CoinResponseToJSON(json: any): CoinResponse;
export declare function CoinResponseToJSONTyped(value?: CoinResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=CoinResponse.d.ts.map