export interface ButtonProps {
  text: string;
  icon?: string;
  onClick: () => void;
}

export interface MealResponse {
  meals: Meal[];
}

export interface Meal {
  strArea: string;
}
