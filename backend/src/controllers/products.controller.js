import Product from "./../models/Producto.js";

export const createProduct = async (req, res) => {
  try {
    const {
      nombre,
      descripcion,
      precio,
      imagenURL,
      categoria,
      stock,
      creado_por,
    } = req.body;
    const newProduct = new Product({
      nombre,
      descripcion,
      precio,
      imagenURL,
      categoria,
      stock,
      creado_por,
    });
    const productSaved = await newProduct.save();
    res.status(201).json(productSaved);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong creating the product",
    });
  }
};
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong retrieving the products",
    });
  }
};
export const getProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong retrieving the product",
    });
  }
};
export const updateProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      req.body,
      {
        new: true,
      }
    );
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong updating the product",
    });
  }
};
export const deleteProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    res.json(deletedProduct);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong deleting the product",
    });
  }
};
