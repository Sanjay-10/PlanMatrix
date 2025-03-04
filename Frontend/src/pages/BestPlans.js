import Title from "../components/Title";
import Navbar from "../components/Navbar";
import PlanCard from "../components/PlanCard";
import useBestPlan from "../hooks/useBestPlan";

const BestPlans = ({ title }) => {
  const {
    data: planData,
    error: planError,
    loading: planLoading,
  } = useBestPlan();

  if (planLoading) return <div>Loading...</div>;
  if (planError) return <div>Error occurred: {planError.message}</div>;

  return (
    <>
      <Navbar title={title} />
      <div className="max-w-screen-xl mx-auto px-4">
        <Title title={"Best Plan By Price"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          <PlanCard
            name={planData[0].name}
            logo={planData[0].name}
            price={"$" + planData[0].price}
            data={planData[0].data + " GB"}
            link={
              "https://www.fido.ca/phones/bring-your-own-device?icid=F_WIR_CNV_GRM6LG&flowType=byod"
            }
          />
        </div>
        <Title title={"Best Plan By Data"} margin={"mt-10"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 pb-5">
          <PlanCard
            name={planData[1].name}
            logo={planData[1].name}
            price={"$" + planData[1].price}
            data={planData[1].data + " GB"}
            link={
              "https://www.fido.ca/phones/bring-your-own-device?icid=F_WIR_CNV_GRM6LG&flowType=byod"
            }
          />
        </div>
      </div>
    </>
  );
};

export default BestPlans;
