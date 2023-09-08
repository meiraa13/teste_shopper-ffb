import "./globalStyles.scss"
import Header  from './components/Header'
import Form  from './components/Form'
import Products from "./components/Products"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify"

function App() {
  
  

  return (
    <>
    <Header />
    <main className="container">
      <Form />
      <Products />
    </main>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light" 
    />

    </>

  )
}

export default App
