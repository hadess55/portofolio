import React from "react";
import VScode from "./images/vscode.png";
import Git from "./images/git.png";
import Photoshop from "./images/photoshop.png";
import Figma from "./images/figma.png";
import Premiere from "./images/premiere.png";

const Service = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-black to-gray-900 bg-opacity-60 text-white">
      <div className="text-center py-12">
        <h1 className="text-5xl font-bold text-purple-200">SERVICES</h1>
      </div>

      <div className="flex justify-center space-x-4 pb-8">
        <button className="bg-purple-700 px-6 py-3 rounded-full text-white text-sm flex items-center space-x-2 hover:bg-purple-800 transition">
          <span>✔</span>
          <span>Design System</span>
        </button>
        <button className="bg-purple-700 px-6 py-3 rounded-full text-white text-sm flex items-center space-x-2 hover:bg-purple-800 transition">
          <span>✔</span>
          <span>Product</span>
        </button>
        <button className="bg-purple-700 px-6 py-3 rounded-full text-white text-sm flex items-center space-x-2 hover:bg-purple-800 transition">
          <span>✔</span>
          <span>Website</span>
        </button>
        <button className="bg-purple-700 px-6 py-3 rounded-full text-white text-sm flex items-center space-x-2 hover:bg-purple-800 transition">
          <span>✔</span>
          <span>Branding</span>
        </button>
        <button className="bg-purple-700 px-6 py-3 rounded-full text-white text-sm flex items-center space-x-2 hover:bg-purple-800 transition">
          <span>✔</span>
          <span>Logo Design</span>
        </button>
      </div>

      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold">
          Product, Website atau Brand Design, Saya Siap !
        </h2>
        <p className="text-gray-400">
          Mari membuat desain atau website bersama saya di jamin kecewa!
        </p>
      </div>

      <div className="flex flex-col space-y-4 items-center">
        <div className="bg-gray-800 bg-opacity-70 rounded-xl shadow-lg p-6 w-3/4 max-w-3xl flex items-center space-x-4 hover:bg-gray-700 transition">
          <div className="text-4xl">🅰️</div>
          <div>
            <h3 className="text-xl font-semibold">Design System Expert</h3>
            <p className="text-gray-400">Pembuatan Sistem Perusak Otak</p>
          </div>
        </div>

        {/* Service Card 2 */}
        <div className="bg-gray-800 bg-opacity-70 rounded-xl shadow-lg p-6 w-3/4 max-w-3xl flex items-center space-x-4 hover:bg-gray-700 transition">
          <div className="text-4xl">🎨</div>
          <div>
            <h3 className="text-xl font-semibold">UX & UI Design</h3>
            <p className="text-gray-400">
              Pembuatan UI & UX di Luar Pemikiran BMKG
            </p>
          </div>
        </div>

        <div className="bg-gray-800 bg-opacity-70 rounded-xl shadow-lg p-6 w-3/4 max-w-3xl flex items-center space-x-4 hover:bg-gray-700 transition">
          <div className="text-4xl">📊</div>
          <div>
            <h3 className="text-xl font-semibold">Data Analis</h3>
            <p className="text-gray-400">Spesialis Perusak Harga</p>
          </div>
        </div>

        <div className="bg-gray-800 bg-opacity-70 rounded-xl shadow-lg p-6 w-3/4 max-w-3xl flex items-center space-x-4 hover:bg-gray-700 transition">
          <div className="text-4xl">🏷️</div>
          <div>
            <h3 className="text-xl font-semibold">Brand Design</h3>
            <p className="text-gray-400">Pembuatan Desain Absurd</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-16 mb-16">
        <img src={Git} alt="Slack" className="w-8 h-8" />
        <img src={VScode} alt="Notion" className="w-8 h-8" />
        <img src={Photoshop} alt="Photoshop" className="w-8 h-8" />
        <img src={Premiere} alt="Illustrator" className="w-8 h-8" />
        <img src={Figma} alt="Figma" className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Service;
