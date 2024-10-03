import CarRentalSlider from "./CarRentalSlider"
import Service from "./Service"


const CarRental = () => {
  return (
    <div className="mb-[26rem]">
      <div className="service w-4/5 md:w-3/5 m-auto text-center border-2 border-black">
        <Service 
        title = "Car rental and much more"
        titlebg = "#F1F1F1"
        service = "CarRental provides more than just a traditional"
        span = "car rental!"
        color = "black"
        />
      </div>

      <CarRentalSlider />
    </div>
  )
}

export default CarRental