import React from "react";

const Navbar = () => {
  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar flex justify-between items-center px-10 py-6">
      <div className="text-3xl font-bold">Hades</div>
      <ul className="flex space-x-8 item">
        <li>
          <a
            href="#hero"
            onClick={(e) => handleScroll(e, "hero")}
            className="hover:text-gray-400"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "projects")}
            className="hover:text-gray-400"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#services"
            onClick={(e) => handleScroll(e, "services")}
            className="hover:text-gray-400"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#sosmed"
            onClick={(e) => handleScroll(e, "sosmed")}
            className="hover:text-gray-400"
          >
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
