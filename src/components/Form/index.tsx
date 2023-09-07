import { ChangeEvent, FormEvent, useState } from 'react'
import { api } from "../../services/api"
import "./styles.scss"


function Form(){

    const [ file, setFile] = useState<File | null | undefined>(null)
    const [disabledButton, setDisabledButton] = useState(true)
  
    function handleChange(e: ChangeEvent<HTMLInputElement>){
        setFile(e.target.files?.[0])
    
    }
  
    async function handleFileUpload(e:FormEvent){
      e.preventDefault()
  
  
      if(file){
        try {
          const newData = new FormData()
          newData.append("file", file)
    
          const response = await api.postForm('/products', newData)
          if(response.status == 200){
            setDisabledButton(false)
          }
        
        }catch(err){
          console.log(err)
        }
      }
  
    }
  
    async function handleUpdateData(){
      try {
        const newData = new FormData()
        newData.append("file", file!)
  
        const response =await api.patchForm('products', newData)
        console.log(response)
        
      } catch (err) {
        console.log(err)
      }finally {
        setFile(null)
        setDisabledButton(true)
      }
    }


    return (
        <form onSubmit={handleFileUpload} encType='multipart/form-data'>
        <input type='file' name='file' onChange={handleChange} />
        <button className='validate-button' type='submit'>Validar</button>
        <button className={disabledButton? "update-button disabled":"update-button"} 
            onClick={handleUpdateData} 
            disabled={disabledButton} 
            type='button'
            >Atualizar
        </button>
       </form>
    )
}

export default Form 