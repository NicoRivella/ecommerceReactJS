import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return(
        <nav className="NavBar">
	        <ul>
                <li>RivEcommers</li>
		        <li><a href="#">Libros</a></li>
		        <li><a href="#">CDs</a></li>
		        <li><a href="#">DVDs</a></li>
                <CartWidget />
	        </ul>
        </nav>
    )
}

export default NavBar