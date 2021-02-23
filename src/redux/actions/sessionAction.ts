import { SESSION } from '../reducers/sessionReducer';
import { Session } from '../reducers/sessionReducer';

export const addSession = (session: Session): UsersActionTypes => ({
    type: SESSION,
    payload: session
});

export interface AddSessionAction {
    type: typeof SESSION;
    payload: Session
}

export type UsersActionTypes = AddSessionAction;
