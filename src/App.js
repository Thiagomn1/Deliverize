import Navbar from "./components/Navbar"
import Produto from "./pages/Produto"
import { CarrinhoProvider } from "./context/carrinhoContext"

function App() {
  return (
    <>
      <CarrinhoProvider>
        <Navbar />
        <Produto />
      </CarrinhoProvider>
    </>
  )
}

export default App
