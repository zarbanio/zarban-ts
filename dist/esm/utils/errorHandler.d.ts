import { ModelError as WalletModelError, UserError as WalletUserError } from "../wallet";
import { ModelError as ServiceModelError, UserError as ServiceUserError } from "../service";
import type { AxiosResponse } from "axios";
type AsyncFn<T> = (...args: any[]) => Promise<T>;
type SuccessCallback<T> = (result: T) => void;
export declare function isOfType<T>(obj: any, keys: (keyof T)[]): obj is T;
type ErrorTypes = Error | ServiceModelError | WalletModelError | ServiceUserError | WalletUserError;
export declare function withErrorHandler<T>(sdkName: "Service" | "Wallet", fn: AsyncFn<AxiosResponse<T>>, onSuccess?: SuccessCallback<AxiosResponse<T>>): (...args: Parameters<typeof fn>) => Promise<[T | null, ErrorTypes | null]>;
export {};
//# sourceMappingURL=errorHandler.d.ts.map