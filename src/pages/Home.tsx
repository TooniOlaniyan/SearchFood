import { useState } from "react";
import Button from "../components/shared/Button";
import { buttonText } from "../constant";
import FilterByArea from "../components/FilterByArea";
import Sort from "../components/Sort";

const Home = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openSortDropdown, setOpenSortDropdown] = useState(false);

  const handleClick = (index:number) => {
    switch (index) {
      case 0:
        setOpenDropdown(!openDropdown);
        setOpenSortDropdown(false)
        break;
      case 1:
        setOpenSortDropdown(!openSortDropdown)
        setOpenDropdown(false)
        break;
      default:
        
        break;
    }
  };
  return (
    <div className="min-h-[100vh]">
      <h1 className="font-extrabold text-lg mb-6">
        Restaurants with online food delivery in Pune
      </h1>
      <div className="flex gap-3">
        {buttonText.map(({ text, icon }, index) => (
          <Button
            key={index}
            text={text}
            icon={index < 2 ? icon : ""}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <div className="">{openDropdown && <FilterByArea />}</div>
      <div className="">{openSortDropdown && <Sort />}</div>
    </div>
  );
};

export default Home;
