import { motion } from "framer-motion";
import { useState} from "react";
import { useFoodContext } from "../context/FoodContext";
import { areas } from "../constant";
import { FilterByAreaProps } from "@/types";


const FilterByArea = ({ setOpenDropDown }: FilterByAreaProps) => {
  const [mySelectedArea, setMySelectedArea] = useState("");
  const { setSelectedArea, fetchMeals , setVisible } = useFoodContext();

  const handleAreaToggle = (area: string) => {
    setMySelectedArea(area);
  };
  const handleFilterByArea = async () => {
    setSelectedArea(mySelectedArea);
    setOpenDropDown(false);
    setVisible(10)
    await fetchMeals(mySelectedArea);
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
        onClick={handleFilterByArea}
        className="py-2 px-6 bg-primary-orange text-white rounded-2xl"
      >
        Apply
      </button>
    </motion.div>
  );
};

export default FilterByArea;
