const Sort = () => {
  return (
    <div className="w-[20rem] h-[15rem] flex flex-col  gap-20 bg-white shadow-lg rounded-3xl ml-28 mt-5 p-8 overflow-y-scroll">
      <div className="flex flex-wrap w-full gap-10">
        <div className="flex items-center gap-5">
          <input
            type="radio"
            id="sort"
            name="sort"
            value="sort"
            onChange={() => {}}
            className="appearance-none w-4 h-4 border border-primary-orange rounded-full focus:outline-none focus:border-primary-orange"
          />
          <label className="text-gray-500">Alphabetically (A-z)</label>
        </div>
      </div>
      <button
        onClick={() => {}}
        className="py-2 px-6 bg-primary-orange text-white rounded-2xl"
      >
        Apply
      </button>
    </div>
  );
};

export default Sort;
