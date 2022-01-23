import { useState } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import {BiMoviePlay} from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import "./scss/Navigation.scss";

const Navigation = () => {
    const [showNav, setShowNav] = useState(false);
    return (
        <div className="wrap">
            <header className="header">
                <div className="header_center">
                    <div className="header-bar">
                       <Link to="/" className="logo">
                            <BiMoviePlay className="icon"/>
                            <h1>MOVIE APP</h1>
                        </Link>
                        <FaBars className="bar" onClick={() => setShowNav(!showNav)}/>
                    </div>
                    <nav className={showNav ? "navigation show" : "navigation"}>
                        <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
                        <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink>
                        <NavLink to="/search" className={({isActive}) => isActive ? "active" : ""}>Search</NavLink> 
                    </nav> 
                </div>
            </header>
            <Outlet context={[setShowNav]}/>
        </div>
        
    );
}

export default Navigation;