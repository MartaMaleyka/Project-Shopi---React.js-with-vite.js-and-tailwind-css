import { NavLink } from "react-router-dom"
const Navbar = () =>{
    const activeStyle = 'underline underline-offset-4 text-cyan-600'

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
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink> 
                </li>
                <li>
                    <NavLink 
                        to='/fashion'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Fashion
                    </NavLink> 
                </li>
                <li>
                    <NavLink 
                        to='/jewerly'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Jewerly
                    </NavLink> 
                </li>
                <li>
                    <NavLink 
                        to='/cosmetics-skincare'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Cosmetics and Skincare
                    </NavLink> 
                </li>
                <li>
                    <NavLink 
                        to='/accesories'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Accesories
                    </NavLink> 
                </li>
                <li>
                    <NavLink 
                        to='/decor'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Decor
                    </NavLink> 
                </li>
                <li>
                    <NavLink 
                        to='/luxury-items'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Luxury Items
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
                    >
                        Sign In
                    </NavLink> 
                </li>
                <li>
                    🛒0
                </li>
            </ul>
        </nav>
    )
}

export default Navbar