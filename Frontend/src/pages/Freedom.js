import Title from "../components/Title";
import Navbar from "../components/Navbar";
import PlanCard from "../components/PlanCard";
import MapFreedom from "../components/MapFreedom";
import MobileCard from "../components/MobileCard";
import useFreedomSim from "../hooks/useFreedomSim";
import useFreedomMobile from "../hooks/useFreedomMobile";

const Freedom = ({ title }) => {
  const {
    data: planData,
    error: planError,
    loading: planLoading,
  } = useFreedomSim();
  const {
    data: mobileData,
    error: mobileError,
    loading: mobileLoading,
  } = useFreedomMobile();

  if (planLoading || mobileLoading) return <div>Loading...</div>;
  if (planError) return <div>Error occurred: {planError.message}</div>;
  if (mobileError) return <div>Error occurred: {mobileError.message}</div>;

  return (
    <>
      <Navbar title={title} />
      <div className="max-w-screen-xl mx-auto px-4">
        <Title title={"Plans"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {planData.map((plan) => (
            <PlanCard
              logo={"freedom"}
              data={plan.data}
              name={plan.name}
              price={plan.price}
              link={"https://shop.freedommobile.ca/en-CA/plans"}
            />
          ))}
        </div>
        <Title title={"Mobile"} margin={"mt-10"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {mobileData.map((mobile) => (
            <MobileCard
              key={mobile.id}
              name={mobile.name}
              photo={mobile.image}
              price={mobile.price}
              link={"https://shop.freedommobile.ca/en-CA/"}
            />
          ))}
        </div>
        <Title title={"Network Coverage"} margin={"mt-10"} />
        <MapFreedom />
      </div>
    </>
  );
};

export default Freedom;
