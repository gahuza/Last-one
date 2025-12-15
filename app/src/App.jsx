import React from "react";

function App() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white hidden md:block">
        <div className="p-6 text-2xl font-bold border-b border-blue-700">
          Prime Insurance
        </div>
        <nav className="p-4 space-y-4">
          <a href="#" className="block hover:bg-blue-700 p-2 rounded">Dashboard</a>
          <a href="#" className="block hover:bg-blue-700 p-2 rounded">Policies</a>
          <a href="#" className="block hover:bg-blue-700 p-2 rounded">Clients</a>
          <a href="#" className="block hover:bg-blue-700 p-2 rounded">Claims</a>
          <a href="#" className="block hover:bg-blue-700 p-2 rounded">Reports</a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Admin</span>
            <img
              src="https://i.pravatar.cc/40"
              alt="Profile"
              className="rounded-full"
            />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 space-y-10">
          {/* Welcome */}
          <h2 className="text-2xl font-bold">
            Welcome to Prime Insurance Dashboard
          </h2>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-gray-500">Total Policies</h3>
              <p className="text-3xl font-bold">1,250</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-gray-500">Clients</h3>
              <p className="text-3xl font-bold">860</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-gray-500">Active Claims</h3>
              <p className="text-3xl font-bold">42</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-gray-500">Monthly Revenue</h3>
              <p className="text-3xl font-bold">$45,200</p>
            </div>
          </div>

          {/* About Us Section */}
          <section className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-600 leading-relaxed">
              Prime Insurance is a trusted insurance provider committed to
              protecting individuals, families, and businesses. We deliver
              reliable coverage solutions with transparency, integrity, and
              customer-first service.
            </p>
              <p className="text-gray-600 leading-relaxed">
              Prime Insurance is a trusted insurance provider committed to
              protecting individuals, families, and businesses. We deliver
              reliable coverage solutions with transparency, integrity, and
              customer-first service.
            </p>
              <p className="text-gray-600 leading-relaxed">
              Prime Insurance is a trusted insurance provider committed to
              protecting individuals, families, and businesses. We deliver
              reliable coverage solutions with transparency, integrity, and
              customer-first service.
            </p>
              <p className="text-gray-600 leading-relaxed">
              Prime Insurance is a trusted insurance provider committed to
              protecting individuals, families, and businesses. We deliver
              reliable coverage solutions with transparency, integrity, and
              customer-first service.
            </p>
          </section>

          {/* Experience Section */}
          <section className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-6">Our Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-700">10+</p>
                <p className="text-gray-600">Years in Insurance</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-700">5,000+</p>
                <p className="text-gray-600">Satisfied Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-700">98%</p>
                <p className="text-gray-600">Claim Success Rate</p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-blue-900 text-white text-center p-4">
          <p>
            © {new Date().getFullYear()} Prime Insurance Company. All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
