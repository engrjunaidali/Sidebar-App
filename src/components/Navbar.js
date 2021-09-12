import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from 'react-icons/ai'
import {Link} from "react-router-dom";
import './Navbar.css'
import {SidebarData} from './SidebarData'
import {IconContext} from 'react-icons'

function Navbar() {
    const  [sidebar,setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div>
        <IconContext.Provider value={{color:'#fff'}}>
            <div className="navbar">
                <Link to="#" className="menu-bars" onClick={showSidebar}><FaIcons.FaBars/></Link>
            </div>

            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>

                <div className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose onClick={showSidebar}/>
                        </Link>
                    </li>
                    {SidebarData.map((item,index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </div>

            </nav>

            </IconContext.Provider>
        </div>
    )
}

export default Navbar
