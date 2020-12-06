export const initialState = {
    cart: [],
};

function reducer(state, action) {
    console.log(action)
    switch (action.type) {
        case "ADD TO CART":
            //logic for adding item to cart
            return { state }
            break;
        case "REMOVE_FROM_BASKET":
            // Logic for removing item from basket
            break;
        default:
            return state;
    }
}

export default reducer;