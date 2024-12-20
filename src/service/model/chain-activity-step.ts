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


// May contain unused imports in some cases
// @ts-ignore
import type { ChainActivityStepData } from './chain-activity-step-data';

/**
 * 
 * @export
 * @interface ChainActivityStep
 */
export interface ChainActivityStep {
    /**
     * 
     * @type {string}
     * @memberof ChainActivityStep
     */
    'type': ChainActivityStepTypeEnum;
    /**
     * 
     * @type {ChainActivityStepData}
     * @memberof ChainActivityStep
     */
    'data': ChainActivityStepData;
}

export const ChainActivityStepTypeEnum = {
    PREPARED_TX: 'PreparedTx',
    EIP712_SIGN_REQUEST: 'EIP712SignRequest',
    PERSONAL_SIGN_REQUEST: 'PersonalSignRequest'
} as const;

export type ChainActivityStepTypeEnum = typeof ChainActivityStepTypeEnum[keyof typeof ChainActivityStepTypeEnum];


