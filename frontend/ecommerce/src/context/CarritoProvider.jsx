import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";

const initialState = [];

const comprasReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "[CARRITO] Agregar Compra":
      return [...state, action.payload];
    
    case "[CARRITO] Aumentar Cantidad Compra":
      return state.map((item) => {
        if (item._id === action.payload) {
          return { ...item, cantidad: item.cantidad + 1 };
        }
        return item;
      });
    
    case "[CARRITO] Disminuir Cantidad Compra":
      return state.map((item) => {
        if (item._id === action.payload && item.cantidad > 0) {
          return { ...item, cantidad: item.cantidad - 1 };
        }
        return item;
      });
    
    case "[CARRITO] Eliminar Compra":
      return state.filter((item) => item._id !== action.payload);
    
    default:
      return state;
  }
};


export const CarritoProvider = ({ children }) => {
  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

  const agregarCompra = (compra) => {
    compra.cantidad = 1;
    const action = {
      type: "[CARRITO] Agregar Compra",
      payload: compra,
    };
    dispatch(action);
  };

  const eliminarCompra = (id) => {
    const action = {
      type: "[CARRITO] Eliminar Compra",
      payload: id,
    };
    dispatch(action);
  };

  const aumentarCantidad = (id) => {
    const action = {
      type: "[CARRITO] Aumentar Cantidad Compra",
      payload: id,
    };
    dispatch(action);
  };
  
  const disminuirCantidad = (id) => {
    const action = {
      type: "[CARRITO] Disminuir Cantidad Compra",
      payload: id,
    };
    dispatch(action);
  };
  
  // Resto de las funciones y el contexto aquí...

  return (
    <CarritoContext.Provider
      value={{
        listaCompras,
        agregarCompra,
        aumentarCantidad,
        disminuirCantidad,
        eliminarCompra,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
