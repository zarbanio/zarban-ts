/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CoinConfig
 */
export interface CoinConfig {
    /**
     * 
     * @type {boolean}
     * @memberof CoinConfig
     */
    isTradeable: boolean;
    /**
     * Map of network to amount
     * @type {{ [key: string]: string | undefined; }}
     * @memberof CoinConfig
     */
    withdrawFees: { [key: string]: string | undefined; };
    /**
     * Map of network to amount
     * @type {{ [key: string]: string | undefined; }}
     * @memberof CoinConfig
     */
    minWithdrawal: { [key: string]: string | undefined; };
    /**
     * 
     * @type {boolean}
     * @memberof CoinConfig
     */
    needsMemo: boolean;
}

/**
 * Check if a given object implements the CoinConfig interface.
 */
export function instanceOfCoinConfig(value: object): value is CoinConfig {
    if (!('isTradeable' in value) || value['isTradeable'] === undefined) return false;
    if (!('withdrawFees' in value) || value['withdrawFees'] === undefined) return false;
    if (!('minWithdrawal' in value) || value['minWithdrawal'] === undefined) return false;
    if (!('needsMemo' in value) || value['needsMemo'] === undefined) return false;
    return true;
}

export function CoinConfigFromJSON(json: any): CoinConfig {
    return CoinConfigFromJSONTyped(json, false);
}

export function CoinConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoinConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'isTradeable': json['isTradeable'],
        'withdrawFees': json['withdrawFees'],
        'minWithdrawal': json['minWithdrawal'],
        'needsMemo': json['needsMemo'],
    };
}

export function CoinConfigToJSON(json: any): CoinConfig {
    return CoinConfigToJSONTyped(json, false);
}

export function CoinConfigToJSONTyped(value?: CoinConfig | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'isTradeable': value['isTradeable'],
        'withdrawFees': value['withdrawFees'],
        'minWithdrawal': value['minWithdrawal'],
        'needsMemo': value['needsMemo'],
    };
}

