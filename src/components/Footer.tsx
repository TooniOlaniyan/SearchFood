const Footer = () => {
  return (
    <div className="bg-test-black flex flex-col justify-start items-start p-6 gap-5">
      <div className="flex justify-center items-center">
        <img
          className="object-contain w-5 h-5"
          src="/assets/footerLogo.svg"
          alt="logo"
        />
        <p className="text-white font-extrabold text-sm">SWIGGY</p>
      </div>
      <div>
        <p className="text-gray-500 font-extralight text-sm">
          &copy; 2023 Bundl Technologies Pvt. Ltd
        </p>
      </div>
    </div>
  );
};

export default Footer;
