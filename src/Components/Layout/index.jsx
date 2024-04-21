const Layout = ({children}) =>{
    return(
        <div className='flex flex-col items-center justify-center bg-yellow-50  py-4 mt-20'>
            <div className="px-6 text-lg font-semibold">
                {children}
            </div>
        </div>
    )
}

export default Layout