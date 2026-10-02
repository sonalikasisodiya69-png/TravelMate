import React, { useState } from "react";
 
function ProductQuantity() {
    const [price, setPrice] = useState(100);
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <div>

       <h2>4.Product Quantity Calculator :-</h2>

      <p>Price: ₹{price}</p>

      <button onClick={decreaseQuantity}>-</button>

      <span> Quantity: {quantity} </span>

      <button onClick={increaseQuantity}>+</button>

      <p>Total: ₹{price * quantity}</p>

         </div>
  );
}
    


export default ProductQuantity;
