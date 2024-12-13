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
 * The type of the event. who has triggered the event.
 * @export
 */
export declare const EventType: {
    readonly EXECUTIVE: "executive";
    readonly ORACLE: "oracle";
    readonly USER: "user";
};
export type EventType = typeof EventType[keyof typeof EventType];
export declare function instanceOfEventType(value: any): boolean;
export declare function EventTypeFromJSON(json: any): EventType;
export declare function EventTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventType;
export declare function EventTypeToJSON(value?: EventType | null): any;
export declare function EventTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): EventType;
//# sourceMappingURL=EventType.d.ts.map