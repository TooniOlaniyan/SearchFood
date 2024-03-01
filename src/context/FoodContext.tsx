import { createContext, useContext, useState, ReactNode , useEffect } from "react";
import { fetchMeals } from "../utils";
import { MealResult } from "../types";

type SetSelectedArea = (area: string) => void;

interface FoodContextType {
  selectedArea: string;
  setSelectedArea: SetSelectedArea;
  meals: MealResult;
  setMeals: React.Dispatch<React.SetStateAction<MealResult>>;
  fetchMeals: (area: string) => Promise<void>;
}

const FoodContext = createContext<FoodContextType>({
  selectedArea: "",
  setSelectedArea: () => {},
  meals: { meals: [] },
  setMeals: () => {},
  fetchMeals: async () => {},
});

export const FoodProvider = ({ children }: { children: ReactNode }) => {
  const [selectedArea, setSelectedArea] = useState("Indian");
  const [meals, setMeals] = useState<MealResult>({ meals: [] });

  const handleFetchMeals = async (area: string) => {
    try {
      const fetchedMeals = await fetchMeals(area);
      setMeals(fetchedMeals);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };

  useEffect(() => {
    handleFetchMeals(selectedArea);
    console.log(meals)
  }, [selectedArea]);

  return (
    <FoodContext.Provider
      value={{
        selectedArea,
        setSelectedArea,
        meals,
        setMeals,
        fetchMeals: handleFetchMeals,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};
export default FoodProvider;
export const useFoodContext = () => useContext(FoodContext);
