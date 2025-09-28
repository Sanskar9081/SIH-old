import { Link } from "react-router-dom";

const cartItems = [
  {
    id: 1,
    name: "Handmade Pottery",
    price: 500,
    quantity: 1,
    image: "", // Add image path or URL if available
  },
];

const Cart = () => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-2 md:px-16">
      <div className="mb-8 flex items-center gap-3">
        <span className="text-3xl">🛒</span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Your Cart</h1>
      </div>
      <div className="max-w-4xl mx-auto space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-200 rounded-lg flex items-center justify-center overflow-hidden">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-full rounded-lg"
                />
              ) : (
                <span className="text-4xl text-indigo-300">🪴</span>
              )}
            </div>
            <div className="flex-1 w-full md:w-auto">
              <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
              <p className="text-gray-500 mt-1">
                <span className="font-semibold text-purple-700">₹{item.price}</span> x{" "}
                <span className="font-semibold">{item.quantity}</span>
              </p>
            </div>
            <div className="flex flex-col items-end w-full md:w-auto">
              <button className="text-red-500 hover:underline transition mb-2">Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-8 bg-white rounded-xl shadow flex flex-col md:flex-row md:items-center justify-between px-8 py-6">
        <div className="font-semibold text-lg">
          Total: <span className="text-2xl text-indigo-600 font-bold">₹{total}</span>
        </div>
        <Link
          to="/checkout"
          className="mt-4 md:mt-0 px-8 py-3 bg-gradient-to-r from-orange-400 via-pink-500 to-indigo-500 text-white text-lg font-bold rounded-lg shadow transition-transform hover:scale-105"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
