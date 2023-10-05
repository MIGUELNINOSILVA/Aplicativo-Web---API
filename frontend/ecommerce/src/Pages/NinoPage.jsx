import { useContext } from "react";
import { CardComponent } from "../components/CardComponent";
import { CarritoContext } from "../context/CarritoContext";
import './../styles/NinoPage.css';

export const NinoPage = ({productBoy}) => {
  const {
    listaCompras,
    agregarCompra,
    aumentarCantidad,
    disminuirCantidad,
    eliminarCompra,
  } = useContext(CarritoContext);

  const handleAgregar = (compra) => {
    agregarCompra(compra);
  };
  const handleQuitar = (id) => {
    eliminarCompra(id)
  };
  const handleAumentar = (id) => {};
  const handleDisminuir = (id) => {};

  return (
    <div className="container main-content">
      <div className="text-efect">FOR BOYS</div>

      <div className="container mt-5 d-flex flex-wrap gap-5 justify-content-center">
      {
          productBoy.message ? <h1>NO HAY PRODUCTOS</h1>:productBoy.map((product) => {
            return(<CardComponent key={product._id} title={product.categoria.nombre_producto} description={product.categoria.descripcion_producto} ratingValue={product.categoria.rating} createdByname={product.creado_por.nombre} createdBylastname={product.creado_por.apellido} priceValue={product.categoria.precio_producto} urlImage={product.categoria.imagenURL_producto} handleAgregar={()=>handleAgregar(product)}
            handleQuitar={()=>handleQuitar(product._id)} />)
          })
        }  
      </div>

    </div>
  );
}