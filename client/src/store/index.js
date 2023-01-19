import { createStore } from 'redux';
import reducer from './reducers/reducer';

const store = createStore(reducer);
const persister = 'Free';

export { store, persister };
