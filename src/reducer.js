export const initialState = {
    cart: [],
};

//selector
export const getCartTotal = (cart) => 
 cart?.reduce((amount, item) => item.price + amount, 0)

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