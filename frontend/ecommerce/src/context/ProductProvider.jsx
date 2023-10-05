import { useEffect, useState } from "react";
import { ProductsContext } from "./ProductContext";

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productMan, setProductMan] = useState([]);
  const [productWoman, setProductWoman] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProductsMan = async (tokenUser) => {
    try {
      const request = await fetch("http://localhost:4000/api/products/men-products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": tokenUser,
        },
      });
      const response = await request.json();
      // Al recibir los datos, actualiza el estado local
      setProductMan(response); // Esto asume que `response` es un array de productos
    } catch (error) {
      console.error(error);
    }
  };
  const getProductsWoman = async (tokenUser) => {
    try {
      const request = await fetch("http://localhost:4000/api/products/woman-products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": tokenUser,
        },
      });
      const response = await request.json();
      // Al recibir los datos, actualiza el estado local
      setProductWoman(response); // Esto asume que `response` es un array de productos
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductsMan();
    getProductsWoman();
  }, []);

  // Define el contexto con los datos que necesitas exponer
  const contextValue = {
    productMan,
    productWoman,
    getProductsMan,
    getProductsWoman,
  };

  return (
    <ProductsContext.Provider value={contextValue }>
      {children}
    </ProductsContext.Provider>
  );
};
