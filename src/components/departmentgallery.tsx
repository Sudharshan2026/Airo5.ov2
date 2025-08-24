

import React from "react";
import { motion } from "framer-motion";
import { FocusCards } from "@/components/ui/focus-cards";

const placeholderImages = [
  { title: "Placeholder 1", src: "https://via.placeholder.com/400x250/0f172a/FFFFFF?text=Placeholder+1" },
  { title: "Placeholder 2", src: "https://via.placeholder.com/400x250/1e3a8a/FFFFFF?text=Placeholder+2" },
  { title: "Placeholder 3", src: "https://via.placeholder.com/400x250/065f46/FFFFFF?text=Placeholder+3" },
  { title: "Placeholder 4", src: "https://via.placeholder.com/400x250/7e22ce/FFFFFF?text=Placeholder+4" },
  { title: "Placeholder 5", src: "https://via.placeholder.com/400x250/9d174d/FFFFFF?text=Placeholder+5" },
  { title: "Placeholder 6", src: "https://via.placeholder.com/400x250/047857/FFFFFF?text=Placeholder+6" },
  { title: "Placeholder 7", src: "https://via.placeholder.com/400x250/9d174d/FFFFFF?text=Placeholder+7" },
  { title: "Placeholder 8", src: "https://via.placeholder.com/400x250/047857/FFFFFF?text=Placeholder+8" },
];

const DepartmentGallery: React.FC = () => {
  return (
    <section className="relative bg-gray-950 text-white py-16 px-6 overflow-hidden">
      {/* Background Glow Overlay */}
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

      {/* FocusCards with Glow */}
      <div className="relative z-10">
        <FocusCards
          cards={placeholderImages.map((card) => ({
            ...card,
            glow: true, // custom flag we’ll handle inside FocusCards
          }))}
        />
      </div>
    </section>
  );
};

export default DepartmentGallery;