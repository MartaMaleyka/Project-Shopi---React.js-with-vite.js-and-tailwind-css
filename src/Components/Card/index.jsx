const Card = () => {
   return(
    <div className='flex'>
        <div className='bg-gray-50 cursor-pointer m-5 w-56 h-60 rounded-sm active:bg-gray-50/60 focus:outline-none focus:ring-white focus:ring-2'>
            <figure className='relative mb-3 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-gray-50/60 rounded-lg m-2 px-3 py-0.5'>Fashion</span>
                <img className=' w-full h-full object-cover rounded-lg' src="https://images.pexels.com/photos/15673005/pexels-photo-15673005/free-photo-of-sesion-xv-anos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className='absolute m-2 top-0 right-0 flex justify-center items-center bg-cyan-600 text-white w-6 h-6 rounded-full p-1 hover:bg-cyan-400'>+</div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm m-2 font-light'>Vestido de Encaje</span>
                <span className='text-sm m-2 font-bold'>$300</span>
            </p>
        </div>
    </div>
   ) 
}
export default Card