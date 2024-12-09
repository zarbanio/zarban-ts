import localVarRequest from 'request';

export * from './adminRedemptionUpdateRequest';
export * from './authTelegramRequest';
export * from './balance';
export * from './bankInfo';
export * from './bulletContent';
export * from './coin';
export * from './coinConfig';
export * from './coinResponse';
export * from './createChildUserRequest';
export * from './currency';
export * from './depositResponse';
export * from './detailedLoanToValueOptions';
export * from './emailOtpSubmitRequest';
export * from './errorDetail';
export * from './externalTransaction';
export * from './friendPoints';
export * from './friendPointsResponse';
export * from './healthStatus';
export * from './jwtResponse';
export * from './kycConfirmRequest';
export * from './kycRequest';
export * from './kycResponse';
export * from './loanCreateRequest';
export * from './loanPlan';
export * from './loanPlanResponse';
export * from './loanToValueOptions';
export * from './loansResponse';
export * from './loansResponseList';
export * from './loginRequest';
export * from './modelError';
export * from './network';
export * from './payment';
export * from './paymentRequest';
export * from './phoneOtpSubmitRequest';
export * from './profileResponse';
export * from './redemption';
export * from './redemptionRequest';
export * from './redemptionResponse';
export * from './referral';
export * from './referralResponse';
export * from './repayLoanRequest';
export * from './signUpRequest';
export * from './simpleResponse';
export * from './swapRequest';
export * from './swapResponse';
export * from './symbol';
export * from './task';
export * from './taskResponse';
export * from './telegramProfile';
export * from './timestamp';
export * from './transaction';
export * from './transactionResponse';
export * from './transactionStatus';
export * from './transactionType';
export * from './updateEmailRequest';
export * from './updatePhoneRequest';
export * from './user';
export * from './userError';
export * from './walletBalance';
export * from './withdrawRequest';
export * from './withdrawRequestBody';
export * from './withdrawRequestPreview';
export * from './withdrawRequestResponse';
export * from './withdrawResponseBody';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AdminRedemptionUpdateRequest } from './adminRedemptionUpdateRequest';
import { AuthTelegramRequest } from './authTelegramRequest';
import { Balance } from './balance';
import { BankInfo } from './bankInfo';
import { BulletContent } from './bulletContent';
import { Coin } from './coin';
import { CoinConfig } from './coinConfig';
import { CoinResponse } from './coinResponse';
import { CreateChildUserRequest } from './createChildUserRequest';
import { Currency } from './currency';
import { DepositResponse } from './depositResponse';
import { DetailedLoanToValueOptions } from './detailedLoanToValueOptions';
import { EmailOtpSubmitRequest } from './emailOtpSubmitRequest';
import { ErrorDetail } from './errorDetail';
import { ExternalTransaction } from './externalTransaction';
import { FriendPoints } from './friendPoints';
import { FriendPointsResponse } from './friendPointsResponse';
import { HealthStatus } from './healthStatus';
import { JwtResponse } from './jwtResponse';
import { KycConfirmRequest } from './kycConfirmRequest';
import { KycRequest } from './kycRequest';
import { KycResponse } from './kycResponse';
import { LoanCreateRequest } from './loanCreateRequest';
import { LoanPlan } from './loanPlan';
import { LoanPlanResponse } from './loanPlanResponse';
import { LoanToValueOptions } from './loanToValueOptions';
import { LoansResponse } from './loansResponse';
import { LoansResponseList } from './loansResponseList';
import { LoginRequest } from './loginRequest';
import { ModelError } from './modelError';
import { Network } from './network';
import { Payment } from './payment';
import { PaymentRequest } from './paymentRequest';
import { PhoneOtpSubmitRequest } from './phoneOtpSubmitRequest';
import { ProfileResponse } from './profileResponse';
import { Redemption } from './redemption';
import { RedemptionRequest } from './redemptionRequest';
import { RedemptionResponse } from './redemptionResponse';
import { Referral } from './referral';
import { ReferralResponse } from './referralResponse';
import { RepayLoanRequest } from './repayLoanRequest';
import { SignUpRequest } from './signUpRequest';
import { SimpleResponse } from './simpleResponse';
import { SwapRequest } from './swapRequest';
import { SwapResponse } from './swapResponse';
import { Symbol } from './symbol';
import { Task } from './task';
import { TaskResponse } from './taskResponse';
import { TelegramProfile } from './telegramProfile';
import { Timestamp } from './timestamp';
import { Transaction } from './transaction';
import { TransactionResponse } from './transactionResponse';
import { TransactionStatus } from './transactionStatus';
import { TransactionType } from './transactionType';
import { UpdateEmailRequest } from './updateEmailRequest';
import { UpdatePhoneRequest } from './updatePhoneRequest';
import { User } from './user';
import { UserError } from './userError';
import { WalletBalance } from './walletBalance';
import { WithdrawRequest } from './withdrawRequest';
import { WithdrawRequestBody } from './withdrawRequestBody';
import { WithdrawRequestPreview } from './withdrawRequestPreview';
import { WithdrawRequestResponse } from './withdrawRequestResponse';
import { WithdrawResponseBody } from './withdrawResponseBody';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AdminRedemptionUpdateRequest.StatusEnum": AdminRedemptionUpdateRequest.StatusEnum,
        "LoanCreateRequest.IntentEnum": LoanCreateRequest.IntentEnum,
        "LoanToValueOptions": LoanToValueOptions,
        "RepayLoanRequest.IntentEnum": RepayLoanRequest.IntentEnum,
        "SwapRequest.IntentEnum": SwapRequest.IntentEnum,
        "SwapRequest.TradeTypeEnum": SwapRequest.TradeTypeEnum,
        "SwapResponse.TradeTypeEnum": SwapResponse.TradeTypeEnum,
        "Symbol": Symbol,
        "Transaction.DirectionEnum": Transaction.DirectionEnum,
        "TransactionStatus": TransactionStatus,
        "TransactionType": TransactionType,
        "WithdrawRequest.StatusEnum": WithdrawRequest.StatusEnum,
}

let typeMap: {[index: string]: any} = {
    "AdminRedemptionUpdateRequest": AdminRedemptionUpdateRequest,
    "AuthTelegramRequest": AuthTelegramRequest,
    "Balance": Balance,
    "BankInfo": BankInfo,
    "BulletContent": BulletContent,
    "Coin": Coin,
    "CoinConfig": CoinConfig,
    "CoinResponse": CoinResponse,
    "CreateChildUserRequest": CreateChildUserRequest,
    "Currency": Currency,
    "DepositResponse": DepositResponse,
    "DetailedLoanToValueOptions": DetailedLoanToValueOptions,
    "EmailOtpSubmitRequest": EmailOtpSubmitRequest,
    "ErrorDetail": ErrorDetail,
    "ExternalTransaction": ExternalTransaction,
    "FriendPoints": FriendPoints,
    "FriendPointsResponse": FriendPointsResponse,
    "HealthStatus": HealthStatus,
    "JwtResponse": JwtResponse,
    "KycConfirmRequest": KycConfirmRequest,
    "KycRequest": KycRequest,
    "KycResponse": KycResponse,
    "LoanCreateRequest": LoanCreateRequest,
    "LoanPlan": LoanPlan,
    "LoanPlanResponse": LoanPlanResponse,
    "LoansResponse": LoansResponse,
    "LoansResponseList": LoansResponseList,
    "LoginRequest": LoginRequest,
    "ModelError": ModelError,
    "Network": Network,
    "Payment": Payment,
    "PaymentRequest": PaymentRequest,
    "PhoneOtpSubmitRequest": PhoneOtpSubmitRequest,
    "ProfileResponse": ProfileResponse,
    "Redemption": Redemption,
    "RedemptionRequest": RedemptionRequest,
    "RedemptionResponse": RedemptionResponse,
    "Referral": Referral,
    "ReferralResponse": ReferralResponse,
    "RepayLoanRequest": RepayLoanRequest,
    "SignUpRequest": SignUpRequest,
    "SimpleResponse": SimpleResponse,
    "SwapRequest": SwapRequest,
    "SwapResponse": SwapResponse,
    "Task": Task,
    "TaskResponse": TaskResponse,
    "TelegramProfile": TelegramProfile,
    "Timestamp": Timestamp,
    "Transaction": Transaction,
    "TransactionResponse": TransactionResponse,
    "UpdateEmailRequest": UpdateEmailRequest,
    "UpdatePhoneRequest": UpdatePhoneRequest,
    "User": User,
    "UserError": UserError,
    "WalletBalance": WalletBalance,
    "WithdrawRequest": WithdrawRequest,
    "WithdrawRequestBody": WithdrawRequestBody,
    "WithdrawRequestPreview": WithdrawRequestPreview,
    "WithdrawRequestResponse": WithdrawRequestResponse,
    "WithdrawResponseBody": WithdrawResponseBody,
}

// Check if a string starts with another string without using es6 features
function startsWith(str: string, match: string): boolean {
    return str.substring(0, match.length) === match;
}

// Check if a string ends with another string without using es6 features
function endsWith(str: string, match: string): boolean {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
