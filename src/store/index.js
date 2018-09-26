import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

// redex 调试工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
	applyMiddleware(thunk)
);
const store = createStore(reducer, enhancer);

export default store;


/**
 *  笔记
 *  
 *  createStore：（reducer, [preloadedState], enhancer）
 *  创建一个 Redux store 来以存放应用中所有的 state。
 *  应用中应有且仅有一个 store。
 *  
 *  applyMiddleware
 *  使用包含自定义功能的 middleware 来扩展 Redux 是一种推荐的方式。
 *  Middleware 最常见的使用场景是无需引用大量代码或依赖类似 Rx 的第三方库实现异步 actions。
 *  这种方式可以让你像 dispatch 一般的 actions 那样 dispatch 异步 actions。
 *  例如：redux-thunk
 *  
 *  compose
 *  从右到左来组合多个函数。
 *  这是函数式编程中的方法，为了方便，被放到了 Redux 里。
 *  当需要把多个 store 增强器 依次执行的时候，需要用到它。
 * 
 */