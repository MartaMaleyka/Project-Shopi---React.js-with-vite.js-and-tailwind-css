import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import OrderCard from '../../Components/OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'
const CheckoutSideMenu= () => {

    const context=useContext(ShoppingCartContext)

    const handleDelete =(id) =>{
        const filtered = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filtered)
        context.setCount(context.count - 1)
    }
    
    return(
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu  flex-col fixed overflow-scroll right-0 top-24 border border-black rounded-lg bg-gray-50/60`}>
            <div className='flex p-3 justify-between items-center'>
                <h2 className=' font-medium text-cyan-600 text-xl'>My Order</h2>
                <div 
                className='absolute m-2 top-0 right-0 flex justify-center items-center bg-pink-700 text-white w-6 h-6 rounded-full p-1 hover:bg-pink-300'
                onClick={()=> context.closeCheckoutSideMenu()}>
                    <XMarkIcon className='w-6 h-6 text-white cursor-pointer'></XMarkIcon>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll'>
                {
                context.cartProducts.map(product => (
                <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.images}
                price={product.price}
                handleDelete = {handleDelete}
                />
                ))
                }
            </div>
            <div className='px-6'>
                <p className='flex justify-between items-center'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
            </div>

        </aside>
    )
}
export default CheckoutSideMenu