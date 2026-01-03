import React from "react";
import { Link } from "react-router-dom";
import "./products.css";
import { useCart } from "cart/CartContext";


export const DUMMY_PRODUCTS = [
  { id: 1, name: "Laptop", price: 899 },
  { id: 2, name: "Headphones", price: 199 },
  { id: 3, name: "Smartphone", price: 699 },
  { id: 4, name: "Monitor", price: 349 },
];

export default function ProductList() {
  const { addItem } = useCart();
  return (
    <div>
        <h2>Product List</h2>
        <ul>
            {DUMMY_PRODUCTS.map((product) => (
                <li key={product.id}><div>{product.name} - ${product.price} <Link to={`${product.id}`}>View detail</Link> 
                
                <button onClick={() => addItem(product.name)}>Add to Cart</button>
                </div></li>
            ))}
        </ul>
    </div>
  )
}
