import { createSlice } from "@reduxjs/toolkit";


const storeInLocalStorage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data))
}

const fetchFromLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(localStorage.getItem('cart'))
    } else {
        return [];
    }
}

const initialState = {
    cart: fetchFromLocalStorage(),
    itemsCount: 0,
    totalAmount : 0,
    isCartMessageOn: false
}

const cartSlice = createSlice({
    name: '@@cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if (!state.cart.find(item => item.id === action.payload.id)) {
                state.cart.push(action.payload);
                storeInLocalStorage(state.cart);
            } else {
                const newCart = state.cart.map(item => {
                    if(item.id === action.payload.id) {
                        let newQty = item.quantity + action.payload.quantity;
                        let newTotalPrice = newQty * item.price;
    
                        return {
                            ...item, quantity: newQty, totalPrice: newTotalPrice
                        }
                    } else {
                        return item;
                    }
                });
                state.cart = newCart;
                storeInLocalStorage(state.cart);
            }
        },
        removeItemFromCart: (state, action) => {
            const newCart = state.cart.filter(item => item !== action.payload.id);
            state.cart = newCart;
            storeInLocalStorage(state.cart);
        },

        clearCart: (state) => {
            state.cart = [];
            storeInLocalStorage(state.cart);
        },
        getCartTotal: state => {
            state.totalAmount = state.cart.reduce((acc, sum) => {
                return acc += sum.totalPrice
            }, 0)
            state.itemsCount = state.cart.length;
        },

        toggleCartQty: (state, action) => {
            const newCart = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    let newQty = item.quantity;
                    let newTotalPrice = item.totalPrice;

                    if(action.payload.type === 'INC') {
                        newQty++;
                        if (newQty === item.stock) {
                            newQty = item.stock;
                        }
                        newTotalPrice = newQty * item.discountePrice;
                    }

                    if(action.payload.type === 'DEC') {
                        newQty--;
                        if (newQty < 1) {
                            newQty = 1
                        }
                        newTotalPrice = newQty * item.discountePrice;
                    }

                    return {...item, quantity: newQty, totalPrice: newTotalPrice }
                } else {
                    return item;
                }
            });
                state.cart = newCart;
                storeInLocalStorage(state.cart);
        },

        setCartMessageOn: (state) => {state.isCartMessageOn = true},
        setCartMessageOff: (state) => {state.isCartMessageOn = false},

        
    }

})

//actions
export const {addToCart, 
             removeItemFromCart, 
             clearCart, 
             getCartTotal, 
             toggleCartQty, 
             setCartMessageOn, 
             setCartMessageOff} = cartSlice.actions;

//selectors 
export const getCartMessageStatus = state => state.cart.isCartMessageOn;
export const getCartSelector = state => state.cart.cart;
export const getCartItemsCount = state => state.cart.itemsCount;

//reducer
export default cartSlice.reducer;