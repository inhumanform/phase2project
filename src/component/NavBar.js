
import { NavLink } from "react-router-dom"
import Search from './Search';

function NavBar({ onSearchChange, onSearchFieldChange }) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="logo nav-link">
                    <NavLink to="/">shed.</NavLink>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#f88a30" viewBox="0 0 256 256"><path d="M152,32V224L80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80Z" opacity="0.2"></path><path d="M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM144,207.64,84.91,161.69A7.94,7.94,0,0,0,80,160H32V96H80a7.94,7.94,0,0,0,4.91-1.69L144,48.36ZM200,104v48a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v80a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"></path></svg>
                </li>


                <li className="nav-item nav-link library">
                    <NavLink className='icon-link' to="/library" >

                    </NavLink>
                    <span className="link-text">Your Sheet Music</span>
                </li>

                <li className="nav-item nav-link newMusic">
                    <NavLink className='icon-link' to="/newmusic">
                    </NavLink>
                    <span className="link-text">Add New Music</span>
                </li>

                <li className="nav-item nav-link coolGear">
                    <NavLink className='icon-link' to="/learningresources">
                    </NavLink>
                    <span className="link-text">Resources</span>
                </li>
                <li className="nav-item nav-link search">
                    <Search onSearchChange={onSearchChange} onSearchFieldChange={onSearchFieldChange} />
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;