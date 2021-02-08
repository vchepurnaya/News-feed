import { combineReducers, createStore } from 'redux';
import { UsersReducer } from '../reducers/usersReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
    users: UsersReducer
})

export const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>
