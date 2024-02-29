export const fetchMeals = async () => {
  const url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";

  const res = await fetch(url);
  const result = await res.json();
//   console.log(result)

  return result;
};


export const generateRandomRating = (min: number, max: number) => {
  
  const rating = Math.random() * (max - min) + min;

  return rating.toFixed(1);
};