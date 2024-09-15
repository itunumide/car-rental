const Benefit = ({ image, pic }) => {
    return (
      <div>
        <div 
            className="frame mt-20 w-[17.8rem] h-[17.8rem] rounded-[50%] hover:shadow-[0_0_0_8px_#FFCA08] transition-shadow duration-300" 
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
          <div className="inner relative top-[14rem] left-[35%] w-24 h-24 rounded-[50%] bg-[#FFCA08] flex items-center justify-center">
            <img src={pic} alt="" />
          </div>
          
        </div>
      </div>
    );
  }
  
  export default Benefit;
  