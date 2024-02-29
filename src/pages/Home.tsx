import { useEffect, useState } from "react";
import Button from "../components/shared/Button";
import { buttonText } from "../constant";
import FilterByArea from "../components/FilterByArea";
import Sort from "../components/Sort";
import MealCard from "../components/MealCard";
import MealDetails from "../components/MealDetails";
import { MealResult } from "../types";
import { fetchMeals } from "../utils";

const Home = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openSortDropdown, setOpenSortDropdown] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [meals, setMeals] = useState<MealResult>({meals:[]});
  

  useEffect(() => {
    const showIndianFood = async () => {
      try {
        const indianFood = await fetchMeals();

        setMeals(indianFood);
      } catch (error) {
        console.log(error);
      }
    };

    showIndianFood();
  }, []);

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
  const handleMealClick = () => {
    setSelectedMeal("burger");
  };
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
        {openDropdown && <FilterByArea />}
      </div>
      <div className="absolute top-32 md:top-24 left-0 z-10">
        {openSortDropdown && <Sort />}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-10">
        {meals.meals &&
          meals.meals.map((meal, index) => (
            <MealCard
              key={index}
              name={meal.strMeal}
              img={meal.strMealThumb}
              onMealClick={handleMealClick}
            />
          ))}
      </div>
      {selectedMeal && (
        <MealDetails
          meal={selectedMeal}
          onClose={() => setSelectedMeal(null)}
        />
      )}
    </div>
  );
};

export default Home;
