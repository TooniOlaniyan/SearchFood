export interface ButtonProps {
  text: string;
  icon?: string;
  onClick: () => void;
}

export interface MealResult {
  meals: Meal[];
}

export interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export interface FilterByAreaProps {
  setOpenDropDown: React.Dispatch<React.SetStateAction<boolean>>;
}