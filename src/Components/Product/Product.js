import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import Rating from 'react-rating';
const Product = (props) => {
    console.log(props)
    const { name, img, price, seller, stock, star } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <img src={img} alt="" />
            <div style={{
                marginLeft: '15px',
            }}>
                <h4 className="product-name">{name}</h4>
                <p><small> by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <Rating
                    className="icon-color"
                    initialRating={star}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    readonly
                ></Rating>
                <br />
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    style={{
                        padding: "5px 35px",
                        fontSize: "18px",
                        backgroundColor: "goldenrod",
                        width: "250px",
                        marginBottom: "15px",
                        border: "1px solid gray",
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}>{element}add to cart</button>
            </div>

        </div>
    );
};

export default Product;