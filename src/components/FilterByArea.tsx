import { motion } from "framer-motion";
import { useState } from "react";
import { areas } from "../constant";
import { fetchMeals } from "../utils";

const FilterByArea = () => {
  const [selectedArea, setSelectedArea] = useState<string>('');

  const handleAreaToggle = (area: string) => {
    setSelectedArea(area)
  };
  const handleFilterByArea = async () => {
    const filteredMeal = await fetchMeals(selectedArea)
    console.log(filteredMeal)
  }
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
              checked={selectedArea.includes(area)}
              onChange={() => handleAreaToggle(area)}
              className="cursor-pointer w-4 h-4 border accent-primary-orange"
            />
            <label htmlFor={area} className="text-gray-500">
              {area}
            </label>
          </div>
        ))}
      </div>
      <button
        onClick={() => {handleFilterByArea()}}
        className="py-2 px-6 bg-primary-orange text-white rounded-2xl"
      >
        Apply
      </button>
    </motion.div>
  );
};

export default FilterByArea;
