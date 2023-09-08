import { ChangeEvent, FormEvent, useState } from "react"
import { api } from "../../services/api"
import "./styles.scss"
import { toast } from "react-toastify"
import Modal from "../Modal"

export interface IProduct{
  code:number,
  name:string,
  cost_price:string,
  sales_price:string,
  new_price?:string,
  pack?:boolean,
  item_id?:Array<number>,
  item_qty?:number,
  has_pack?:boolean,
  pack_id?:number,
  errorMessage?:string
}

function Form(){

    const [ file, setFile] = useState<File | null | undefined>(null)
    const [disabledButton, setDisabledButton] = useState<boolean>(true)
    const [modalContent, setModalContent] = useState<null | IProduct[]>(null)
  
    function handleChange(e: ChangeEvent<HTMLInputElement>){
        setFile(e.target.files?.[0])
    
    }
  
    async function handleFileValidation(e:FormEvent){
      e.preventDefault()
  
  
      if(file){
        try {
          const newData = new FormData()
          newData.append("file", file)
    
          const response = await api.postForm("/products", newData)
          setModalContent(response.data)
          toast.success("Dados ok para atualização")
          setDisabledButton(false)

            
        }catch(err:any){
          if(err.response.data.message){
            toast.error(err.response.data.message)
          }else{
            toast.error("Erro na validação")
            setModalContent(err.response.data)

          }
          console.log(err.response)
        }
      }
  
    }

  
    async function handleUpdateData(){
      try {
        const newData = new FormData()
        newData.append("file", file!)
  
        const response =await api.patchForm("products", newData)
        
        
      } catch (err) {
        toast.error("Não foi possível atualizar")
        console.log(err)
      }finally {
        toast.success("Produto(s) atualizado(s)!")
        setTimeout(()=>{
          window.location.reload()
          
        },3000)
        setFile(null)
        setDisabledButton(true)
      }
    }


    return (
      <>
        { modalContent && <Modal modalContent={modalContent} setModalContent={setModalContent} />}
        <form onSubmit={handleFileValidation} encType='multipart/form-data'>
        <input type='file' name='file' onChange={handleChange} />
        <button className='validate-button' type='submit'>Validar</button>
        <button className={disabledButton? "update-button disabled":"update-button"} 
            onClick={handleUpdateData} 
            disabled={disabledButton} 
            type='button'
            >Atualizar
        </button>
       </form>
      
      </>
    )
}

export default Form 