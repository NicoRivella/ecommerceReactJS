import './NavBar.css'

const NavBar = () => {
    return(
        <nav className="NavBar">
	        <ul>
                <li>RivEcommers</li>
		        <li><a href="#">Libros</a></li>
		        <li><a href="#">CDs</a></li>
		        <li><a href="#">DVDs</a></li>
	        </ul>
        </nav>
    )
}

export default NavBar