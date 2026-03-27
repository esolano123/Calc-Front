import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddForm = () => {

    //definimos los estados locales para los imputs
    const [descripcion, setDescripcion] = useState('');
    const [importe, setImporte] = useState(0);

    //del contexto global, obtenemos la función para agregar un nuevo movimiento
    const { addMovimiento } = useContext(GlobalContext);

    //función que se ejecuta al enviar el formulario
    const onSubmit = (e) => {
        e.preventDefault();

        const nuevoMovimiento = {
            descripcion,
            importe: +importe
        }
        addMovimiento(nuevoMovimiento);
        setDescripcion('');
        setImporte(0);
    }
  return (
    <>
        <h3>Agregar nuevo movimiento</h3>
        <form onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor='descripcion'>Descripción</label>
                <input 
                    type='text' 
                    id='descripcion'
                    value={descripcion} 
                    onChange={(e) => setDescripcion(e.target.value)} 
                    placeholder='Ingrese descripción...' />
            </div>
            <div className='form-control'>
                <label htmlFor='importe'>Importe</label>
                <input 
                    type='number' 
                    id='importe'
                    value={importe} 
                    onChange={(e) => setImporte(parseFloat(e.target.value) || 0)} 
                    placeholder='Ingrese importe...' />
            </div>
            <button className='btn'>Agregar movimiento</button>
        </form>
    </>
  )
}

export default AddForm;