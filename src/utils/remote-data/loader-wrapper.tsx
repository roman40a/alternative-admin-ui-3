import * as React from 'react';

import { RemoteData } from './remote-data';
import { foldRemoteData } from './fold';

interface Props<T> {
    children: (data: T) => React.ReactElement;
    data: RemoteData<T>;
    fetchData?: () => void;
    renderPending?: () => React.ReactElement;
    renderFailure?: (
        errorMessage: string,
        fetchData?: () => void
    ) => React.ReactElement;
    predicateNoData?: (data: T) => boolean;
    renderNoData?: () => React.ReactElement;
}

const wrapperStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 450,
};

const renderPendingDefault = () => (
    <div style={wrapperStyles}>
        <span style={{ marginLeft: 15 }}>Загрузка</span>
    </div>
);

const renderFailureDefault = (errorMessage: string, fetchData?: () => void) => (
    <div style={wrapperStyles}>
        <button onClick={fetchData}>Повторить</button>
    </div>
);

export function LoaderWrapper<T>(props: Props<T>): React.ReactElement {
    const {
        data,
        renderPending,
        fetchData,
        renderFailure,
        predicateNoData = () => false,
        renderNoData,
        children,
    } = props;

    const renderIfPending = renderPending || renderPendingDefault;
    const renderIfFailure = renderFailure || renderFailureDefault;

    return foldRemoteData<T, React.ReactElement>(
        data,
        renderIfPending,
        renderIfPending,
        renderIfFailure,
        data =>
            predicateNoData(data) && renderNoData
                ? renderNoData()
                : children(data),
        fetchData
    );
}
