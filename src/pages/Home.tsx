import { useState } from "react";
import Button from "../components/shared/Button";
import { buttonText } from "../constant";
import FilterByArea from "../components/FilterByArea";
import Sort from "../components/Sort";
import MealCard from "../components/MealCard";
import MealDetails from "../components/MealDetails";
import { useFoodContext } from "../context/FoodContext";
import FoodSkeleton from "@/components/FoodSkeleton";
import { fetchMealsDetails } from "@/utils";

const Home = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openSortDropdown, setOpenSortDropdown] = useState(false);
  const [showMealDetails, setShowMealDetails] = useState(false);
  const [mealDetails, setMealDetails] = useState(null);

  const { meals, isLoading, visible, setVisible } = useFoodContext();

  const handleClick = (index: number) => {
    switch (index) {
      case 0:
        setOpenDropdown(!openDropdown);
        setOpenSortDropdown(false);
        break;
      case 1:
        setOpenSortDropdown(!openSortDropdown);
        setOpenDropdown(false);
        break;
      default:
        break;
    }
  };
  const handleLoadMore = async () => {
    setVisible((prevState) => prevState + 10);
  };
  const handleShowMealDetails = async (mealId: any) => {
    setShowMealDetails(true);
    try {
      const mealDetailsResult = await fetchMealsDetails(mealId);
      if (mealDetailsResult.meals) {
        setMealDetails(mealDetailsResult);
      }
    } catch (error) {
      console.log("error");
    }
  };

  const skeletonItems = Array.from({ length: 10 }, (_, index) => index);

  return (
    <div className="min-h-[100vh] flex flex-col gap-5 relative">
      <h1 className="font-extrabold text-lg mb-6">
        Restaurants with online food delivery in Pune
      </h1>
      <div className="flex flex-wrap w-full gap-3">
        {buttonText.map(({ text, icon }, index) => (
          <Button
            key={index}
            text={text}
            icon={index < 2 ? icon : ""}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <div className="absolute top-32 md:top-24 md:left-0 z-10">
        {openDropdown && <FilterByArea setOpenDropDown={setOpenDropdown} />}
      </div>
      <div className="absolute top-32 md:top-24 left-0 z-10">
        {openSortDropdown && <Sort />}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4  gap-y-10">
        {(isLoading || meals.meals.length === 0) &&
          skeletonItems.map((item) => <FoodSkeleton key={item} />)}
        {meals.meals &&
          meals.meals
            .slice(0, visible)
            .map((meal, index) => (
              <MealCard
                key={index}
                name={meal.strMeal}
                img={meal.strMealThumb}
                mealId={meal.idMeal}
                onMealClick={() => handleShowMealDetails(meal.idMeal)}
              />
            ))}
      </div>

      {visible < meals.meals.length && (
        <button
          className="bg-primary-orange text-white font-bold py-2 w-[40%] md:px-4 md:w-[20%] rounded-2xl"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      )}

      {showMealDetails && (
        <MealDetails
          mealDetails={mealDetails}
          onClose={() => setShowMealDetails(false)}
        />
      )}
    </div>
  );
};

export default Home;
