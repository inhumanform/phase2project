import {NavLink} from "react-router-dom"
import Search from './Search';

function NavBar({ onSearchChange }) {
    return (
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/learningresources">Learning Resources</NavLink>
            <NavLink to="/newmusic">Add New Sheet Music</NavLink>
            <NavLink to="/mysheetmusic">Library</NavLink>
            <NavLink to="/practicepage">Practice</NavLink>
            <Search onSearchChange={onSearchChange} />
            </nav>
    );
}

export default NavBar;