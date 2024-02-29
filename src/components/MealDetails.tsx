import { motion, AnimatePresence } from "framer-motion";

const MealDetails = ({ meal, onClose }: any) => {
  return (
    <AnimatePresence>
      {meal && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-md overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg md:w-1/2 md:h-1/2 relative"
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            exit={{ scale: 0.5, opacity: 0 }}
          >
            <h2 className="text-2xl font-bold mb-4">{meal}</h2>
            <motion.button
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration:0.5, ease: "easeInOut" }}
              exit={{ y: 100, opacity: 0 }}
              className="bg-primary-orange text-white px-4 py-2 rounded-lg absolute md:top-8 md:right-8"
              onClick={onClose}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MealDetails;
