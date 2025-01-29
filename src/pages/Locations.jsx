import PagesHero from "../reusables/PagesHero"


const Locations = () => {
  return (
    <div>
      <PagesHero />

      <div className="py-[4rem]">
        <div className="flex justify-center flex-col items-center">
          <p className="text-[1.6rem] bg-[#f1f1f1] font-light text-[#616167] mb-4 px-7 py-2 rounded-[50px]">Car Rental Locations</p>
          <h1 className="text-[3rem] text-center italic font-semibold max-w-[40rem]">We Rent a car wherever you
          are and <span className="text-[#ffca50] border-b-4 border-[#ffca08] pb-1 ">enjoy!</span></h1>
        </div>
      </div>
    </div>
  )
}

export default Locations