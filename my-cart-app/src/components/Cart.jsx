import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../features/cart/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <div className="item-details">
              <img src={item.thumbnail} alt={item.title} className="item-image" />
              <div className="item-info">
                <p><strong>ID:</strong> {item.id}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p><strong>Category:</strong> {item.category}</p>
                <p><strong>Stock:</strong> {item.stock}</p>
                <p><strong>Discount:</strong> {item.discountPercentage}%</p>
              </div>
            </div>
            <div className="item-actions">
              <p>${item.price} x {item.quantity}</p>
              <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="total">
        <h2>Total Quantity: {totalQuantity}</h2>
        <h2>Total Amount: ${totalAmount}</h2>
      </div>
    </div>
  );
};

export default Cart;
