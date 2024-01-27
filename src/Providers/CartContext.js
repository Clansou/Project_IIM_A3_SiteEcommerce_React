import { createContext,useContext,useState } from "react";

const CartContext = createContext()

export function CartProvider({children}){
    const [cart,setCart] = useState([])

    const addToCart= (item) =>{
        setCart([...cart,item])
    }
    const removeFromCart = (item) => {
        console.log(item)
        console.log(cart[item])
        setCart([
            ...cart.slice(0, item),
            ...cart.slice(item + 1)
        ]);
    };

    const removeAllFromCart = () => {
        setCart([])
      };

    return(<CartContext.Provider value={{cart,addToCart,removeFromCart,removeAllFromCart}}>
    {children}
    </CartContext.Provider>)
}

export function useCart(){
    return useContext(CartContext)
}