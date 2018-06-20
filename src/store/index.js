import counter from './reducers'
import {createStore} from 'redux'
export const store = createStore(counter)
