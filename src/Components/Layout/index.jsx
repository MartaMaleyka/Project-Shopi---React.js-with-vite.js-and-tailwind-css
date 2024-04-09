const Layout = ({children}) =>{
    return(
        <div className='flex flex-col bg-yellow-50 items-center py-4 mt-20'>
            <div className="px-6 text-lg font-semibold">
                {children}
            </div>
        </div>
    )
}

export default Layout