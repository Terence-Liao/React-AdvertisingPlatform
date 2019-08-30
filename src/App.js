
import React from 'react'
import { Provider } from 'react-redux'
import { history } from '@/store'
import { ConnectedRouter } from 'react-router-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Redirect } from 'react-router-dom'

// persister 缓存恢复前调用的方法
const onBeforeLift = () => {
    // console.log('before action')
}

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { persistor, store } = this.props.stores
        // 主页面
        return (
            <Provider store={store}>
            <PersistGate loading={<div/>} onBeforeLift={onBeforeLift} persistor={persistor}>
            <ConnectedRouter history={history}>
            // switch and route
            </ConnectedRouter>
            </PersistGate>
            </Provider>
    )
    }
}
export default App;