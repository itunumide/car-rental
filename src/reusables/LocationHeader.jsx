const LocationHeader = ({ subtitle, title, highlight, width }) => {
    return (
      <div className="pt-[4rem]">
        <div className="flex justify-center flex-col items-center">
          <p className="text-[1.2rem] md:text-[1.6rem] bg-[#f1f1f1] font-light text-[#616167] mb-4 px-7 py-2 rounded-[50px]">
            {subtitle} 
          </p>
          <h1 className={`text-[2rem] md:text-[3rem] text-center italic font-semibold ${width}`}>
            {title}{" "}
            <span className="text-[#ffca50] border-b-4 border-[#ffca08] pb-1">
              {highlight} 
            </span>
          </h1>
        </div>
      </div>
    );
  };
  
  export default LocationHeader;
  