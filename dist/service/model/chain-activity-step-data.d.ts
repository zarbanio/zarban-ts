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
import type { EIP712SignRequest } from './eip712-sign-request';
import type { PersonalSignRequest } from './personal-sign-request';
import type { PreparedTx } from './prepared-tx';
/**
 * @type ChainActivityStepData
 * @export
 */
export type ChainActivityStepData = EIP712SignRequest | PersonalSignRequest | PreparedTx;
