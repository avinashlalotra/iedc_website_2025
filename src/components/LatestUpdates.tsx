import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const updates = [
  {
    id: "founder-next-door",
    image: "/founder-next-door.jpeg",
    title: "Founder Next Door",
    description: "A story of a local entrepreneur building innovation from scratch.",
  },
  {
    id: "makeaton",
    image: "/Makeaton (1).jpg",
    title: "Makeaton 7.0",
    description: "CITTIC CUSAT proudly hosted MAKE-A-TON 7.0 - powered by Eduport! The event brought together innovators and coders for Kerala's most exciting hackathon, complete with MLH.",
  },
  {
    id: "innovate-and-elevate",
    image: "/innovate-and-elevate.jpeg",
    title: "Innovate and Elevate",
    description: "Empowering Entrepreneurs. Gain insider insights, guidance from experts, and network with peers.",
  },
  {
    id: "redbull-basement",
    image: "/redbull-basement.jpeg",
    title: "Redbull Basement",
    description: "Where bold ideas meet real-world innovation. Level up your creativity and turn sparks into solutions.",
  },
];

const LatestUpdates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto scroll upward every few seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % updates.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Cyclic index getter
  const getUpdate = (index: number) => {
    const newIndex = (index + updates.length) % updates.length;
    return updates[newIndex];
  };

  return (
    <aside className="w-full flex flex-col items-center">
      {/* Header */}
      <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6 pb-2 border-b border-border w-full text-center">
        LATEST UPDATES
      </h3>

      {/* Container */}
      <div className="relative flex flex-col justify-center items-center w-full overflow-hidden h-[420px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center space-y-4 w-full"
          >
            {/* --- Top faded box --- */}
            <div className="flex items-center bg-gray-100 rounded-lg p-2 md:p-4 shadow-sm w-full opacity-60 blur-[0.4px]">
              <img
                src={getUpdate(currentIndex - 1).image}
                alt={getUpdate(currentIndex - 1).title}
                className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-lg mr-4"
              />
              <div>
                <h4 className="font-semibold text-sm md:text-base">
                  {getUpdate(currentIndex - 1).title}
                </h4>
                <p className="text-xs md:text-sm text-gray-600 line-clamp-2">
                  {getUpdate(currentIndex - 1).description}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-2/3 border-t border-gray-300"></div>

            {/* --- Middle clear box --- */}
            <Link
              to={getUpdate(currentIndex).id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex items-center bg-white rounded-xl p-3 md:p-5 shadow-lg w-full cursor-pointer"
            >
              <img
                src={getUpdate(currentIndex).image}
                alt={getUpdate(currentIndex).title}
                className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg mr-4"
              />
              <div>
                <h4 className="font-bold text-base md:text-lg">{getUpdate(currentIndex).title}</h4>
                <p className="text-gray-700 text-xs md:text-sm line-clamp-3 mt-1">
                  {getUpdate(currentIndex).description}
                </p>
              </div>
            </Link>

            {/* Divider */}
            <div className="w-2/3 border-t border-gray-300"></div>

            {/* --- Bottom faded box --- */}
            <div className="flex items-center bg-gray-100 rounded-lg p-2 md:p-4 shadow-sm w-full opacity-60 blur-[0.4px]">
              <img
                src={getUpdate(currentIndex + 1).image}
                alt={getUpdate(currentIndex + 1).title}
                className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-lg mr-4"
              />
              <div>
                <h4 className="font-semibold text-sm md:text-base">
                  {getUpdate(currentIndex + 1).title}
                </h4>
                <p className="text-xs md:text-sm text-gray-600 line-clamp-2">
                  {getUpdate(currentIndex + 1).description}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </aside>
  );
};

export default LatestUpdates;
