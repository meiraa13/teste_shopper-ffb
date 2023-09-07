import { api } from "../../services/api"
import "./styles.scss"
import { useState, useEffect} from "react"

interface IProduct{
    code:number,
    name:string,
    cost_price:string,
    sales_price:string
}

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
                <ul>
                    {products.map((product)=>(
                        <li key={product.code}>
                            <p>Nome: {product.name}</p>
                            <p>Preço: {product.sales_price}</p>
                        </li>
                    ))}
                </ul> 
                : <h2>Não há produtos no banco de dados</h2>
            }
  
        </section>
    )
}

export default Products