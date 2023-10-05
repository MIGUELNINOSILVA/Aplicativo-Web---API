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
export const getProductsMen = async (req, res) => {
  try {
    const products = await Product.aggregate([
      {
        $lookup: {
          from: "categorias",
          localField: "categoria",
          foreignField: "_id",
          as: "categoria",
        },
      },
      {
        $lookup: {
          from: "usuarios",
          localField: "creado_por",
          foreignField: "_id",
          as: "creado_por",
        },
      },
      {
        $unwind: "$categoria",
      },
      {
        $unwind: "$creado_por",
      },
      {
        $match: {
          "categoria.nombre": "Hombre",
        },
      },
      {
        $addFields: {
          categoria: {
            $mergeObjects: ["$categoria", {
              nombre_producto: "$nombre",
              descripcion_producto: "$descripcion",
              precio_producto: "$precio",
              imagenURL_producto: "$imagenURL",
              stock_producto: "$stock",
              rating: "$rating"
            }],
          },
        },
      },
      {
        $addFields: {
          creado_por: {
            $mergeObjects: ["$creado_por", {
              nombre: "$creado_por.nombre",
              apellido: "$creado_por.apellido",
            }],
          },
        }
      },
      {
        $project: {
          "categoria._id": 1,
          "categoria.nombre": 1,
          "categoria.descripcion": 1,
          "categoria.imagenURL": 1,
          "categoria.nombre_producto": 1,
          "categoria.descripcion_producto": 1,
          "categoria.precio_producto": 1,
          "categoria.imagenURL_producto": 1,
          "categoria.stock_producto": 1,
          "categoria.creado_por_producto": 1,
          "categoria.rating": 1,
          "creado_por.nombre": 1, 
          "creado_por.apellido": 1, 
        },
      },
    ]);
    if (products.length === 0) {
      return res.status(404).json({ message: "Products not found" });
    }
    console.log(products);
    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong retrieving the products",
    });
  }
};
export const getProductsWoman = async (req, res) => {
  try {
    const products = await Product.aggregate([
      {
        $lookup: {
          from: "categorias",
          localField: "categoria",
          foreignField: "_id",
          as: "categoria",
        },
      },
      {
        $lookup: {
          from: "usuarios",
          localField: "creado_por",
          foreignField: "_id",
          as: "creado_por",
        },
      },
      {
        $unwind: "$categoria",
      },
      {
        $unwind: "$creado_por",
      },
      {
        $match: {
          "categoria.nombre": "Mujer",
        },
      },
      {
        $addFields: {
          categoria: {
            $mergeObjects: [
              "$categoria",
              {
                nombre_producto: "$nombre",
                descripcion_producto: "$descripcion",
                precio_producto: "$precio",
                imagenURL_producto: "$imagenURL",
                stock_producto: "$stock",
                rating: "$rating",
              },
            ],
          },
        },
      },
      {
        $addFields: {
          creado_por: {
            $mergeObjects: [
              "$creado_por",
              {
                nombre: "$creado_por.nombre",
                apellido: "$creado_por.apellido",
              },
            ],
          },
        },
      },
      {
        $project: {
          "categoria._id": 1,
          "categoria.nombre": 1,
          "categoria.descripcion": 1,
          "categoria.imagenURL": 1,
          "categoria.nombre_producto": 1,
          "categoria.descripcion_producto": 1,
          "categoria.precio_producto": 1,
          "categoria.imagenURL_producto": 1,
          "categoria.stock_producto": 1,
          "categoria.creado_por_producto": 1,
          "categoria.rating": 1,
          "creado_por.nombre": 1,
          "creado_por.apellido": 1,
        },
      },
    ]);
    if (products.length === 0) {
      return res.status(404).json({ message: "Products not found" });
    }
    console.log(products);
    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong retrieving the products",
    });
  }
};


export const getProductsChildBoy = async(req, res)=>{
  try {
    const products = await Product.aggregate([
      {
        $lookup: {
          from: "categorias",
          localField: "categoria",
          foreignField: "_id",
          as: "categoria",
        },  
      },
      {
        $lookup:{
          from: "usuarios",
          localField: "creado_por",
          foreignField: "_id",
          as: "creado_por"
        }
      },
      { 
        $unwind: "$categoria",
      },
      {
        $unwind: "$creado_por",
      },
      {
        $match: {
          "categoria.nombre": "Niño",
        },
      },{
        $addFields: {
          categoria: {
            $mergeObjects: ["$categoria", {
              nombre_producto: "$nombre",
              descripcion_producto: "$descripcion",
              precio_producto: "$precio",
              imagenURL_producto: "$imagenURL",
              stock_producto: "$stock",
              creado_por_producto: "$creado_por",
              rating: "$rating",
            }],
          },
        },
      },
      {
        $addFields: {
          creado_por: {
            $mergeObjects: ["$creado_por", {
              nombre: "$creado_por.nombre",
            }],
          },
        },
      },
      {
        $project: {
          "categoria._id": 1,
          "categoria.nombre": 1,
          "categoria.descripcion": 1,
          "categoria.imagenURL": 1,
          "categoria.creado_por": 1,
          "categoria.nombre_producto": 1,
          "categoria.descripcion_producto": 1,
          "categoria.precio_producto": 1,
          "categoria.imagenURL_producto": 1,
          "categoria.stock_producto": 1,
          "categoria.creado_por_producto": 1,
          "categoria.rating": 1
        },
      }
    ]);
    if (products.length === 0) {
      return res.status(404).json({ message: "Products not found" });
    }
    console.log(products);
    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong retrieving the products",
    });
  }
}
