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
 */
export declare const TradeType: {
    readonly EXACT_INPUT: "ExactInput";
    readonly EXACT_OUTPUT: "ExactOutput";
};
export type TradeType = typeof TradeType[keyof typeof TradeType];
export declare function instanceOfTradeType(value: any): boolean;
export declare function TradeTypeFromJSON(json: any): TradeType;
export declare function TradeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TradeType;
export declare function TradeTypeToJSON(value?: TradeType | null): any;
export declare function TradeTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): TradeType;
//# sourceMappingURL=TradeType.d.ts.map