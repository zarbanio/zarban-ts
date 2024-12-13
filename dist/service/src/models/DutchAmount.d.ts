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
import type { Token } from './Token';
/**
 *
 * @export
 * @interface DutchAmount
 */
export interface DutchAmount {
    /**
     *
     * @type {Token}
     * @memberof DutchAmount
     */
    token: Token;
    /**
     *
     * @type {{ [key: string]: string | undefined; }}
     * @memberof DutchAmount
     */
    startAmount: {
        [key: string]: string | undefined;
    };
    /**
     *
     * @type {{ [key: string]: string | undefined; }}
     * @memberof DutchAmount
     */
    endAmount: {
        [key: string]: string | undefined;
    };
    /**
     *
     * @type {string}
     * @memberof DutchAmount
     */
    recipient?: string;
}
/**
 * Check if a given object implements the DutchAmount interface.
 */
export declare function instanceOfDutchAmount(value: object): value is DutchAmount;
export declare function DutchAmountFromJSON(json: any): DutchAmount;
export declare function DutchAmountFromJSONTyped(json: any, ignoreDiscriminator: boolean): DutchAmount;
export declare function DutchAmountToJSON(json: any): DutchAmount;
export declare function DutchAmountToJSONTyped(value?: DutchAmount | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=DutchAmount.d.ts.map