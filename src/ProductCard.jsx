// ProductCard.jsx

const ProductCard = ({imglink, title, price, rating}) => {
    return (
        <div style={{width: "300px", height : "420px", border: "2px solid black", padding: "10px", margin: "10px"}}>
            <img src={imglink} style={{width: "100%", height : "300px", objectFit : "cover"}} alt={title} />
            <h2 style={{margin: "10px 0"}}>{title}</h2>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h3>Price: {price}</h3>
                <h3>Rating: {rating}</h3>
            </div>
        </div>
    )
}

export default ProductCard;
