
import {createStore} from 'redux';
import { datareducer } from './reducer/dataReducer';

const store = createStore(datareducer);




export default store;