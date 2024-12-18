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
import type { Ilk } from './Ilk';
/**
 *
 * @export
 * @interface Vault
 */
export interface Vault {
    /**
     * Identifier for the vault.
     * @type {number}
     * @memberof Vault
     */
    id: number;
    /**
     * Ethereum address of the vault owner.
     * @type {string}
     * @memberof Vault
     */
    owner: string;
    /**
     * Ethereum address of the vault urn.
     * @type {string}
     * @memberof Vault
     */
    urn: string;
    /**
     *
     * @type {{ [key: string]: string | undefined; }}
     * @memberof Vault
     */
    liquidationPrice: {
        [key: string]: string | undefined;
    };
    /**
     *
     * @type {{ [key: string]: string | undefined; }}
     * @memberof Vault
     */
    collateralLocked: {
        [key: string]: string | undefined;
    };
    /**
     * The collateralization ratio of the vault.
     * @type {string}
     * @memberof Vault
     */
    collateralizationRatio: string;
    /**
     * The loan to value of the vault.
     * @type {string}
     * @memberof Vault
     */
    loanToValue: string;
    /**
     *
     * @type {{ [key: string]: string | undefined; }}
     * @memberof Vault
     */
    debt: {
        [key: string]: string | undefined;
    };
    /**
     *
     * @type {{ [key: string]: string | undefined; }}
     * @memberof Vault
     */
    availableToWithdraw: {
        [key: string]: string | undefined;
    };
    /**
     *
     * @type {{ [key: string]: string | undefined; }}
     * @memberof Vault
     */
    availableToMint: {
        [key: string]: string | undefined;
    };
    /**
     *
     * @type {Ilk}
     * @memberof Vault
     */
    ilk: Ilk;
}
/**
 * Check if a given object implements the Vault interface.
 */
export declare function instanceOfVault(value: object): value is Vault;
export declare function VaultFromJSON(json: any): Vault;
export declare function VaultFromJSONTyped(json: any, ignoreDiscriminator: boolean): Vault;
export declare function VaultToJSON(json: any): Vault;
export declare function VaultToJSONTyped(value?: Vault | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=Vault.d.ts.map