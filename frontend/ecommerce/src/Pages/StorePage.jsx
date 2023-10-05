import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { CarritoContext } from "../context/CarritoContext";
import { useContext } from "react";

export const StorePage = () => {
  const {
    listaCompras,
    agregarCompra,
    aumentarCantidad,
    disminuirCantidad,
    eliminarCompra,
  } = useContext(CarritoContext);

  const calcularTotal = () => {
    return listaCompras
      .reduce(
        (total, item) => total + item.categoria.precio_producto * item.cantidad,
        0
      )
      .toFixed(2);
  };

  const handleImpresion = () => {
    print();
  };

  listaCompras.forEach((element) => {
    console.log(element);
  });
  return (
    <div className="container main-content">
      <h1>Store</h1>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Nombre Producto</TableCell>
              <TableCell align="left">Precio</TableCell>
              <TableCell align="left">Cantidad</TableCell>
              <TableCell align="left">Opcion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listaCompras.map((item) => (
              <TableRow key={item._id}>
                <TableCell align="left">
                  {item.categoria.nombre_producto}
                </TableCell>
                <TableCell align="left">
                  ${item.categoria.precio_producto}
                </TableCell>
                <TableCell align="left">{item.cantidad}</TableCell>
                <TableCell align="left" className="d-flex gap-2">
                  <Button
                    variant="contained"
                    
                    onClick={() => aumentarCantidad(item._id)} // Pasar el id del producto
                  >
                    Agregar
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => disminuirCantidad(item._id)}
                  >
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableRow>
            <TableCell align="left">Total</TableCell>
            <TableCell align="left">${calcularTotal()}</TableCell>
            <Button
                    variant="contained"
                    color="success"
                    onClick={() => handleImpresion()}
                  >
                    Comprar
                  </Button>
          </TableRow>
        </Table>
      </TableContainer>
    </div>
  );
};
