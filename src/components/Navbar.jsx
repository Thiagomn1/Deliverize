import { ReactComponent as Logo } from "../assets/Deliverize.svg"
import { ReactComponent as AccountIcon } from "../assets/account_circle.svg"
import { ReactComponent as CartIcon } from "../assets/shopping_cart.svg"

function Navbar() {
  return (
    <div className="nav__container">
      <nav>
        <Logo className="logo" />

        <div className="entrega">
          <div className="entrega__items">
            <p>Entrega: </p>
            <p>R. Antonio Braune, 222</p>
          </div>
          <div className="arrow-down"></div>
        </div>

        <input
          type="search"
          name="busca"
          id="busca"
          className="nav__busca"
          placeholder="Busque por estabelecimentos ou produtos"
        />

        <ul className="nav__items">
          <li className="nav__item">
            <AccountIcon />
            <p>Entrar</p>
          </li>
          <li className="nav__item">
            <CartIcon />
            <p>Carrinho</p>
          </li>
        </ul>
        <div className="arrow__back"></div>
      </nav>
    </div>
  )
}

export default Navbar
