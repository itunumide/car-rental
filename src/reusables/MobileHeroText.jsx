import Button from "./Button"


const MobileHeroText = () => {
  return (
    <div className="relative sm:block md:hidden m-auto top-4 pt-[4rem] w-[80%] h-[20rem] text-center z-0">
        <p className="text-gray-500 text-[1rem] md:text-[1.2rem]">The best way of renting</p>
        <h1 className="text-white text-3xl md:text-6xl font-bold mb-6 leading-[2.5rem] md:leading-[4.5rem]">

        Best cars to make <br /> Your <span className="text-[#FFCA08]">drive easy</span>
        </h1>
        <Button text="Best Offers" />
    </div>
  )
}

export default MobileHeroText