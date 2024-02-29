import { generateRandomRating } from "../utils";
const MealCard = ({ onMealClick, img, name }: any) => {
  const rating = generateRandomRating(1.0, 5.0);
  return (
    <div
      onClick={onMealClick}
      className="flex flex-col justify-center items-start cursor-pointer shadow-md  hover:bg-white hover:shadow-md rounded-3xl  md:w-[15rem] md:h-[22rem] overflow-hidden"
    >
      <div className="w-full h-full">
        <img className="object-contain w-full" src={img} alt="meal" />
      </div>
      <div className=" border px-4 py-8 w-full flex flex-col gap-3">
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
