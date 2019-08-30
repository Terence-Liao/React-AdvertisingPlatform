
import { routerReducer } from 'react-router-redux'
import { persistCombineReducers, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import xxxReducer from './xxx'

// redux-persist 配置
export const config = {
    key: 'root',
    storage,
    debug: true,
    // 将对应reducer保存到本地缓存的白名单
    whitelist: [
        'routing',
    ]
}

// 合并reducer
export default persistCombineReducers(config, {
    routing: routerReducer, // 默认引入路由reducer
    // xxx: xxxReducer,
})