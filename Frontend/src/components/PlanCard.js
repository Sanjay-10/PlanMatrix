const PlanCard = ({ logo, data, price, name, link }) => {
  return (
    <div className="card glass-morphism">
      <div className="card-body">
        <div className="flex flex-row mb-5">
          <img
            alt="logo"
            src={`/assets/images/${logo}.png`}
            className="max-h-14 max-w-28 mx-auto"
          />
          <p className="text-end text-green-400 font-bold text-xl">{price}</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p className="text-md text-gray-400 font-semibold">Data</p>
          <p className="text-lg text-end font-bold text-white">
            {data.length > 7 ? data.substring(0, 10) + "..." : data}
          </p>
        </div>
        <p className="text-md text-gray-400 font-semibold">Plan Name</p>
        <p className="text-sm  text-white italic font-light">{name}</p>
        <div className="card-actions justify-center">
          <a className="w-full" href={link}>
            <button className="btn border-none bg-hot-pink w-full mt-2 text-white hover:bg-bright-yellow hover:text-black">
              Take Me There
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
