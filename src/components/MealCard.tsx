import { generateRandomRating , fetchMealsDetails } from "../utils";

const MealCard = ({ onMealClick, img, name , mealId }: any) => {
  const rating = generateRandomRating(3.0, 5.0);

    const handleMealClick = async () => {
      try {
        const mealDetails = await fetchMealsDetails(mealId);
        onMealClick(mealDetails);
      } catch (error) {
        console.error("Error fetching meal details:", error);
      }
    };
  return (
    <div
      onClick={handleMealClick}
      className="flex bg-white flex-col justify-center items-start cursor-pointer shadow-lg  rounded-3xl  md:w-[15rem] md:h-[22rem] overflow-hidden"
    >
      <div className="w-full h-full">
        <img className="object-contain w-full rounded-2xl" src={img} alt="meal" />
      </div>
      <div className=" px-4 py-8 w-full flex flex-col gap-3">
        <p className="font-extrabold text-lg">{name}</p>
        <div className="flex items-center gap-2">
          <img src="/assets/rating.svg" alt="rating" />
          <p className="text-gray-500">{rating} Ratings</p>
        </div>
      </div>
    </div>
  );
};

export default MealCard;