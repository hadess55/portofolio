import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function App() {
  return (
    <footer className="bg-gray-900 text-white dark:bg-gray-900 lg:text-center relative overflow-hidden">
      <div className="container p-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h5 className="mb-2 text-xl font-bold uppercase text-purple-400">
              About Me
            </h5>
            <p className="mb-4 text-gray-300">
              I am Hades, a web designer specializing in clean, effective, and
              eye-catching websites. Let's work together to create something
              extraordinary! Contact me for web design, branding, and UI/UX
              solutions that push the boundaries.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h5 className="mb-2 text-xl font-bold uppercase text-purple-400">
              Services
            </h5>
            <ul className="text-gray-300">
              <li className="mb-2">
                <a href="#" className="hover:text-purple-400">
                  Web Design
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-400">
                  UI/UX Design
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-400">
                  Branding
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Graphic Design
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-2 text-xl font-bold uppercase text-purple-400">
              Follow Me
            </h5>
            <p className="text-gray-300 mb-4">
              Stay connected through my social media platforms:
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 text-center text-gray-400">
        © 2024 Copyright:
        <a
          href="https://tw-elements.com/"
          className="text-purple-400 hover:text-purple-300 ml-2"
        >
          Hades
        </a>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-purple-900 to-transparent opacity-30 blur-lg"></div>
    </footer>
  );
}
