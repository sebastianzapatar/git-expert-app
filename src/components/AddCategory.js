import React,{useState} from 'react';

export const AddCategory=({setCategories})=>{
    const [mensaje, setMensaje] = useState('Hola mundo')
    const cambiar=(e)=>{
        console.log(e.target.value);
        setMensaje(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();//Para evitar que se mande el archivo
        if(mensaje.trim().length>2){
            setCategories(cats=>[mensaje,...cats])
        }
        
    }
    return(
        <>
        <h2>Agregar categoria</h2>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={mensaje}
            onChange={cambiar}
            />
        </form>
        
        </>
    )
}
