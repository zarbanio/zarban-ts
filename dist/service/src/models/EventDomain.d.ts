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
 * The domain of the event.
 * @export
 */
export declare const EventDomain: {
    readonly STABLE_COIN_SYSTEM: "stableCoinSystem";
    readonly LENDINGPOOL: "lendingpool";
    readonly CHAINLINK: "chainlink";
    readonly UNISWAP_V3: "uniswapV3";
};
export type EventDomain = typeof EventDomain[keyof typeof EventDomain];
export declare function instanceOfEventDomain(value: any): boolean;
export declare function EventDomainFromJSON(json: any): EventDomain;
export declare function EventDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventDomain;
export declare function EventDomainToJSON(value?: EventDomain | null): any;
export declare function EventDomainToJSONTyped(value: any, ignoreDiscriminator: boolean): EventDomain;
//# sourceMappingURL=EventDomain.d.ts.map