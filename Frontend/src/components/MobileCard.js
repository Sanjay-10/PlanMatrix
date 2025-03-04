const MobileCard = ({ name, price, photo, link }) => {
  return (
    <div className="card glass-morphism px-5 ">
      <figure>
        <img alt="Phone" src={photo} className="max-h-72 max-w-52 pt-5" />
      </figure>
      <div className="card-body justify-between">
        <h2 className="card-title text-nowrap text-white">{name}</h2>
        <div className="grid grid-cols-2 gap-2">
          <>
            <p className="text-md text-gray-400 font-semibold">Price</p>
            <p className="text-end text-green-400 font-bold text-lg">{price}</p>
          </>
        </div>
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

export default MobileCard;
