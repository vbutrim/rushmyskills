import {combineReducers, createStore} from 'redux';
import {mainReducer} from './system/reducers';

const rootReducer = combineReducers({
    system: mainReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore<AppState, any, any, any>(rootReducer);
export default store;
