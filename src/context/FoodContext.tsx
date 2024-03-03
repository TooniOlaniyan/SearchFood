import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { fetchMeals } from "../utils";
import { MealResult } from "../types";

type SetSelectedArea = (area: string) => void;

interface FoodContextType {
  selectedArea: string;
  setSelectedArea: SetSelectedArea;
  meals: MealResult;
  isLoading: boolean;
  setMeals: React.Dispatch<React.SetStateAction<MealResult>>;
  fetchMeals: (area: string) => Promise<void>;
  visible: number;
  setVisible: React.Dispatch<React.SetStateAction<number>>;
}

const FoodContext = createContext<FoodContextType>({
  selectedArea: "",
  setSelectedArea: () => {},
  meals: { meals: [] },
  isLoading: false,
  setMeals: () => {},
  fetchMeals: async () => {},
  visible:10,
  setVisible:() => {}


});

export const FoodProvider = ({ children }: { children: ReactNode }) => {
  const [selectedArea, setSelectedArea] = useState("Indian");
  const [meals, setMeals] = useState<MealResult>({ meals: [] });
  const [isLoading, setIsLoading] = useState(false);
   const [visible, setVisible] = useState(10);
  

  const handleFetchMeals = async (area: string) => {
    setIsLoading(true);
    try {
      const fetchedMeals = await fetchMeals(area);
      setMeals(fetchedMeals);
    } catch (error) {
      console.error("Error fetching meals:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetchMeals(selectedArea);
  }, [selectedArea]);

  return (
    <FoodContext.Provider
      value={{
        isLoading,
        selectedArea,
        setSelectedArea,
        meals,
        setMeals,
        fetchMeals: handleFetchMeals,
        visible , 
        setVisible
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};
export default FoodProvider;
export const useFoodContext = () => useContext(FoodContext);
