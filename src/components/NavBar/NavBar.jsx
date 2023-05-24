import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import Logo from './burguer/cine.svg'

const NavBar = () => {
    return (
        <nav className = "NavBar" class="navbar bg-light sticky-top">
            <div class="container-fluid">
            <Link class="navbar-brand" to='/'>
                <h2>MatNahuel</h2>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span>
                    <img src={Logo} title="menú hamburguesa" alt="menu hamburguesa alterno y fachero" />
                </span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
                <h4 class="offcanvas-title" id="offcanvasNavbarLabel">Categorias</h4>
                <CartWidget />
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className='Categories' class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                    <NavLink class="nav-link active" aria-current="page" to={`category/terror`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>
                        Terror
                    </NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink class="nav-link active" aria-current="page" to={`category/suspenso`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>
                        Suspenso
                    </NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink class="nav-link active" aria-current="page" to={`category/comedia`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>
                        Comedia
                    </NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink class="nav-link active" aria-current="page" to={`category/romantica`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>
                        Romantica
                    </NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink class="nav-link active" aria-current="page" to={`category/fantasia`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>
                        Fantasia
                    </NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink class="nav-link active" aria-current="page" to={`category/policial`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>
                        Policial
                    </NavLink>
                    </li>
                </ul>
            </div>
            </div>            
            </div>
        </nav>       
    )
}

export default NavBar