import {combineReducers, createStore} from 'redux';
import {authorizationReducer} from './system/reducers';

const rootReducer = combineReducers({
    system: authorizationReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore<AppState, any, any, any>(rootReducer);
export default store;
