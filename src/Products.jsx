// Products.jsx

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

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
                {products.length > 0 && products.slice(page * 10 - 10, page * 10).map((product) => (
                    <ProductCard
                        key={product.id}
                        imglink={product.thumbnail}
                        title={product.title}
                        price={product.price}
                        rating={product.rating}
                    />
                ))}
            </div>


            <div>
                {
                    products.length > 0 && 

                    <div style = {{display : "flex", justifyContent : "center"}}>
                        { page !== 1 && <div onClick = {() => setPage(page - 1)} style = {{cursor : "pointer", border : "1px solid black", padding : "25px", fontSize : "40px"}}>
                            ◀️
                        </div> }

                        {
                            [...Array(products.length /10)].map((_, index) => 
                                <div onClick = {() => setPage(index + 1)} style = {{backgroundColor : (page === index + 1 ) ? "lightgray" : "white", cursor : "pointer", border : "1px solid black", padding : "25px", fontSize : "40px"}}>
                                    {index}
                                </div>
                            )
                        }

                        { page !== products.length / 10 && <div onClick = {() => setPage(page + 1)} style = {{cursor : "pointer", border : "1px solid black", padding : "25px", fontSize : "40px"}}>
                            ▶️
                        </div> }
                    </div>


                }
            </div>

        </div>
    )
}

export default Products;
