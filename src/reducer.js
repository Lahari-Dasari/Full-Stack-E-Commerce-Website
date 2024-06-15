export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'EMPTY_CART':
            return {
                ...state,
                basket: [],
            };
        case 'REMOVE_FROM_CART':
            const newBasket = [...state.basket];
            newBasket.splice(action.index, 1);
            return {
                ...state,
                basket: newBasket
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
};

export default reducer;
