import Service from "./Service"


const Testimonial = () => {
  return (
    <div className="flex items-center justify-between">
        <div className="left w-[45%]">
            <Service 
            title = "Some of our testimonials"
            titlebg = "#F1F1F1"
            service = "See what said our happy"
            span = "customers"
            color = "black"
            />
        </div>
        <di className="right w-[45%] flex flex-col">
            <div className="top h-[7rem] w-[80%] border-2 border-black rounded-lg bg-[#a0c]">
                <p className="text-center">"There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed."</p>
            </div>
            <div className="bottom h-[4rem] w-[80%] border-2 border-black">
                <div className="leftb">
                    <img src="" alt="" />
                </div>
                <div className="rightb">
                    <div className="top">
                        <h1 className="font-bold text-[1.1rem]">Jennifer Oni</h1>
                    </div>
                    <div className="bottom">
                        <p className="font-light">Makeup Artist</p>
                    </div>
                </div>
            </div>
        </di>
    </div>
  )
}

export default Testimonial