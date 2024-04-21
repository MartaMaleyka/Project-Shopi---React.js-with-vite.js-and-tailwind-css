import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => 
{
    const [count, setCount] = useState(0)

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Checkout Side Menu · Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    
    const [productToShow, setProductToShow] = useState({
        title: "",
        price: "",
        description: "",
        images: [],
      });

    const [cartProducts, setCartProducts] = useState([])

    //Shopping Cart- Order
    const [order, setOrder] = useState([])

    //Get Produucts 
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
          .then(response => response.json())
          .then(data => setItems(data))
      }, [])    
    
    return(
        <ShoppingCartContext.Provider value={{
            items, 
            setItems,
            count,
            setCount, 
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu, 
            order,
            setOrder
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}