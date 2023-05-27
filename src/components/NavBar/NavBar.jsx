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
                    <NavLink to={`category/terror`} className={`nav-link active PlainLink NavLinkCustom`} activeClassName="ActiveOption" exact>
                        Terror
                    </NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink to={`category/suspenso`} className={`nav-link active PlainLink NavLinkCustom`} activeClassName="ActiveOption" exact>
                        Suspenso
                    </NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink to={`category/comedia`} className={`nav-link active PlainLink NavLinkCustom`} activeClassName="ActiveOption" exact>
                        Comedia
                    </NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink to={`category/romantica`} className={`nav-link active PlainLink NavLinkCustom`} activeClassName="ActiveOption" exact>
                        Romantica
                    </NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink to={`category/fantasia`} className={`nav-link active PlainLink NavLinkCustom`} activeClassName="ActiveOption" exact>
                        Fantasia
                    </NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink to={`category/policial`} className={`nav-link active PlainLink NavLinkCustom`} activeClassName="ActiveOption" exact>
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