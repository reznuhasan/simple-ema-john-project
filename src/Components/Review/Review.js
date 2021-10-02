import React from 'react';
import useCard from '../../hooks/useCard';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';


const Review = () => {
    const [products] = useProducts()
    const [cart]=useCard(products)
    return (
        <div>
            <h1>{products.length}</h1>
            <h1>{cart.length}</h1>
            <h1>This is Review Page</h1>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Review;