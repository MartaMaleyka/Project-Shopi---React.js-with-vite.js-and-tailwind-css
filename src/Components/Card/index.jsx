import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { PlusIcon } from '@heroicons/react/24/solid'


const Card = (data) => {
    const context=useContext(ShoppingCartContext)
    const showProduct = (productDetail) =>{
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const addProductsToCart = (event,productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        console.log('CART: ', context.cartProducts)
    }
    
   return(
    <div className='flex'>
        <div 
        className='bg-gray-50 h-full cursor-pointer w-40  rounded-sm active:bg-gray-50/60 focus:outline-none focus:ring-white focus:ring-2'
        onClick={()=> showProduct(data.data) }>
            <figure className='relative mb-3 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-gray-50/60 rounded-lg mb-1 px-2 py-0.5 text-sm text-cyan-700'>{data.data.category.name}</span>
                <img className=' w-full h-full object-fill rounded-lg' src={data.data.images[0]} alt={data.data.title} />
                <div 
                className='absolute m-2 top-0 right-0 flex justify-center items-center bg-cyan-600 text-white w-6 h-6 rounded-full p-1 hover:bg-cyan-400'
                onClick={(event)=> addProductsToCart(event,data.data) }>
                    <PlusIcon className="h-6 w-6 text-white" />
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-xs ml-1 font-light'>{data.data.title}</span>
                <span className=' text-xs mr-2 font-bold'>${data.data.price}</span>
            </p>
        </div>
    </div>
   ) 
}
export default Card