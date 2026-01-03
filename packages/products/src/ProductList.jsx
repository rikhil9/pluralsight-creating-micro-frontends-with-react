import React from "react";
import { Link } from "react-router-dom";
import "./products.css";
const DUMMY_PRODUCTS = [
    { id: "1", title: "laptop", price: 1000 },
    { id: "2", title: "bag", price: 200 },
    { id: "3", title: "Mobile", price: 100 },
];
export default function ProductList() {
  return (
    <div>
        <h2>Product List</h2>
        <ul>
            {DUMMY_PRODUCTS.map((product) => (
                <li key={product.id}><div>{product.title} - ${product.price} <Link to={`${product.id}`}>View detail</Link> 
                
                <button onClick={() => alert(product.id)}>Add to Cart</button>
                </div></li>
            ))}
        </ul>
    </div>
  )
}
