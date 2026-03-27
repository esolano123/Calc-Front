import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Movimiento = ({ movimiento }) => {
    const { deleteMovimiento } = useContext(GlobalContext);
    const signo = movimiento.importe < 0 ? '-' : '+';

    return (
        <li className={movimiento.importe < 0 ? 'minus' : 'plus'}>
            {movimiento.descripcion} <span>{signo}${Math.abs(movimiento.importe).toFixed(2)}</span>
            {/* MongoDB usa _id, no id */}
            <button className='delete-btn' onClick={() => deleteMovimiento(movimiento._id)}>x</button>
        </li>
    );
}

export default Movimiento;
