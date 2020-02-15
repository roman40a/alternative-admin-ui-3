import { RemoteData, Pending, Initial, Failure, Success } from './remote-data';

export function isInitial<T>(data: RemoteData<T>): data is Initial {
    const { pending, failure, result } = data;

    return !pending && !failure && result === null;
}

export function isPending<T>(data: RemoteData<T>): data is Pending {
    const { pending, failure } = data;

    return pending && !failure;
}

export function isFailure<T>(data: RemoteData<T>): data is Failure {
    return data.failure;
}

export function isSuccess<T>(data: RemoteData<T>): data is Success<T> {
    const { pending, failure, result } = data;

    return !pending && !failure && result !== null;
}

export const initial: Initial = {
    failure: false,
    pending: false,
    result: null,
};

export const initialWithDefault = <T>(defaultValue: T): Initial<T> => ({
    failure: false,
    pending: false,
    result: defaultValue,
});

export const pending: Pending = {
    failure: false,
    pending: true,
    result: null,
};

export const pendingWithDefault = <T>(defaultValue: T): Pending<T> => ({
    failure: false,
    pending: true,
    result: defaultValue,
});

export const failure = (errorMessage: string = ''): Failure => ({
    failure: true,
    pending: false,
    result: null,
    errorMessage,
});

export function success<T>(data: T): Success<T> {
    return {
        failure: false,
        pending: false,
        result: data,
    };
}
