import React, { useState } from "react";

function ShoppingCart() {
    const [productName, setProductName] = useState("Laptop");
    const [price, setPrice] = useState(50000);
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const resetCart = () => {
        setQuantity(1);
    };

    return (
        <div>
            <h2>10.Shopping Cart</h2>

            <p>Product: {productName}</p>
            <p>Price: ₹{price}</p>
            <p>Quantity: {quantity}</p>

            <button onClick={decreaseQuantity}>-</button>
            &nbsp;

            <button onClick={increaseQuantity}>+</button>
            &nbsp;

            <button onClick={resetCart}>Reset</button>

            <h3>Total: ₹{price * quantity}</h3>
        </div>
    );
}

export default ShoppingCart;