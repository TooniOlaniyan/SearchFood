import { motion } from "framer-motion";
import { useState } from "react";
import { areas } from "../constant";

const FilterByArea = () => {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

  const handleAreaToggle = (area: string) => {
    setSelectedAreas((prevSelectedAreas) =>
      prevSelectedAreas.includes(area)
        ? prevSelectedAreas.filter((selectedArea) => selectedArea !== area)
        : [...prevSelectedAreas, area]
    );
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
      className="w-[15rem] md:w-[25rem] h-[25rem] flex flex-col  gap-10 bg-white shadow-lg rounded-3xl mt-5 p-10 overflow-y-scroll"
    >
      <div className="flex flex-wrap w-full gap-10">
        {areas.map((area) => (
          <div key={area} className="flex items-center gap-5 w-full">
            <input
              type="radio"
              id={area}
              name="area"
              value={area}
              checked={selectedAreas.includes(area)}
              onChange={() => handleAreaToggle(area)}
              className="appearance-none w-4 h-4 border border-primary-orange rounded-full focus:outline-none focus:border-primary-orange"
            />
            <label htmlFor={area} className="text-gray-500">
              {area}
            </label>
          </div>
        ))}
      </div>
      <button
        onClick={() => {}}
        className="py-2 px-6 bg-primary-orange text-white rounded-2xl"
      >
        Apply
      </button>
    </motion.div>
  );
};

export default FilterByArea;
