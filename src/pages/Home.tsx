import Button from "../components/shared/Button";
import { buttonText } from "../constant";

const Home = () => {
  const handleClick = () => {};
  return (
    <div>
      <h1 className="font-extrabold text-lg mb-6">
        Restaurants with online food delivery in Pune
      </h1>
      <div className="flex gap-3">
        {buttonText.map(({ text, icon }, index) => (
          <Button
            key={index}
            text={text}
            icon={index < 2 ? icon : ""}
            onClick={() => handleClick()}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
