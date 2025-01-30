import Button from "../reusables/checkoutreuseable/Button";
import MapComponent from "./MapComponent";

const LocationCard = ({lat, lng, state, country, text, onClick}) => {
  return (
    <div className="flex flex-col md:flex-row gap-12 px-8 md:px-12 py-6 md:py-10">
      <MapComponent lat={lat} lng={lng} />

      <div className="flex flex-col  items-center md:items-start  md:justify-between">
        <h2 className="text-[2.8rem] italic">
          {state} <span className="text-[1.5rem] font-light text-[#534b46]">{country}</span>
        </h2>
        <p className="leading-8 mb-5 md:mb-0 text-center md:text-left">
         {text}
        </p>
        <Button text={"Rent"} onClick={onClick} width="10rem" />
      </div>
      
    </div>
  );
};

export default LocationCard;
