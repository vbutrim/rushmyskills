import {combineReducers, createStore} from 'redux';
import {authorizationReducer} from './authorization/reducers';

const rootReducer = combineReducers({
    system: authorizationReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore<AppState, any, any, any>(rootReducer);
export default store;
