import React, { useState, useEffect } from 'react';
import './ProductList.css'
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/products'); 
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = async (productId) => {
    try {
      await axios.post('http://localhost:8000/api/cart', { productId }); 
      console.log('Produit ajouté au panier');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Liste des produits</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button onClick={() => addToCart(product.id)}>Ajouter au panier</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
