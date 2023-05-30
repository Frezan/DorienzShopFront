import React, {useState} from "react";

export const CartContext = React.createContext({});


const CartContextProvider = ({children} :any) => {
    const cartToString = localStorage.getItem('cart');
    if(cartToString){
        let cartToJSON  = JSON.parse(cartToString);

        const [cart,setCart] = useState<any>(cartToJSON.products);
        return (
            <CartContext.Provider
            value={{
                cart,
                setCart,
             }}>
                {children}
            </CartContext.Provider>
        )
    }
    else{
        const [cart,setCart] = useState<any>([]);
        return (
            <CartContext.Provider
            value={{
                cart,
                setCart,
             }}>
                {children}
            </CartContext.Provider>
        )
    }
}   

export default CartContextProvider;