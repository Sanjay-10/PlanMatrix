import Title from "../components/Title";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";

const members = [
  {
    id: "110156582",
    image: "king.jpg",
    name: "Sharan Sukesh",
  },
  { id: "110156572", image: "aaryen.jpg", name: "Aaryen D'souza" },
  { id: "110156182", image: "happy.jpg", name: "Happy Aghera" },
  { id: "110157192", image: "don.jpg", name: "Sanjay Suthar" },
  { id: "110155218", image: "reuben.jpg", name: "Reuben George" },
];

const Home = () => {
  return (
    <div className="h-full max-w-screen-xl mx-auto px-4">
      <Navbar />
      <div className="grid grid-cols-2 items-center mt-20">
        <div className="flex flex-col items-center mr-auto">
          <p className="text-5xl text-white font-bold text-center mb-3">
            Mobile{" "}
            <span className="italic font-light text-bright-yellow">Matrix</span>
          </p>
          <p className="text-2xl text-white text-center mb-3">
            Mobile Plan Analyzer
          </p>
          <p className="text-2xl italic font-extralight text-center">
            Find the perfect connection
          </p>
        </div>
        <img
          className="h-100 w-100 object-cover ml-auto"
          src="/assets/images/home.png"
          alt="logo"
        />
      </div>
      <Title title={"Our Team"} margin={"mt-10"} />
      <p className="text-gray-200 text-lg italic font-light mt-3">
        Meet our dynamic team of innovative developers and creative designers.
      </p>
      <div className="grid grid-cols-5 gap-5 py-10 ">
        {members.map((member, index) => (
          <ProfileCard id={member.id} name={member.name} image={member.image} />
        ))}
      </div>
    </div>
  );
};

export default Home;
