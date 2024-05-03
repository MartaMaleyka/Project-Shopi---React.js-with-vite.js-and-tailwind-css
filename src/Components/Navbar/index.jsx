import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { NavLink } from "react-router-dom"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'


const Navbar = () =>{
    const context=useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4 text-cyan-600'

    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true)
        localStorage.setItem('sign-out', stringifiedSignOut)
        context.setSignOut(true)
      }

    return(
        
        <nav className="bg-yellow-50 flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light mb-1">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-center text-lg text-cyan-600">
                    <NavLink to='/'>
                        Shopi<br />Boutique
                    </NavLink> 
                </li>
                <li>
                    <NavLink 
                    to='/'
                    onClick={() => context.setSearchByCategory()}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink> 
                </li>
                <li>
                    <NavLink 
                        to='/clothes'
                        onClick={() => context.setSearchByCategory('clothes')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Clothes
                    </NavLink> 
                </li>
                <li>
                    <NavLink 
                        to='/furnitures'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        onClick={() => context.setSearchByCategory('furniture')}
                    >
                        Furnitures
                    </NavLink> 
                </li>
                <li>
                    <NavLink 
                        to='/toys'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        onClick={() => context.setSearchByCategory('toys')}
                    >
                        Toys
                    </NavLink> 
                </li>
                <li>
                    <NavLink 
                        to='/electronics'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        onClick={() => context.setSearchByCategory('electronics')}
                    >
                        Electronics
                    </NavLink> 
                </li>
                <li>
                    <NavLink 
                        to='/others'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        onClick={() => context.setSearchByCategory('others')}
                    >
                        Others
                    </NavLink> 
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className=" text-black/60">
                    @marta_maleyka
                </li>
                <li>
                    <NavLink 
                        to='/my-orders'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        My Orders
                    </NavLink> 
                </li>
                <li>
                    <NavLink 
                        to='/my-account'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        My Account
                    </NavLink> 
                </li>
                <li>
                    <NavLink 
                        to='/sign-in'
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                        onClick={() => handleSignOut()}>
                        Sign out
                    </NavLink> 
                </li>
                <li className='flex justify-center items-center'>

                     <ShoppingCartIcon className="h-6 w-6 mr-2 text-cyan-500 cursor-pointer" onClick={()=> context.openCheckoutSideMenu()} />
                     {context.count}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar