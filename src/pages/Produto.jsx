import { useState, useContext, useEffect } from "react"
import axios from "axios"
import CarrinhoContext from "../context/carrinhoContext"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import "tippy.js/themes/light-border.css"
import { ReactComponent as Subtract } from "../assets/SubtractFill.svg"
import { ReactComponent as SubtractGray } from "../assets/Subtract.svg"
import { ReactComponent as Add } from "../assets/Add.svg"
import Hambuguer from "../assets/foto.png"
import Spinner from "../components/Spinner"
import "./Produto.css"

function Produto() {
  const [loading, setLoading] = useState(false)
  const [produto, setProduto] = useState(null)
  let [queijo, setQueijo] = useState(0)
  let [cebola, setCebola] = useState(0)
  let [cheddar, setCheddar] = useState(0)
  let [picanha, setPicanha] = useState(0)
  let [talher, setTalher] = useState(0)

  const { adicionarItems } = useContext(CarrinhoContext)

  useEffect(() => {
    fetchProduto()
  }, [])

  const fetchProduto = async () => {
    setLoading(true)
    const response = await axios
      .get("https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products")
      .catch(error => {
        if (error) {
          setLoading(false)
          console.log(error)
        }
      })

    if (response.data) {
      setProduto(response.data)
      setLoading(false)
    }
  }

  const adicionarItem = event => {
    event.preventDefault()
    const produtoNome = produto[0].nm_product
    adicionarItems(produtoNome, queijo, cheddar, cebola, picanha, talher)
  }

  if (loading) {
    return <Spinner />
  }

  if (!loading && !produto) {
    return <h2>Produto não encontrado</h2>
  }

  return (
    <>
      {produto && (
        <div className="produto__container">
          <section className="produto">
            <img src={Hambuguer} alt="Hamburguer" />

            <h2>{produto[0].nm_product}</h2>
            <h4>{produto[0].description}</h4>
            <h3 className="texto__preco">
              {produto[0].vl_discount}
              <strike>{produto[0].vl_price}</strike>
            </h3>
          </section>

          <section className="opcoes">
            <div className="opcao__info">
              <p className="opcao__title">Adicionar Ingredientes</p>
              <p className="opcao__text">Até 8 ingredientes</p>
            </div>

            <div className="opcao__item">
              <div className="opcao__nome">
                <h4 className="opcao__title">{produto[0].ingredients[0].itens[0].nm_item}</h4>
                <p className="opcao__preco">{`+ R$${produto[0].ingredients[0].itens[0].vl_item}`}</p>
              </div>
              <div className="opcao__contador">
                {queijo === 0 ? (
                  <SubtractGray className="menos" />
                ) : (
                  <Subtract
                    className="menos"
                    onClick={() => {
                      if (queijo > 0) {
                        setQueijo((queijo -= 1))
                      }
                    }}
                  />
                )}
                <p>{queijo}</p>
                <Add className="mais" onClick={() => setQueijo((queijo += 1))} />
              </div>
            </div>
            <hr />

            <div className="opcao__item">
              <div className="opcao__nome">
                <h4 className="opcao__title">{produto[0].ingredients[0].itens[1].nm_item}</h4>
                <p className="opcao__preco">{`+ R$${produto[0].ingredients[0].itens[1].vl_item}`}</p>
              </div>
              <div className="opcao__contador">
                {cebola === 0 ? (
                  <SubtractGray className="menos" />
                ) : (
                  <Subtract
                    className="menos"
                    onClick={() => {
                      if (cebola > 0) {
                        setCebola((cebola -= 1))
                      }
                    }}
                  />
                )}
                <p>{cebola}</p>
                <Add className="mais" onClick={() => setCebola((cebola += 1))} />
              </div>
            </div>
            <hr />

            <div className="opcao__item">
              <div className="opcao__nome">
                <h4 className="opcao__title">{produto[0].ingredients[0].itens[2].nm_item}</h4>
                <p className="opcao__preco">{`+ R$${produto[0].ingredients[0].itens[2].vl_item}`}</p>
              </div>
              <div className="opcao__contador">
                {cheddar === 0 ? (
                  <SubtractGray className="menos" />
                ) : (
                  <Subtract
                    className="menos"
                    onClick={() => {
                      if (cheddar > 0) {
                        setCheddar((cheddar -= 1))
                      }
                    }}
                  />
                )}
                <p>{cheddar}</p>
                <Add className="mais" onClick={() => setCheddar((cheddar += 1))} />
              </div>
            </div>
            <hr />

            <div className="opcao__item">
              <div className="opcao__nome">
                <h4 className="opcao__title">{produto[0].ingredients[0].itens[3].nm_item}</h4>
                <p className="opcao__preco">{`+ R$${produto[0].ingredients[0].itens[3].vl_item}`}</p>
              </div>
              <div className="opcao__contador">
                {picanha === 0 ? (
                  <SubtractGray className="menos" />
                ) : (
                  <Subtract
                    className="menos"
                    onClick={() => {
                      if (picanha > 0) {
                        setPicanha((picanha -= 1))
                      }
                    }}
                  />
                )}
                <p>{picanha}</p>
                <Add className="mais" onClick={() => setPicanha((picanha += 1))} />
              </div>
            </div>
            <hr className="gap" />

            <div className="opcao__info">
              <p className="opcao__title">Precisa de Talher?</p>
            </div>

            <div className="opcao__radio">
              <div className="radio__button">
                <label htmlFor="sim">Sim</label>
                <input type="radio" name="sim" id="sim" />
              </div>
              <div className="radio__button">
                <label htmlFor="nao">Não</label>
                <input type="radio" name="nao" id="nao" />
              </div>
            </div>

            <div className="opcao__adicionar">
              <div className="opcao__contador talher">
                {talher === 0 ? (
                  <SubtractGray className="menos" />
                ) : (
                  <Subtract
                    className="menos"
                    onClick={() => {
                      if (talher > 0) {
                        setTalher((talher -= 1))
                      }
                    }}
                  />
                )}
                <p>{talher}</p>
                <Add className="mais" onClick={() => setTalher((talher += 1))} />
              </div>

              <Tippy
                placement="bottom"
                trigger="click"
                theme={"light-border"}
                content={
                  <>
                    <h5 className="tooltip__title">Adicionado com Sucesso</h5>
                    <p className="tooltip__product">{produto[0].nm_product}</p>
                    <p className="tooltip__items">Ingredientes:</p>
                    <ul>
                      <li className="tooltip__item">{cebola} Cebola Crispy</li>
                      <li className="tooltip__item">{queijo} Queijo Cheddar</li>
                      <li className="tooltip__item">{cheddar} Molho Cheddar</li>
                      <li className="tooltip__item">{picanha} Molho de Picanha</li>
                    </ul>
                  </>
                }
              >
                <button className="adicionar" onClick={adicionarItem}>
                  Adicionar
                </button>
              </Tippy>
            </div>
          </section>
        </div>
      )}
    </>
  )
}

export default Produto
