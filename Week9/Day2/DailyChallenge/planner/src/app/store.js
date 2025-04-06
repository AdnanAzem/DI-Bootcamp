import {createStore} from 'redux'
import { taskReducer } from './reducer'


const store = createStore(taskReducer, initialState)

export default store