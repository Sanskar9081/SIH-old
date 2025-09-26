// src/pages/Cart.js
const Cart = () => {
  // Mock cart items
  const cartItems = [
    { id: 1, name: 'Handmade Pottery', price: 500, quantity: 1 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.map(item => (
        <div key={item.id} className="bg-white p-4 rounded shadow mb-4 flex justify-between">
          <div>
            <h3>{item.name}</h3>
            <p>₹{item.price} x {item.quantity}</p>
          </div>
          <button className="text-red-500">Remove</button>
        </div>
      ))}
      <p className="font-bold">Total: ₹500</p>
    </div>
  );
};

export default Cart;