import { applyMiddleware, combineReducers, createStore } from 'redux';
import { categoriesReducer } from './Redux/Reducers/categoriesReducer';
import { productsReducer } from './Redux/Reducers/productsReducer';
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,

})

export const store = createStore(rootReducer, applyMiddleware(thunk))