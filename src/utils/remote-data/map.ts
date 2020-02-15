import {
    isInitial,
    isPending,
    isSuccess,
    initial,
    pending,
    success,
    failure,
} from './helpers';
import { RemoteData } from './remote-data';

export function mapRemoteData<A, B>(
    data: RemoteData<A>,
    parseToB: (a: A) => B
): RemoteData<B> {
    if (isInitial(data)) {
        return initial;
    } else if (isPending(data)) {
        return pending;
    } else if (isSuccess(data)) {
        return success(parseToB(data.result));
    }

    return failure(data.errorMessage);
}
