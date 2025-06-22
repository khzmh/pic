// src/components/PackageCard.js

import React from 'react';

// Ini adalah komponen 'kartu' yang bisa kita pakai ulang untuk setiap paket
const PackageCard = ({ packageInfo }) => {
  // Nomor WhatsApp Anda (ganti 0 dengan 62)
  const whatsappNumber = "62895700503193"; // 
  
  // Pesan otomatis yang akan muncul di WhatsApp
  const message = `Halo Hafi portrait, saya tertarik dengan paket "${packageInfo.nama}" seharga IDR ${packageInfo.harga}.`;
  
  // Membuat URL WhatsApp dengan pesan yang sudah di-encode
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    // Styling dasar menggunakan Tailwind CSS untuk tampilan yang bersih
    <div className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col">
      <h3 className="text-2xl font-bold mb-2 text-gray-800">{packageInfo.nama}</h3>
      <p className="text-xl font-semibold text-gray-900 mb-4">IDR {packageInfo.harga}</p>
      <ul className="list-disc list-inside mb-6 text-gray-600 flex-grow">
        {packageInfo.fitur.map((item, index) => (
          <li key={index} className="mb-1">{item}</li>
        ))}
      </ul>
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full text-center bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 mt-auto"
      >
        Pesan via WhatsApp
      </a>
    </div>
  );
};

export default PackageCard;