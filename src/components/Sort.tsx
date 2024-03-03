import { useState } from "react";
import { motion } from "framer-motion";

const Sort = () => {
  const [selected, setSelected] = useState<string>('')
  const handleAreaToggle = (sortValue: string) => {
    setSelected(sortValue);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
      className="w-[15rem] md:w-[20rem] h-[10rem] md:h-[15rem] flex flex-col gap-10  md:gap-20 bg-white shadow-lg rounded-3xl ml-20 md:ml-28 mt-5 p-4 md:p-8 overflow-y-scroll"
    >
      <div className="flex flex-wrap w-full gap-10">
        <div className="flex items-center gap-5">
          <input
            type="radio"
            id="sort"
            name="sort"
            value="sort"
            onChange={() => handleAreaToggle(selected)}
            className=" w-4 h-4 border border-primary-orange rounded-full focus:outline-none focus:border-primary-orange"
          />
          <label className="text-gray-500">Alphabetically (A-z)</label>
        </div>
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

export default Sort;
