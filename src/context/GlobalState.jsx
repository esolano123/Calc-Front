import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  movimientos: [], 
  loading: true,
  error: null
};

//url de la api
const API_URL = 'https://backendcalc-enb9.onrender.com';

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
    // cargar la lista de gastos al abrir la aplicación
    useEffect(() => {
      getMovimientos();
    }, []);
    //acctions
    async function getMovimientos() {
      try {
            const response = await fetch(`${API_URL}`, {
                method: 'GET',
            });

            const data = await response.json();

            dispatch({
                type: 'GET_MOVIMIENTOS',
                payload: data
            });

        } catch (error) {
            dispatch({
                type: 'MOVIMIENTOS_ERROR',
                payload: error.message
            });
        }
    }
    async function addMovimiento(movimiento) {
        try {
            const response = await fetch(`${API_URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(movimiento)
            });

            const data = await response.json();

            dispatch({
                type: 'ADD_MOVIMIENTO',
                payload: data
            });

        } catch (error) {
            dispatch({
                type: 'MOVIMIENTOS_ERROR',
                payload: error.message
            });
        }
    }

    async function deleteMovimiento(id) {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });

            dispatch({
                type: 'DELETE_MOVIMIENTO',
                payload: id
            });
        }catch (error) {
            dispatch({
                type: 'MOVIMIENTOS_ERROR',
                payload: error.message
            });
        }
    }

    return (<GlobalContext.Provider value={{
        movimientos: state.movimientos,
        loading: state.loading,
        error: state.error,
        addMovimiento,
        deleteMovimiento
    }}>
        {children}
    </GlobalContext.Provider>);
}