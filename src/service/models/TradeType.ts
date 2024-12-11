/* tslint:disable */
/* eslint-disable */
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
export const TradeType = {
    ExactInput: 'ExactInput',
    ExactOutput: 'ExactOutput'
} as const;
export type TradeType = typeof TradeType[keyof typeof TradeType];


export function instanceOfTradeType(value: any): boolean {
    for (const key in TradeType) {
        if (Object.prototype.hasOwnProperty.call(TradeType, key)) {
            if (TradeType[key as keyof typeof TradeType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function TradeTypeFromJSON(json: any): TradeType {
    return TradeTypeFromJSONTyped(json, false);
}

export function TradeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TradeType {
    return json as TradeType;
}

export function TradeTypeToJSON(value?: TradeType | null): any {
    return value as any;
}

export function TradeTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): TradeType {
    return value as TradeType;
}

