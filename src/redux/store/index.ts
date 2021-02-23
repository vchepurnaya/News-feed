import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { SessionReducer } from '../reducers/sessionReducer';

const rootReducer = combineReducers({
    session: SessionReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>
