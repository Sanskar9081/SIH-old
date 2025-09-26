// src/pages/AdminDashboard.js
const AdminDashboard = ({ onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="flex justify-between mb-8">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button onClick={onLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </header>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Manage Artisans</h2>
        {/* Mock list */}
        <p>List of artisans...</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Manage Users</h2>
        <p>List of users...</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Approvals</h2>
        <p>Pending approvals...</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Revenue Reports</h2>
        <p>Generate reports...</p>
      </section>
    </div>
  );
};

export default AdminDashboard;