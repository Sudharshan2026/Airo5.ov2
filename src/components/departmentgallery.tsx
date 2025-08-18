import React from "react";
import { motion } from "framer-motion";

const placeholderImages = [
  { id: 1, alt: "Placeholder 1" },
  { id: 2, alt: "Placeholder 2" },
  { id: 3, alt: "Placeholder 3" },
  { id: 4, alt: "Placeholder 4" },
  { id: 5, alt: "Placeholder 5" },
  { id: 6, alt: "Placeholder 6" },
];

const DepartmentGallery: React.FC = () => {
  return (
    <section className="relative bg-gray-950 text-white py-16 px-6 overflow-hidden">
      {/* Subtle Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-green-900/10 to-blue-800/20 blur-3xl"></div>

      {/* Title */}
      <motion.div
        className="text-center relative z-10 mb-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-3 
             bg-gradient-to-r from-blue-700 to-green-400 bg-clip-text text-transparent"
          style={{ fontFamily: "AvartarWater" }}
        >
          Department Gallery
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Explore the vibrant spaces and state-of-the-art facilities of our department.
        </p>
      </motion.div>

      {/* Gallery Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {placeholderImages.map((item, index) => (
          <motion.div
            key={item.id}
            className="group relative bg-gray-900 rounded-2xl h-64 flex items-center justify-center shadow-lg 
                       border border-blue-500/20 hover:border-green-400/60
                       transition-all duration-500 overflow-hidden hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Glow effect */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
                            bg-gradient-to-tr from-blue-600/20 to-green-600/20 blur-xl"
            ></div>

            {/* Placeholder Text */}
            <span
              className="relative z-10 text-gray-200 text-lg font-semibold 
                             group-hover:text-green-300 transition"
            >
              {item.alt}
            </span>

            {/* Neon Border Glow */}
            <div
              className="absolute inset-0 rounded-2xl border-2 border-transparent 
                            group-hover:border-green-400/60 transition duration-500"
            ></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DepartmentGallery;
