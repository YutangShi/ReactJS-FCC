import { combineReducers } from 'redux';
import recipes from './reducer_recipes';

/***
 combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object
 http://blog.csdn.net/woshizisezise/article/details/51142968
 當有多個reducer就需要用到 combineReducers
**/
const rootReducer = combineReducers({
  recipes
});

export default rootReducer;
