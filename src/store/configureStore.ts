import { createStore } from 'redux';
import RootReducer from '../reducers';
import { AppState } from '../reducers/initialState';

const devtoolsExtension: string = '__REDUX_DEVTOOLS_EXTENSION__';

const hot = 'hot';

export default function configureStore(initialState: AppState) {
    const store = createStore(RootReducer, window[devtoolsExtension] && window[devtoolsExtension]());

    if (module[hot]) {
        module[hot].accept('../reducers', () =>
            store.replaceReducer(require('../reducers').default)
        );
    }

    return store;
}