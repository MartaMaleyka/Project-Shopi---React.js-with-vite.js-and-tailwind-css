import { XMarkIcon } from '@heroicons/react/24/solid'

import './styles.css'
const ProductDetail= () => {
    return(
        <aside className='product-detail flex flex-col fixed right-0 top-24 border border-black rounded-lg bg-gray-50'>
            <div className='flex p-3 justify-between items-center'>
                <h2 className=' font-medium text-xl'>Details</h2>
                <div className='absolute m-2 top-0 right-0 flex justify-center items-center bg-red-900 text-white w-6 h-6 rounded-full p-1 hover:bg-red-700'>
                    <XMarkIcon className='w-6 h-6 text-white'></XMarkIcon>
                </div>
            </div>
        </aside>
    )
}
export default ProductDetail