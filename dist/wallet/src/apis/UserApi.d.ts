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
import * as runtime from '../runtime';
import type { CreateChildUserRequest, EmailOtpSubmitRequest, KycConfirmRequest, KycRequest, KycResponse, PhoneOtpSubmitRequest, ProfileResponse, SimpleResponse, UpdateEmailRequest, UpdatePhoneRequest, User } from '../models/index';
export interface ConfirmKycRequest {
    kycConfirmRequest: KycConfirmRequest;
}
export interface ConfirmPhoneNumberRequest {
    phoneOtpSubmitRequest: PhoneOtpSubmitRequest;
}
export interface CreateChildUserOperationRequest {
    createChildUserRequest: CreateChildUserRequest;
}
export interface SubmitEmailConfirmationOtpRequest {
    emailOtpSubmitRequest: EmailOtpSubmitRequest;
}
export interface SubmitKycRequest {
    kycRequest: KycRequest;
}
export interface VerifyPhoneNumberRequest {
    updatePhoneRequest: UpdatePhoneRequest;
}
export interface VerifyUserEmailAddressRequest {
    updateEmailRequest: UpdateEmailRequest;
}
/**
 * UserApi - interface
 *
 * @export
 * @interface UserApiInterface
 */
export interface UserApiInterface {
    /**
     * Confirm KYC for the user.
     * @summary Confirm KYC
     * @param {KycConfirmRequest} kycConfirmRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    confirmKycRaw(requestParameters: ConfirmKycRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SimpleResponse>>;
    /**
     * Confirm KYC for the user.
     * Confirm KYC
     */
    confirmKyc(requestParameters: ConfirmKycRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SimpleResponse>;
    /**
     * Confirm the phone number of the user.
     * @summary Confirm phone number
     * @param {PhoneOtpSubmitRequest} phoneOtpSubmitRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    confirmPhoneNumberRaw(requestParameters: ConfirmPhoneNumberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Confirm the phone number of the user.
     * Confirm phone number
     */
    confirmPhoneNumber(requestParameters: ConfirmPhoneNumberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * create a child user
     * @summary create a child user
     * @param {CreateChildUserRequest} createChildUserRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    createChildUserRaw(requestParameters: CreateChildUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>>;
    /**
     * create a child user
     * create a child user
     */
    createChildUser(requestParameters: CreateChildUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User>;
    /**
     * Get the profile of the user.
     * @summary Get profile
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    getUserProfileRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProfileResponse>>;
    /**
     * Get the profile of the user.
     * Get profile
     */
    getUserProfile(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProfileResponse>;
    /**
     * Submit email confirmation OTP for the user.
     * @summary Submit email confirmation OTP
     * @param {EmailOtpSubmitRequest} emailOtpSubmitRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    submitEmailConfirmationOtpRaw(requestParameters: SubmitEmailConfirmationOtpRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SimpleResponse>>;
    /**
     * Submit email confirmation OTP for the user.
     * Submit email confirmation OTP
     */
    submitEmailConfirmationOtp(requestParameters: SubmitEmailConfirmationOtpRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SimpleResponse>;
    /**
     * Submit KYC for the user.
     * @summary Submit KYC
     * @param {KycRequest} kycRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    submitKycRaw(requestParameters: SubmitKycRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<KycResponse>>;
    /**
     * Submit KYC for the user.
     * Submit KYC
     */
    submitKyc(requestParameters: SubmitKycRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<KycResponse>;
    /**
     * Verify the phone number of the user.
     * @summary Verify phone number
     * @param {UpdatePhoneRequest} updatePhoneRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    verifyPhoneNumberRaw(requestParameters: VerifyPhoneNumberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Verify the phone number of the user.
     * Verify phone number
     */
    verifyPhoneNumber(requestParameters: VerifyPhoneNumberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Verify the email of the user.
     * @summary Verify email
     * @param {UpdateEmailRequest} updateEmailRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    verifyUserEmailAddressRaw(requestParameters: VerifyUserEmailAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SimpleResponse>>;
    /**
     * Verify the email of the user.
     * Verify email
     */
    verifyUserEmailAddress(requestParameters: VerifyUserEmailAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SimpleResponse>;
}
/**
 *
 */
export declare class UserApi extends runtime.BaseAPI implements UserApiInterface {
    /**
     * Confirm KYC for the user.
     * Confirm KYC
     */
    confirmKycRaw(requestParameters: ConfirmKycRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SimpleResponse>>;
    /**
     * Confirm KYC for the user.
     * Confirm KYC
     */
    confirmKyc(requestParameters: ConfirmKycRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SimpleResponse>;
    /**
     * Confirm the phone number of the user.
     * Confirm phone number
     */
    confirmPhoneNumberRaw(requestParameters: ConfirmPhoneNumberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Confirm the phone number of the user.
     * Confirm phone number
     */
    confirmPhoneNumber(requestParameters: ConfirmPhoneNumberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * create a child user
     * create a child user
     */
    createChildUserRaw(requestParameters: CreateChildUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>>;
    /**
     * create a child user
     * create a child user
     */
    createChildUser(requestParameters: CreateChildUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User>;
    /**
     * Get the profile of the user.
     * Get profile
     */
    getUserProfileRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProfileResponse>>;
    /**
     * Get the profile of the user.
     * Get profile
     */
    getUserProfile(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProfileResponse>;
    /**
     * Submit email confirmation OTP for the user.
     * Submit email confirmation OTP
     */
    submitEmailConfirmationOtpRaw(requestParameters: SubmitEmailConfirmationOtpRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SimpleResponse>>;
    /**
     * Submit email confirmation OTP for the user.
     * Submit email confirmation OTP
     */
    submitEmailConfirmationOtp(requestParameters: SubmitEmailConfirmationOtpRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SimpleResponse>;
    /**
     * Submit KYC for the user.
     * Submit KYC
     */
    submitKycRaw(requestParameters: SubmitKycRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<KycResponse>>;
    /**
     * Submit KYC for the user.
     * Submit KYC
     */
    submitKyc(requestParameters: SubmitKycRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<KycResponse>;
    /**
     * Verify the phone number of the user.
     * Verify phone number
     */
    verifyPhoneNumberRaw(requestParameters: VerifyPhoneNumberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Verify the phone number of the user.
     * Verify phone number
     */
    verifyPhoneNumber(requestParameters: VerifyPhoneNumberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Verify the email of the user.
     * Verify email
     */
    verifyUserEmailAddressRaw(requestParameters: VerifyUserEmailAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SimpleResponse>>;
    /**
     * Verify the email of the user.
     * Verify email
     */
    verifyUserEmailAddress(requestParameters: VerifyUserEmailAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SimpleResponse>;
}
//# sourceMappingURL=UserApi.d.ts.map