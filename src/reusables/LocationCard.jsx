import Button from "../reusables/Button";
import MapComponent from "./MapComponent";

const LocationCard = ({lat, lng, state, country, text}) => {
  return (
    <div className="flex gap-12 px-12 py-10">
      <MapComponent lat={lat} lng={lng} />

      <div className="flex flex-col justify-between">
        <h2 className="text-[2.8rem] italic">
          {state} <span className="text-[1.5rem] font-light text-[#534b46]">{country}</span>
        </h2>
        <p className="leading-8">
         {text}
        </p>
        <Button text={"Rent"} />
      </div>
      
    </div>
  );
};

export default LocationCard;
