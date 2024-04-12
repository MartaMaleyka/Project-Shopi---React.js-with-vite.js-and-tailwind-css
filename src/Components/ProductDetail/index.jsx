import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'

import './styles.css'
const ProductDetail= () => {
    const context=useContext(ShoppingCartContext)
    const product = context.productToShow

    return(
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail  flex-col fixed overflow-scroll right-0 top-24 border border-black rounded-lg bg-gray-50/60`}>
            <div className='flex p-3 justify-between items-center'>
                <h2 className=' font-medium text-cyan-600 text-xl'>Details</h2>
                <div 
                className='absolute m-2 top-0 right-0 flex justify-center items-center bg-pink-700 text-white w-6 h-6 rounded-full p-1 hover:bg-pink-300'
                onClick={()=> context.closeProductDetail()}>
                    <XMarkIcon className='w-6 h-6 text-white'></XMarkIcon>
                </div>
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg' src={context.productToShow.images} alt={context.productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-cyan-600 text-md'>${context.productToShow.title}</span>
                <span className='font-light text-sm'>${context.productToShow.description}</span>
            </p>
        </aside>
    )
}
export default ProductDetail