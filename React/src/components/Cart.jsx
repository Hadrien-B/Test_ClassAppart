import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/cart'); 
      setCartItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const removeItemFromCart = async (itemId) => {
    try {
      await axios.delete(`http://localhost:8000/api/cart/${itemId}`); 
      console.log('Article supprimé du panier');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Panier</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <button onClick={() => removeItemFromCart(item.id)}>
            Supprimer du panier
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
