import { GET_PRODUCTS } from '../Types';

const initialState = {
    products: []
}

export const productsReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state, products: action.payload }

        default:
            return state
    }
};

export const getProductsAction = (payload) => ({ type: GET_PRODUCTS, payload })