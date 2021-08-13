import { MENS_C, WOMEN_C } from '../Types';

const initialState = {
    mens: false,
    womens: false
}

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case MENS_C:
            return { ...state, mens: !state.mens }

        case WOMEN_C:
            return { ...state, womens: !state.womens }
        default:
            return state
    }
}