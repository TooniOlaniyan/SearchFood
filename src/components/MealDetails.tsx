import { motion, AnimatePresence } from "framer-motion";

const MealDetails = ({ onClose, mealDetails }: any) => {
  console.log(mealDetails);
  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-md overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white w-[95%] h-[90%] md:w-[50rem] md:h-[40rem] rounded-2xl relative"
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          exit={{ scale: 0.5, opacity: 0 }}
        >
          {mealDetails?.meals &&
            mealDetails.meals.map((detail: any, index: any) => (
              <div
                key={index}
                className="flex flex-col gap-5 md:gap-0 md:flex-row md:justify-between p-6"
              >
                <div className="w-full md:w-1/2 flex flex-row md:flex-col gap-5 items-start justify-center">
                  <div className="">
                    <img
                      className="w-[10rem] h-[10rem] md:w-[20rem]  md:h-[25rem] rounded-xl"
                      src={detail.strMealThumb}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-3 md:gap-5">
                    <p className="font-extrabold text-sm md:text-xl">
                      {detail.strMeal}
                    </p>
                    <p className="text-gray-400 text-sm font-bold">
                      <span className="text-black">Category</span>:
                      {detail.strCategory}{" "}
                    </p>
                    <p className="text-gray-400 text-sm font-bold">
                      <span className="text-black">Area: </span>
                      {detail.strArea}
                    </p>
                    <button className="bg-primary-orange py-2 px-2 md:px-3 text-white rounded-2xl font-semibold">
                      Add
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-1/2 h-full flex flex-col gap-3 justify-center">
                  <h1 className="font-extrabold text-xl">Cook It!!</h1>
                  <div className="h-[10rem] md:h-[23rem] overflow-y-scroll">
                    <p className="text-gray-500 text-[12px] text-justify h-full">
                      {detail.strInstructions}
                    </p>
                  </div>
                  <div className="">
                    <p className="font-bold text-xl text-primary-orange">
                      Watch on YouTube
                    </p>
                    <p className="text-[10px] font-extrabold text-gray-500">
                      {detail.strYoutube}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <div className="w-max rounded-2xl bg-gray-300 text-black font-bold text-[10px] px-4 py-1">
                      {detail.strIngredient1}
                    </div>
                    <div className="w-max rounded-2xl bg-gray-300 text-black font-bold text-[10px] px-4 py-1">
                      {detail.strIngredient2}
                    </div>
                    <div className="w-max rounded-2xl bg-gray-300 text-black font-bold text-[10px] px-4 py-1">
                      {detail.strIngredient3}
                    </div>
                    <div className="w-max rounded-2xl bg-gray-300 text-black font-bold text-[10px] px-4 py-1">
                      {detail.strIngredient4}
                    </div>
                    <div className="w-max rounded-2xl bg-gray-300 text-black font-bold text-[10px] px-4 py-1">
                      {detail.strIngredient5}
                    </div>
                    <div className="w-max rounded-2xl bg-gray-300 text-black font-bold text-[10px] px-4 py-1">
                      {detail.strIngredient6}
                    </div>
                    <div className="w-max rounded-2xl bg-gray-300 text-black font-bold text-[10px] px-4 py-1">
                      {detail.strIngredient7}
                    </div>
                    <div className="w-max rounded-2xl bg-gray-300 text-black font-bold text-[10px] px-4 py-1">
                      {detail.strIngredient8}
                    </div>
                    <div className="w-max rounded-2xl bg-gray-300 text-black font-bold text-[10px] px-4 py-1">
                      {detail.strIngredient9}
                    </div>
                    <div className="w-max rounded-2xl bg-gray-300 text-black font-bold text-[10px] px-4 py-1">
                      {detail.strIngredient10}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeInOut" }}
            exit={{ y: 100, opacity: 0 }}
            className=" absolute top-2 right-3 md:top-4 md:right-8 cursor-pointer"
            onClick={onClose}
          >
            <img
              className="w-4 h-4 md:w-6 md:h-6"
              src="/assets/close.svg"
              alt="close"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MealDetails;
