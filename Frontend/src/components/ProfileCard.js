const ProfileCard = ({ id, name, image }) => {
  return (
    <div className="w-full max-w-sm glass-morphism rounded-lg shadow py-5">
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10">
        <img
          alt="profile"
          className="w-36 h-36 mb-3 rounded-full shadow-lg"
          src={`/assets/images/${image}`}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {name}
        </h5>
        <span className="text-sm text-bright-yellow font-500">{id}</span>
      </div>
    </div>
  );
};

export default ProfileCard;
