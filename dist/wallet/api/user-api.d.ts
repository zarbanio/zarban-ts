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
import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import { type RequestArgs, BaseAPI } from '../base';
import type { CreateChildUserRequest } from '../model';
import type { EmailOtpSubmitRequest } from '../model';
import type { KycConfirmRequest } from '../model';
import type { KycRequest } from '../model';
import type { KycResponse } from '../model';
import type { PhoneOtpSubmitRequest } from '../model';
import type { ProfileResponse } from '../model';
import type { SimpleResponse } from '../model';
import type { UpdateEmailRequest } from '../model';
import type { UpdatePhoneRequest } from '../model';
import type { User } from '../model';
/**
 * UserApi - axios parameter creator
 * @export
 */
export declare const UserApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Confirm KYC for the user.
     * @summary Confirm KYC
     * @param {KycConfirmRequest} kycConfirmRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    confirmKyc: (kycConfirmRequest: KycConfirmRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Confirm the phone number of the user.
     * @summary Confirm phone number
     * @param {PhoneOtpSubmitRequest} phoneOtpSubmitRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    confirmPhoneNumber: (phoneOtpSubmitRequest: PhoneOtpSubmitRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * create a child user
     * @summary create a child user
     * @param {CreateChildUserRequest} createChildUserRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createChildUser: (createChildUserRequest: CreateChildUserRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get the profile of the user.
     * @summary Get profile
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserProfile: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Submit email confirmation OTP for the user.
     * @summary Submit email confirmation OTP
     * @param {EmailOtpSubmitRequest} emailOtpSubmitRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    submitEmailConfirmationOtp: (emailOtpSubmitRequest: EmailOtpSubmitRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Submit KYC for the user.
     * @summary Submit KYC
     * @param {KycRequest} kycRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    submitKyc: (kycRequest: KycRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Verify the phone number of the user.
     * @summary Verify phone number
     * @param {UpdatePhoneRequest} updatePhoneRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verifyPhoneNumber: (updatePhoneRequest: UpdatePhoneRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Verify the email of the user.
     * @summary Verify email
     * @param {UpdateEmailRequest} updateEmailRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verifyUserEmailAddress: (updateEmailRequest: UpdateEmailRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * UserApi - functional programming interface
 * @export
 */
export declare const UserApiFp: (configuration?: Configuration) => {
    /**
     * Confirm KYC for the user.
     * @summary Confirm KYC
     * @param {KycConfirmRequest} kycConfirmRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    confirmKyc(kycConfirmRequest: KycConfirmRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SimpleResponse>>;
    /**
     * Confirm the phone number of the user.
     * @summary Confirm phone number
     * @param {PhoneOtpSubmitRequest} phoneOtpSubmitRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    confirmPhoneNumber(phoneOtpSubmitRequest: PhoneOtpSubmitRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * create a child user
     * @summary create a child user
     * @param {CreateChildUserRequest} createChildUserRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createChildUser(createChildUserRequest: CreateChildUserRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>>;
    /**
     * Get the profile of the user.
     * @summary Get profile
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserProfile(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProfileResponse>>;
    /**
     * Submit email confirmation OTP for the user.
     * @summary Submit email confirmation OTP
     * @param {EmailOtpSubmitRequest} emailOtpSubmitRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    submitEmailConfirmationOtp(emailOtpSubmitRequest: EmailOtpSubmitRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SimpleResponse>>;
    /**
     * Submit KYC for the user.
     * @summary Submit KYC
     * @param {KycRequest} kycRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    submitKyc(kycRequest: KycRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<KycResponse>>;
    /**
     * Verify the phone number of the user.
     * @summary Verify phone number
     * @param {UpdatePhoneRequest} updatePhoneRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verifyPhoneNumber(updatePhoneRequest: UpdatePhoneRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * Verify the email of the user.
     * @summary Verify email
     * @param {UpdateEmailRequest} updateEmailRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verifyUserEmailAddress(updateEmailRequest: UpdateEmailRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SimpleResponse>>;
};
/**
 * UserApi - factory interface
 * @export
 */
export declare const UserApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Confirm KYC for the user.
     * @summary Confirm KYC
     * @param {KycConfirmRequest} kycConfirmRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    confirmKyc(kycConfirmRequest: KycConfirmRequest, options?: RawAxiosRequestConfig): AxiosPromise<SimpleResponse>;
    /**
     * Confirm the phone number of the user.
     * @summary Confirm phone number
     * @param {PhoneOtpSubmitRequest} phoneOtpSubmitRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    confirmPhoneNumber(phoneOtpSubmitRequest: PhoneOtpSubmitRequest, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    /**
     * create a child user
     * @summary create a child user
     * @param {CreateChildUserRequest} createChildUserRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createChildUser(createChildUserRequest: CreateChildUserRequest, options?: RawAxiosRequestConfig): AxiosPromise<User>;
    /**
     * Get the profile of the user.
     * @summary Get profile
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserProfile(options?: RawAxiosRequestConfig): AxiosPromise<ProfileResponse>;
    /**
     * Submit email confirmation OTP for the user.
     * @summary Submit email confirmation OTP
     * @param {EmailOtpSubmitRequest} emailOtpSubmitRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    submitEmailConfirmationOtp(emailOtpSubmitRequest: EmailOtpSubmitRequest, options?: RawAxiosRequestConfig): AxiosPromise<SimpleResponse>;
    /**
     * Submit KYC for the user.
     * @summary Submit KYC
     * @param {KycRequest} kycRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    submitKyc(kycRequest: KycRequest, options?: RawAxiosRequestConfig): AxiosPromise<KycResponse>;
    /**
     * Verify the phone number of the user.
     * @summary Verify phone number
     * @param {UpdatePhoneRequest} updatePhoneRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verifyPhoneNumber(updatePhoneRequest: UpdatePhoneRequest, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    /**
     * Verify the email of the user.
     * @summary Verify email
     * @param {UpdateEmailRequest} updateEmailRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verifyUserEmailAddress(updateEmailRequest: UpdateEmailRequest, options?: RawAxiosRequestConfig): AxiosPromise<SimpleResponse>;
};
/**
 * UserApi - interface
 * @export
 * @interface UserApi
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
    confirmKyc(kycConfirmRequest: KycConfirmRequest, options?: RawAxiosRequestConfig): AxiosPromise<SimpleResponse>;
    /**
     * Confirm the phone number of the user.
     * @summary Confirm phone number
     * @param {PhoneOtpSubmitRequest} phoneOtpSubmitRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    confirmPhoneNumber(phoneOtpSubmitRequest: PhoneOtpSubmitRequest, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    /**
     * create a child user
     * @summary create a child user
     * @param {CreateChildUserRequest} createChildUserRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    createChildUser(createChildUserRequest: CreateChildUserRequest, options?: RawAxiosRequestConfig): AxiosPromise<User>;
    /**
     * Get the profile of the user.
     * @summary Get profile
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    getUserProfile(options?: RawAxiosRequestConfig): AxiosPromise<ProfileResponse>;
    /**
     * Submit email confirmation OTP for the user.
     * @summary Submit email confirmation OTP
     * @param {EmailOtpSubmitRequest} emailOtpSubmitRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    submitEmailConfirmationOtp(emailOtpSubmitRequest: EmailOtpSubmitRequest, options?: RawAxiosRequestConfig): AxiosPromise<SimpleResponse>;
    /**
     * Submit KYC for the user.
     * @summary Submit KYC
     * @param {KycRequest} kycRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    submitKyc(kycRequest: KycRequest, options?: RawAxiosRequestConfig): AxiosPromise<KycResponse>;
    /**
     * Verify the phone number of the user.
     * @summary Verify phone number
     * @param {UpdatePhoneRequest} updatePhoneRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    verifyPhoneNumber(updatePhoneRequest: UpdatePhoneRequest, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    /**
     * Verify the email of the user.
     * @summary Verify email
     * @param {UpdateEmailRequest} updateEmailRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    verifyUserEmailAddress(updateEmailRequest: UpdateEmailRequest, options?: RawAxiosRequestConfig): AxiosPromise<SimpleResponse>;
}
/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export declare class UserApi extends BaseAPI implements UserApiInterface {
    /**
     * Confirm KYC for the user.
     * @summary Confirm KYC
     * @param {KycConfirmRequest} kycConfirmRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    confirmKyc(kycConfirmRequest: KycConfirmRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<SimpleResponse, any>>;
    /**
     * Confirm the phone number of the user.
     * @summary Confirm phone number
     * @param {PhoneOtpSubmitRequest} phoneOtpSubmitRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    confirmPhoneNumber(phoneOtpSubmitRequest: PhoneOtpSubmitRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     * create a child user
     * @summary create a child user
     * @param {CreateChildUserRequest} createChildUserRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    createChildUser(createChildUserRequest: CreateChildUserRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<User, any>>;
    /**
     * Get the profile of the user.
     * @summary Get profile
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    getUserProfile(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<ProfileResponse, any>>;
    /**
     * Submit email confirmation OTP for the user.
     * @summary Submit email confirmation OTP
     * @param {EmailOtpSubmitRequest} emailOtpSubmitRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    submitEmailConfirmationOtp(emailOtpSubmitRequest: EmailOtpSubmitRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<SimpleResponse, any>>;
    /**
     * Submit KYC for the user.
     * @summary Submit KYC
     * @param {KycRequest} kycRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    submitKyc(kycRequest: KycRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<KycResponse, any>>;
    /**
     * Verify the phone number of the user.
     * @summary Verify phone number
     * @param {UpdatePhoneRequest} updatePhoneRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    verifyPhoneNumber(updatePhoneRequest: UpdatePhoneRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     * Verify the email of the user.
     * @summary Verify email
     * @param {UpdateEmailRequest} updateEmailRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    verifyUserEmailAddress(updateEmailRequest: UpdateEmailRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<SimpleResponse, any>>;
}
