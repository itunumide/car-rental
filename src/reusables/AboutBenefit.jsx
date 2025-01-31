import { FaCar } from "react-icons/fa";

const AboutBenefit = () => {
  const featureList = [
    "Limited liability for shareholders.",
	"Well understood and accepted.",
    "Able to raise significant capital.",
    "Offset against future profits.",
    "Easy to sell and pass ownership.",
    "Profits can be reinvested & paid",
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
      {featureList.map((feature, index) => (
        <div key={index} className="flex items-center gap-4 group ">
          <div className="w-12 h-12 rounded-[50%] border group-hover:border-[.2rem] bg-[#1c1601] group-hover:bg-transparent group-hover:border-[#ffca08] flex justify-center items-center">
            <FaCar size={50} className="text-[#ffca08]  w-6" />
          </div>
          <p className="text-[1.2rem]  font-medium">{feature}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutBenefit;
