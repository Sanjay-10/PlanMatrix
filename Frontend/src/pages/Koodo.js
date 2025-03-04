import Title from "../components/Title";
import Navbar from "../components/Navbar";
import PlanCard from "../components/PlanCard";
import MapKoodo from "../components/MapKoodo";
import useKoodoSim from "../hooks/useKoodoSim";
import MobileCard from "../components/MobileCard";
import useKoodoMobile from "../hooks/useKoodoMobile";

const Koodo = ({ title }) => {
  const {
    data: planData,
    error: planError,
    loading: planLoading,
  } = useKoodoSim();
  const {
    data: mobileData,
    error: mobileError,
    loading: mobileLoading,
  } = useKoodoMobile();

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
              logo={"koodo"}
              data={plan.data}
              name={plan.name}
              price={plan.price}
              link={
                "https://www.koodomobile.com/en/rate-plans?INTCMP=KMNew_NavMenu_Shop_Plans"
              }
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
              link={
                "https://www.koodomobile.com/en/phones?INTCMP=KMNew_NavMenu_Shop_Phones"
              }
            />
          ))}
        </div>
        <Title title={"Network Coverage"} margin={"mt-10"} />
        <MapKoodo />
      </div>
    </>
  );
};

export default Koodo;
