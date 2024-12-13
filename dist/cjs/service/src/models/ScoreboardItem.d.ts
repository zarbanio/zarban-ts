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
 * @interface ScoreboardItem
 */
export interface ScoreboardItem {
    /**
     *
     * @type {string}
     * @memberof ScoreboardItem
     */
    address: string;
    /**
     *
     * @type {number}
     * @memberof ScoreboardItem
     */
    points: number;
}
/**
 * Check if a given object implements the ScoreboardItem interface.
 */
export declare function instanceOfScoreboardItem(value: object): value is ScoreboardItem;
export declare function ScoreboardItemFromJSON(json: any): ScoreboardItem;
export declare function ScoreboardItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScoreboardItem;
export declare function ScoreboardItemToJSON(json: any): ScoreboardItem;
export declare function ScoreboardItemToJSONTyped(value?: ScoreboardItem | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=ScoreboardItem.d.ts.map