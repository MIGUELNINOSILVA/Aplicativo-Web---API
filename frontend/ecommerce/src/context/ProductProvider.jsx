import { useEffect, useState } from "react"
import { ProductsContext } from "./ProductContext"

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProducts = async () => {
      try {
        const requrest = await fetch('http://localhost:4000/api/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWUyNWY4NjQ3ZmFjYTlkOTg3Y2IxOSIsImlhdCI6MTY5NjQ3ODE5MiwiZXhwIjoxNjk2NTY0NTkyfQ.8ra3cn1cxvwktP_I8ZfuBnCeTkvh7zJO_qbivB2ehW0'
          },
        });
        const response = await requrest.json();
        console.log(response);
      } catch (error) {
        console.error(error)
      }
    };

    useEffect(()=>{
      getProducts();
    }, []);

  return (
    <ProductsContext.Provider value ={{products}}>
      {children}
    </ProductsContext.Provider>
  )
}
