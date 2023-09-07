import "./globalStyles.scss"
import Header  from './components/Header'
import Form  from './components/Form'
import Products from "./components/Products"

function App() {
  
  

  return (
    <>
    <Header />
    <main className="container">
      <Form />
      <Products />
    </main>
    </>

  )
}

export default App
