
import { fork, all } from 'redux-saga/effects'
// import xxxSagaFlow from './xxxFlow'​
// 根saga

export default function* rootSaga () {
    yield all([
        // fork(xxxSagaFlow)
    ])
}