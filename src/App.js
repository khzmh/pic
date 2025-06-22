// src/App.js

import React from 'react';
import { packages } from './data/packages'; // Impor data paket
import PackageCard from './components/PackageCard'; // Impor komponen kartu

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Hafi portrait Pricelist</h1> 
        <p className="text-lg text-gray-600">Wedding, Prewedding, Engagement, & All Moments</p>
      </header>

      {/* Grid untuk menampilkan semua kartu paket */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <PackageCard key={index} packageInfo={pkg} />
        ))}
      </div>

      <footer className="text-center mt-12">
        <p className="text-gray-700">Contact Person:</p>
        <p className="font-semibold">@Hafiportrait / 0895-7005-03193</p> 
      </footer>
    </div>
  );
}

export default App;