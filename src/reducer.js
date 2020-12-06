export const initialState = {
    cart: [],
};

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "ADD_TO_CART":
            //logic for adding item to cart
            return { 
                ...state,
                cart: [...state.cart, action.item],
             };

        default:
            return state;
        }
};

export default reducer;