import React from "react";
import CartContext from "./Cart-Context";

const CartProvider =(props)=>{

    const addItemHandler =(props)=>{}

    const removeItemHadler =(props) =>{}


    const cartContext ={
        item:[],
        totalAmount:0,
        addItem: addItemHandler,
        removeItem:removeItemHadler
    };
    return <CartContext.Provider>
        {props.children}
    </CartContext.Provider>

}

export default CartProvider;