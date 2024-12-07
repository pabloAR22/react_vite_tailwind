import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    //Shopping cart Quantity
    const [count, setCount ] = useState(0);

    //Open Close Detail
    const [isProductDetailOpen, setIsProductDetailOpen ] = useState(false);

    const openProductDetail = () => {
        setIsProductDetailOpen(true);
    }

    const closeProductDetail = () => {
        setIsProductDetailOpen(false);
    }

    //Product Detail Show product
    const [productToShow, setProductToShow] = useState({});
    return (
        <ShoppingCartContext.Provider value={{
            count, 
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}