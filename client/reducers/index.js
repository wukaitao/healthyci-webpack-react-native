import {combineReducers} from 'redux';
import * as popup from './popup.js';

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
	pageStatus: popup.pageStatus
});

export default rootReducer;