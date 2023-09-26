// Products.jsx

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const data = await fetch("https://dummyjson.com/products?limit=100");
        const json = await data.json();
        setProducts(json["products"]);
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div style={{textAlign: "center", margin: "20px"}}>
            <h1>Products</h1>
            <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
                {products.length > 0 && products.map((product) => (
                    <ProductCard
                        key={product.id}
                        imglink={product.thumbnail}
                        title={product.title}
                        price={product.price}
                        rating={product.rating}
                    />
                ))}
            </div>
        </div>
    )
}

export default Products;
