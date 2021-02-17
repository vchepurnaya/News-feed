import { SESSION } from '../../constants';
import { AddSessionAction } from '../actions/sessionAction';

export  interface CurrentUser {
    id: number,
    name: string,
    surname: string,
}

export interface Session {
    isLog: boolean,
    currentUser: CurrentUser
}

export interface SessionState {
    session: Session
}

const getSession = (): Session => {
    let session: Session;
    let sessionJson = sessionStorage.getItem('session');

    if (sessionJson === undefined || sessionJson === null) {
        session = {
            isLog: false,
            currentUser: {
                id: 0,
                name: '',
                surname: ''
            }
        }

        sessionStorage.setItem('session', JSON.stringify(session));
    } else {
        session = JSON.parse(sessionJson);
    }

    return session;
}

const initialState: SessionState = {
    session: getSession()
};

export const SessionReducer = (state = initialState, action: AddSessionAction): SessionState => {
    switch (action.type) {
        case SESSION:
            return {
                session: action.payload
            }
        default:
            return state;
    }
}
