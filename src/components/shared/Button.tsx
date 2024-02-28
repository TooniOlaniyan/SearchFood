import { ButtonProps } from "../../types";

const Button = ({ text, icon, onClick }: ButtonProps) => {
  return (
    <div>
      <button
        className="flex items-center justify-between border border-opacity-30  border-gray-500 shadow-sm bg-white gap-3 text-test-black font-light text-sm py-2 px-3 rounded-3xl"
        onClick={onClick}
      >
        {text}
        {icon && <img src={icon} alt="Icon" className="w-4 h-4" />}
      </button>
    </div>
  );
};

export default Button;
