import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { DUMMY_PRODUCTS } from "./ProductList";

export default function ProductDetail({viewedProduct}) {
    const { id } = useParams();
    const product = DUMMY_PRODUCTS.find((product) => product.id === parseInt(id));
    
    useEffect(() => {
        if (viewedProduct) {
            viewedProduct(product);
        }
    }, [product]);
    return (
        <div>
            <h2>Product Detail</h2>
            <p>This is the product detail for product {id}</p>
        </div>
    )
}