import React from "react";
import Profile from "./images/pp.jpeg";
import lineImage from "./images/line.png";
import "./css/hero.css";

const Hero = () => {
  return (
    <div className="hero-container relative flex flex-col items-center text-center min-h-screen">
      <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden z-1">
        <img
          src={lineImage}
          alt="background lines"
          className="w-full h-full object-cover opacity-30 "
        />
      </div>

      <img
        src={Profile}
        alt="profile"
        className="relative z-20 rounded-full w-32 h-32 border-4 border-violet-600 transition-transform duration-500 ease-in-out transform hover:scale-110 shadow-purple"
      />
      <h1 className="text-5xl font-bold mt-6 relative z-20 text-white transition-opacity duration-700 ease-in-out hover:opacity-80">
        I'm Hades
      </h1>
      <h2 className="text-3xl font-bold text-purple-400 mt-2 relative z-20 transition-opacity duration-700 ease-in-out hover:opacity-80">
        Project Portofolio Iseng
      </h2>
      <p className="mt-4 text-lg text-gray-400 max-w-2xl relative z-20 transition-transform duration-700 ease-in-out hover:translate-y-2">
        Hallo!! Selamat datang di web portofolio saya Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eius, suscipit hic recusandae earum facere? Officia labore commodi facere fuga tenetur deleniti eaque illum at blanditiis ducimus, mollitia, nihil hic?
      </p>
    </div>
  );
};

export default Hero;
