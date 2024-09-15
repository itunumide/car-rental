

const Service = (props) => {
  return (
    <div>
        <div className="items-center justify-center mt-[16rem] flex flex-col font-light">

            <p className="py-1 px-12 rounded-3xl bg-[#F1F1F1] text-[1.7rem] italic mb-4">{props.title}</p>
            <p className="italic text-[2.7rem] font-bold">{props.service} <span className="text-[#FFCA08] underline font-bold">{props.span}</span></p>
        </div>
    </div>
  )
}

export default Service