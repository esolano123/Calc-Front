import React from 'react'
import { GlobalContext } from '../context/GlobalState';



const Balance = () => {
    const { movimientos } = React.useContext(GlobalContext);

  //obtenber todos los imporrtes de nuestros gastos

    const importes = movimientos.map(movimiento => movimiento.importe);

  //sumar todos los importes
    const total = importes.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
        <h4>Tu Saldo</h4>
        <h1>${total}</h1>
    </>
  )
}

export default Balance;