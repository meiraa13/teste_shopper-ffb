import { api } from "../../services/api"
import { IProduct } from "../Form"
import "./styles.scss"
import { useState, useEffect} from "react"



function Products(){
    const [products, setProducts] = useState<null | IProduct[]>(null)

    useEffect(()=>{

        async function getProducts(){
            try {
                const response = await api.get('products')
                setProducts(response.data)
                
            } catch (error) {
                console.log(error)
            }
        }
        getProducts()
    
    },[])




    return (
        <section>
            <h1>Produtos Cadastrados</h1>
            {
                products?
                <ul className="products-ul">
                    {products.map((product)=>(
                        <li key={product.code}>
                            <div>
                                <h3>Nome</h3>
                                <p>{product.name}</p>
                            </div>
                            <div>
                                <h3>Preço</h3>
                                <p>R$ {product.sales_price}</p>
                            </div>
                        </li>
                    ))}
                </ul> 
                : <h2>Não há produtos no banco de dados</h2>
            }
  
        </section>
    )
}

export default Products