// src/pages/ManageStock.js
const ManageStock = () => {
  // Mock stock
  const stock = [
    { id: 1, name: 'Handmade Pottery', quantity: 10 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Stock</h1>
      {stock.map(item => (
        <div key={item.id} className="bg-white p-4 rounded shadow mb-4 flex justify-between">
          <h3>{item.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <button className="text-blue-500">Edit</button>
        </div>
      ))}
    </div>
  );
};

export default ManageStock;