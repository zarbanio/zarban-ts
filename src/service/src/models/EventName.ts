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
export const EventName = {
    VAULTS_REPAY: 'VaultsRepay',
    VAULTS_WITHDRAW: 'VaultsWithdraw',
    VAULTS_DEPOSIT: 'VaultsDeposit',
    VAULTS_MINT: 'VaultsMint',
    VAULTS_KICK: 'VaultsKick',
    VAULTS_TAKE: 'VaultsTake',
    VAULTS_REDO: 'VaultsRedo',
    VAULTS_YANK: 'VaultsYank',
    LENDINGPOOL_WITHDRAW: 'LendingpoolWithdraw',
    LENDINGPOOL_REPAY: 'LendingpoolRepay',
    LENDINGPOOL_LIQUIDATION_CALL: 'LendingpoolLiquidationCall',
    LENDINGPOOL_BORROW: 'LendingpoolBorrow',
    FILE: 'File',
    PERMISSION: 'Permission',
    MEDIAN: 'Median',
    UNKNOWN: 'Unknown'
} as const;
export type EventName = typeof EventName[keyof typeof EventName];


export function instanceOfEventName(value: any): boolean {
    for (const key in EventName) {
        if (Object.prototype.hasOwnProperty.call(EventName, key)) {
            if (EventName[key as keyof typeof EventName] === value) {
                return true;
            }
        }
    }
    return false;
}

export function EventNameFromJSON(json: any): EventName {
    return EventNameFromJSONTyped(json, false);
}

export function EventNameFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventName {
    return json as EventName;
}

export function EventNameToJSON(value?: EventName | null): any {
    return value as any;
}

export function EventNameToJSONTyped(value: any, ignoreDiscriminator: boolean): EventName {
    return value as EventName;
}

