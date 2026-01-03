import { useParams } from "react-router-dom";

export default function ProductDetail() {
    const { id } = useParams();
    return (
        <div>
            <h2>Product Detail</h2>
            <p>This is the product detail for product {id}</p>
        </div>
    )
}