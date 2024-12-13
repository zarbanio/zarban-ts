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
 * Symbol representation
 * @export
 */
export declare const Symbol: {
    readonly USD: "USD";
    readonly DAI: "DAI";
    readonly USDT: "USDT";
    readonly USDC: "USDC";
    readonly WBTC: "WBTC";
    readonly ETH: "ETH";
    readonly WETH: "WETH";
    readonly ZAR: "ZAR";
    readonly TMN: "TMN";
};
export type Symbol = typeof Symbol[keyof typeof Symbol];
export declare function instanceOfSymbol(value: any): boolean;
export declare function SymbolFromJSON(json: any): Symbol;
export declare function SymbolFromJSONTyped(json: any, ignoreDiscriminator: boolean): Symbol;
export declare function SymbolToJSON(value?: Symbol | null): any;
export declare function SymbolToJSONTyped(value: any, ignoreDiscriminator: boolean): Symbol;
//# sourceMappingURL=Symbol.d.ts.map