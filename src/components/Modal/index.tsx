import { IProduct } from "../Form"
import "./styles.scss"



function Modal({modalContent, setModalContent}:any){

    console.log(modalContent)
    

     return(

        <div >
            <div className="modal-background">
                <div className="modal-container">
                    <div className="modal-title">
                        <h3>Validação de produto</h3>
                        <button onClick={()=>setModalContent(null)} >X</button>
                    </div>
                    <div className="div-content" >
                        <ul className="modal-ul">
                            {
                                modalContent.map((product:IProduct)=>(
                                    <li key={product.code}>
                                        <div>
                                            <h4>Código</h4>
                                            <p>{product.code}</p>
                                        </div>
                                        <div>
                                            <h4>Produto</h4>
                                            <p>{product.name}</p>
                                        </div>
                                        <div>
                                            <h4>Preço Atual</h4>
                                            <p>{product.sales_price}</p>
                                        </div>
                                        <div>
                                            <h4>Preço Novo</h4>
                                            <p>{product.new_price}</p>
                                        </div>
                                        <div>
                                            <h4>Validação</h4>
                                            <p>{product.errorMessage? product.errorMessage : 'OK'}</p>
                                        </div>
                                      
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
                       
                           
}

export default Modal