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
import type { BulletContent } from './BulletContent';
import {
    BulletContentFromJSON,
    BulletContentFromJSONTyped,
    BulletContentToJSON,
    BulletContentToJSONTyped,
} from './BulletContent';
import type { CoinConfig } from './CoinConfig';
import {
    CoinConfigFromJSON,
    CoinConfigFromJSONTyped,
    CoinConfigToJSON,
    CoinConfigToJSONTyped,
} from './CoinConfig';
import type { Symbol } from './Symbol';
import {
    SymbolFromJSON,
    SymbolFromJSONTyped,
    SymbolToJSON,
    SymbolToJSONTyped,
} from './Symbol';
import type { Network } from './Network';
import {
    NetworkFromJSON,
    NetworkFromJSONTyped,
    NetworkToJSON,
    NetworkToJSONTyped,
} from './Network';

/**
 * 
 * @export
 * @interface Coin
 */
export interface Coin {
    /**
     * 
     * @type {CoinConfig}
     * @memberof Coin
     */
    config: CoinConfig;
    /**
     * 
     * @type {Symbol}
     * @memberof Coin
     */
    symbol: Symbol;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof Coin
     */
    name: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof Coin
     */
    logoUri: string;
    /**
     * 
     * @type {Array<Network>}
     * @memberof Coin
     */
    depositableNetworks: Array<Network>;
    /**
     * 
     * @type {Array<Network>}
     * @memberof Coin
     */
    withdrawableNetworks: Array<Network>;
    /**
     * 
     * @type {BulletContent}
     * @memberof Coin
     */
    content: BulletContent;
}



/**
 * Check if a given object implements the Coin interface.
 */
export function instanceOfCoin(value: object): value is Coin {
    if (!('config' in value) || value['config'] === undefined) return false;
    if (!('symbol' in value) || value['symbol'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('logoUri' in value) || value['logoUri'] === undefined) return false;
    if (!('depositableNetworks' in value) || value['depositableNetworks'] === undefined) return false;
    if (!('withdrawableNetworks' in value) || value['withdrawableNetworks'] === undefined) return false;
    if (!('content' in value) || value['content'] === undefined) return false;
    return true;
}

export function CoinFromJSON(json: any): Coin {
    return CoinFromJSONTyped(json, false);
}

export function CoinFromJSONTyped(json: any, ignoreDiscriminator: boolean): Coin {
    if (json == null) {
        return json;
    }
    return {
        
        'config': CoinConfigFromJSON(json['config']),
        'symbol': SymbolFromJSON(json['symbol']),
        'name': json['name'],
        'logoUri': json['logoUri'],
        'depositableNetworks': ((json['depositableNetworks'] as Array<any>).map(NetworkFromJSON)),
        'withdrawableNetworks': ((json['withdrawableNetworks'] as Array<any>).map(NetworkFromJSON)),
        'content': BulletContentFromJSON(json['content']),
    };
}

export function CoinToJSON(json: any): Coin {
    return CoinToJSONTyped(json, false);
}

export function CoinToJSONTyped(value?: Coin | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'config': CoinConfigToJSON(value['config']),
        'symbol': SymbolToJSON(value['symbol']),
        'name': value['name'],
        'logoUri': value['logoUri'],
        'depositableNetworks': ((value['depositableNetworks'] as Array<any>).map(NetworkToJSON)),
        'withdrawableNetworks': ((value['withdrawableNetworks'] as Array<any>).map(NetworkToJSON)),
        'content': BulletContentToJSON(value['content']),
    };
}
