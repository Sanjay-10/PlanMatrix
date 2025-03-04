import Title from "../components/Title";
import Navbar from "../components/Navbar";
import MapFido from "../components/MapFido";
import useFidoSim from "../hooks/useFidoSim";
import PlanCard from "../components/PlanCard";
import MobileCard from "../components/MobileCard";
import useFidoMobile from "../hooks/useFidoMobile";

const Fido = ({ title }) => {
  const {
    data: planData,
    error: planError,
    loading: planLoading,
  } = useFidoSim();
  const {
    data: mobileData,
    error: mobileError,
    loading: mobileLoading,
  } = useFidoMobile();

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
              logo={"fido"}
              data={plan.data}
              name={plan.name}
              price={plan.price}
              link={
                "https://www.fido.ca/phones/bring-your-own-device?icid=F_WIR_CNV_GRM6LG&flowType=byod"
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
              link={"https://www.fido.ca/phones/?icid=F_WIR_CNV_MXDFRS"}
            />
          ))}
        </div>
        <Title title={"Network Coverage"} margin={"mt-10"} />
        <MapFido />
      </div>
    </>
  );
};

export default Fido;
