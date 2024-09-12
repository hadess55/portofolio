import React from "react";

const projects = [
  {
    id: 1,
    title: "SI Tabungan SDN Margourip 3",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 2,
    title: "Empurau",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 3,
    title: "Aplikasi Kasir",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 4,
    title: "Olympus WordPress",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 5,
    title: "Web Portofolio",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 6,
    title: "Desain",
    image: "https://via.placeholder.com/400x300",
  },
];

const ProjectGallery = () => {
  return (
    <div className="relative px-10 py-16 bg-gray-900 transition-all duration-500">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        PROJECT SAYA
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-lg overflow-hidden shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover transition-opacity duration-500 ease-in-out hover:opacity-80"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-purple-900 via-purple-900 to-transparent bg-opacity-60 pointer-events-none"></div>
    </div>
  );
};

export default ProjectGallery;
