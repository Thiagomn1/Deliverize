import { useContext } from "react"
import { ReactComponent as Logo } from "../assets/Deliverize.svg"
import { ReactComponent as AccountIcon } from "../assets/account_circle.svg"
import { ReactComponent as CartIcon } from "../assets/shopping_cart.svg"
import CarrinhoContext from "../context/carrinhoContext"
import "./Navbar.css"

function Navbar() {
  const { carrinho, ativo } = useContext(CarrinhoContext)

  return (
    <div className="nav__container">
      <nav>
        <Logo className="logo" />

        <div className="entrega__container">
          <div className="entrega__items">
            <p className="nav__text">Entrega: </p>
            <p className="nav__textbold">R. Antonio Braune, 222</p>
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
            <p className="nav__text menu">Entrar</p>
          </li>
          <li className="nav__item">
            <CartIcon />
            {ativo && <span className="carrinho__items">{carrinho.length}</span>}
            <p className="nav__text menu">Carrinho</p>
          </li>
        </ul>
        <div className="arrow__back"></div>
      </nav>
    </div>
  )
}

export default Navbar
