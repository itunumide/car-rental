const Service = (props) => {
  return (
    <div className="flex justify-center mt-[8rem] md:mt-[4rem] flex-col font-light">
      <p className="py-1 px-12 rounded-3xl text-[1.7rem] italic mb-4" style={{backgroundColor: `${props.titlebg}`, color: `${props.titlecolor}`}}>{props.title}</p>
      <p
        className="italic text-[2.7rem] font-bold"
        style={{ color: `${props.color}` }}
        dangerouslySetInnerHTML={{
          __html: `${props.service} <span class="text-[#FFCA08] underline font-bold">${props.span}</span>`,
        }}
      />
    </div>
  );
};

export default Service;
