import './Header.css';
import Logo from './logotipo.svg'

function Header (){
    return(
    <div id="d-header-one">
        <div class="d-header-one-nav">
        <img src={Logo} alt="logo"/>
        <a href="./pages/login.html"><i class="fa-solid fa-user"></i></a>
        <a class="b-shop" href="./pages/compras.html"><i class="fa-solid fa-cart-shopping"></i></a>
        </div>
    </div>
    );
}


export default Header;