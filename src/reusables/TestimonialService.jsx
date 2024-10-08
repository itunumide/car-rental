

const TestimonialService = (props) => {
    return (
      <div className="flex justify-center flex-col font-light">
        <p className="py-2 w-[60%] px-3 md:px-12 rounded-3xl text-[0.7rem] md:text-[1.3rem] italic mb-8" style={{backgroundColor: `${props.titlebg}`, color: `${props.titlecolor}`}}>{props.title}</p>
        <p
        className="italic text-[1.2rem] md:text-[2.7rem] font-bold pr-4"
        style={{ color: `${props.color}` }}
        dangerouslySetInnerHTML={{
          __html: `${props.service} <span class="text-[#FFCA08] underline font-bold">${props.span}</span>`,
        }}
        />


        
      </div>
    );
  };

export default TestimonialService