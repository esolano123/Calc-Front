import React from 'react'
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header';
import Balance from './components/Balance';
import AddForm from './components/AddForm';
import MovimientosLista from './components/MovimientosLista';
import IngresosEgresos from './components/IngresosEgresos';

export const App = () => {
  return (
    <GlobalProvider>
      <Header />
        <div className='container'>
          <Balance />
          <IngresosEgresos />
          <MovimientosLista />
          <AddForm />
        </div>
    </GlobalProvider>
  )
}

export default App;