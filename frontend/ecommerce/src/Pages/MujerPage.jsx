import { CardComponent } from '../components/CardComponent';
import './../styles/MujerPage.css';

export const MujerPage = ({womanProducts}) => {
  console.log(womanProducts.message);
  return (
    <div className="container main-content">
      <div className="text-efect">FOR WOMAN</div>

      <div className="container mt-5 d-flex flex-wrap gap-5 justify-content-center">
      {
          womanProducts.message ? <h1>NO HAY PRODUCTOS</h1>:womanProducts.map((product) => {
            return(<CardComponent key={product._id} title={product.categoria.nombre_producto} description={product.categoria.descripcion_producto} ratingValue={product.categoria.rating} createdByname={product.creado_por.nombre}/>)
          })
        }  
      </div>

    </div>
  );
}