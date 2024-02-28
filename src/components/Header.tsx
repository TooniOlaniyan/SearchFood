const Header = () => {
  return (
    <div className="flex justify-between items-center py-4 px-8">
      <div className="flex justify-center items-center">
        <img
          className="object-contain w-7 h-7"
          src="/assets/headerLogo.svg"
          alt="logo"
        />
        <p className="text-primary-orange font-extrabold">SWIGGY</p>
      </div>
      <div className="flex px-4  bg-primary-grey rounded-2xl items-center justify-between">
        <input
          type="text"
          placeholder="Search for restaurants and food"
          className="py-2 md:w-[20rem] w-[10rem] text-sm  px-4  bg-primary-grey rounded-2xl focus:outline-none"
        />
        <button type="submit" className="">
          <img src="/assets/search.svg" alt="Search Icon" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Header;
