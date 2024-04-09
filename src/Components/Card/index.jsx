import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { PlusIcon } from '@heroicons/react/24/solid'


const Card = (data) => {
    const context=useContext(ShoppingCartContext)
   return(
    <div className='flex'>
        <div className='bg-gray-50 cursor-pointer w-60 h-72 rounded-sm active:bg-gray-50/60 focus:outline-none focus:ring-white focus:ring-2'>
            <figure className='relative mb-3 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-gray-50/60 rounded-lg mb-1 px-3 py-0.5'>{data.data.category.name}</span>
                <img className=' w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title} />
                <div 
                className='absolute m-2 top-0 right-0 flex justify-center items-center bg-cyan-600 text-white w-6 h-6 rounded-full p-1 hover:bg-cyan-400'
                onClick={()=> context.setCount(context.count + 1 )}>
                    <PlusIcon className="h-6 w-6 text-white" />
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm m-2 font-light'>{data.data.title}</span>
                <span className='text-sm m-2 font-bold'>${data.data.price}</span>
            </p>
        </div>
    </div>
   ) 
}
export default Card