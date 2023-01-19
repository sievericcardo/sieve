import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import mediaReducer from "./mediaReducers";
import articleReducer from "./articleReducer";
import projectReducer from "./projectReducer";
import writeupReducer from "./writeupReducer";
import authReducer from "./authReducers";

const reducer = combineReducers({
  customization: customizationReducer,
  medias: mediaReducer,
  articles: articleReducer,
  projects: projectReducer,
  writeups: writeupReducer,
  auth: authReducer,
});

export default reducer;
