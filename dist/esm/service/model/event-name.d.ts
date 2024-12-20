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
 * @enum {string}
 */
export declare const EventName: {
    readonly VAULTS_REPAY: "VaultsRepay";
    readonly VAULTS_WITHDRAW: "VaultsWithdraw";
    readonly VAULTS_DEPOSIT: "VaultsDeposit";
    readonly VAULTS_MINT: "VaultsMint";
    readonly VAULTS_KICK: "VaultsKick";
    readonly VAULTS_TAKE: "VaultsTake";
    readonly VAULTS_REDO: "VaultsRedo";
    readonly VAULTS_YANK: "VaultsYank";
    readonly LENDINGPOOL_WITHDRAW: "LendingpoolWithdraw";
    readonly LENDINGPOOL_REPAY: "LendingpoolRepay";
    readonly LENDINGPOOL_LIQUIDATION_CALL: "LendingpoolLiquidationCall";
    readonly LENDINGPOOL_BORROW: "LendingpoolBorrow";
    readonly FILE: "File";
    readonly PERMISSION: "Permission";
    readonly MEDIAN: "Median";
    readonly UNKNOWN: "Unknown";
};
export type EventName = typeof EventName[keyof typeof EventName];
//# sourceMappingURL=event-name.d.ts.map