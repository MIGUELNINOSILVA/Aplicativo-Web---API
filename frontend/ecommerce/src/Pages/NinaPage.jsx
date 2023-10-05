import { CardComponent } from "../components/CardComponent";
import './../styles/NinaPage.css'

export const NinaPage = ({productGirl}) => {
  return (
    <div className="container main-content">
      <div className="text-efect">FOR GIRLS</div>

      <div className="container mt-5 d-flex flex-wrap gap-5 justify-content-center">
      {
          productGirl.message ? <h1>NO HAY PRODUCTOS</h1>:productGirl.map((product) => {
            return(<CardComponent key={product._id} title={product.categoria.nombre_producto} description={product.categoria.descripcion_producto} ratingValue={product.categoria.rating} createdByname={product.creado_por.nombre} createdBylastname={product.creado_por.apellido} priceValue={product.categoria.precio_producto} urlImage={product.categoria.imagenURL_producto} />)
          })
        }  
      </div>

    </div>
  );
}