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

import { RequestFile } from './models';
import { Coin } from './coin';
import { Currency } from './currency';
import { DetailedLoanToValueOptions } from './detailedLoanToValueOptions';

export class LoanPlan {
    /**
    * The name of the loan plan
    */
    'name': string;
    /**
    * The minimum collateralization ratio of the loan plan
    */
    'minCollateralizationRatio': string;
    'acceptableCoins': Array<Coin>;
    /**
    * The annual fee of the loan plan
    */
    'fee': string;
    'maxDebt': Currency;
    'minDebt': Currency;
    'loanToValueOptions': Array<DetailedLoanToValueOptions>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "minCollateralizationRatio",
            "baseName": "minCollateralizationRatio",
            "type": "string"
        },
        {
            "name": "acceptableCoins",
            "baseName": "acceptableCoins",
            "type": "Array<Coin>"
        },
        {
            "name": "fee",
            "baseName": "fee",
            "type": "string"
        },
        {
            "name": "maxDebt",
            "baseName": "maxDebt",
            "type": "Currency"
        },
        {
            "name": "minDebt",
            "baseName": "minDebt",
            "type": "Currency"
        },
        {
            "name": "loanToValueOptions",
            "baseName": "loanToValueOptions",
            "type": "Array<DetailedLoanToValueOptions>"
        }    ];

    static getAttributeTypeMap() {
        return LoanPlan.attributeTypeMap;
    }
}

