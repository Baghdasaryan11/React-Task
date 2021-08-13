import axios from 'axios';
import { getProductsAction } from '../Reducers/productsReducer';

export const getProducts = () => {
    return async dispatch => {
        const res = await axios('/products', {
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.data;
        dispatch(getProductsAction(data))

    }
}