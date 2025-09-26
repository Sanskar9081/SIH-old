// src/pages/Checkout.js
const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form className="bg-white p-4 rounded shadow">
        <input type="text" placeholder="Address" className="w-full mb-4 p-2 border rounded" />
        <select className="w-full mb-4 p-2 border rounded">
          <option>UPI</option>
          <option>Card</option>
          <option>COD</option>
        </select>
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">Pay Now</button>
      </form>
    </div>
  );
};

export default Checkout;