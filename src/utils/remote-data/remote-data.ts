import {
    isFailure,
    isInitial,
    isPending,
    isSuccess,
    initial,
    pending,
    success,
    failure,
} from './helpers';

export interface Initial<T = null> {
    pending: false;
    failure: false;
    result: T;
}

export interface Pending<T = null> {
    pending: true;
    failure: false;
    result: T;
}

export interface Failure {
    pending: boolean;
    failure: true;
    result: null;
    errorMessage: string;
}

export interface Success<T> {
    pending: false;
    failure: false;
    result: T;
}

export type RemoteData<T = null, TInitial = null, TPending = null> =
    | Initial<TInitial>
    | Pending<TPending>
    | Failure
    | Success<T>;

function combineRD2<T1, T2>(
    data1: RemoteData<T1>,
    data2: RemoteData<T2[]>
): RemoteData<[T1, ...T2[]]> {
    if (isFailure(data1)) {
        return failure(data1.errorMessage);
    } else if (isFailure(data2)) {
        return failure(data2.errorMessage);
    } else if (isInitial(data1) || isInitial(data2)) {
        return initial;
    } else if (isPending(data1) || isPending(data2)) {
        return pending;
    } else if (isSuccess(data1) && isSuccess(data2)) {
        return success([data1.result, ...data2.result]);
    }

    return failure();
}

export function combineRemoteData<T1, T2>(
    data1: RemoteData<T1>,
    data2: RemoteData<T2>
): RemoteData<[T1, T2]>;
export function combineRemoteData<T1, T2, T3>(
    data1: RemoteData<T1>,
    data2: RemoteData<T2>,
    data3: RemoteData<T3>
): RemoteData<[T1, T2, T3]>;
export function combineRemoteData<T1, T2, T3, T4>(
    data1: RemoteData<T1>,
    data2: RemoteData<T2>,
    data3: RemoteData<T3>,
    data4: RemoteData<T4>
): RemoteData<[T1, T2, T3, T4]>;
export function combineRemoteData<T1, T2, T3, T4, T5>(
    data1: RemoteData<T1>,
    data2: RemoteData<T2>,
    data3: RemoteData<T3>,
    data4: RemoteData<T4>,
    data5: RemoteData<T5>
): RemoteData<[T1, T2, T3, T4, T5]>;
export function combineRemoteData<T1, T2, T3, T4, T5, T6>(
    data1: RemoteData<T1>,
    data2: RemoteData<T2>,
    data3: RemoteData<T3>,
    data4: RemoteData<T4>,
    data5: RemoteData<T5>,
    data6: RemoteData<T6>
): RemoteData<[T1, T2, T3, T4, T5, T6]>;
export function combineRemoteData<T1, T2, T3, T4, T5, T6, T7>(
    data1: RemoteData<T1>,
    data2: RemoteData<T2>,
    data3: RemoteData<T3>,
    data4: RemoteData<T4>,
    data5: RemoteData<T5>,
    data6: RemoteData<T6>,
    data7: RemoteData<T7>
): RemoteData<[T1, T2, T3, T4, T5, T6, T7]>;
export function combineRemoteData<T>(
    ...data: RemoteData<T>[]
): RemoteData<T[]> {
    return data.reduceRight(
        (acc: RemoteData<T[]>, curr: RemoteData<T>) => combineRD2(curr, acc),
        success([] as any)
    );
}
