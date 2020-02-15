import { RemoteData } from './remote-data';
import { isInitial, isPending, isSuccess } from './helpers';

export function foldRemoteData<T, R>(
    data: RemoteData<T>,
    renderInitial: () => R,
    renderPending: () => R,
    renderFailure: (errorMessage: string, fetchData?: () => void) => R,
    renderSuccess: (data: T) => R,
    fetchData?: () => void
): R {
    if (isInitial(data)) {
        return renderInitial();
    } else if (isPending(data)) {
        return renderPending();
    } else if (isSuccess(data)) {
        return renderSuccess(data.result);
    }

    return renderFailure(data.errorMessage, fetchData);
}
