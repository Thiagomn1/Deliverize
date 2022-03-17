import { createContext, useState } from "react"

const CarrinhoContext = createContext()

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([])
  const [ativo, setAtivo] = useState(false)

  const adicionarItems = (produto, queijo, cheddar, cebola, picanha, talher) => {
    let novoCarrinho = {
      produto: produto,
      queijo: queijo,
      cheddar: cheddar,
      cebola: cebola,
      picanha: picanha,
      talher: talher,
    }
    setCarrinho(prevState => [...prevState, novoCarrinho])
    setAtivo(true)
  }

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho: carrinho,
        ativo: ativo,
        adicionarItems,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  )
}
export default CarrinhoContext
