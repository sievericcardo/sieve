import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers/reducer';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));
const persister = 'Free';

export { store, persister };
