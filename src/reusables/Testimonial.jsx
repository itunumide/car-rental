import jenny from '../assets/Jennifer.jpg'
import TestimonialService from "./TestimonialService"


const Testimonial = () => {
  return (
    <div className="flex justify-between gap-20 w-4/5 m-auto">
        <div className="left w-[45%] px-4">
            <TestimonialService
            titlebg = "#F1F1F1"
            titlecolor = "#575757"
            title = "One of our Testimonials"
            service = "See what said our happy"
            span = "customers"
            />
            
        </div>
        <div className="right w-[50%] flex flex-col">
            <div className="top h-[14rem] w-[90%] rounded-lg bg-[#1C1601] p-10">
                <p className="text-center text-[1.25rem] text-white w-[90%] m-auto">"There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed."</p>
            </div>
            <div className="bottom h-[4rem] w-[90%] flex justify-start gap-4 pl-16 mt-4">
                <div className="leftb w-20 h-20 rounded-[50%] bg-cover bg-center relative -top-10" style={{backgroundImage: `url(${jenny})`}}>
                    {/* <img src= {jenny} alt="" /> */}
                </div>
                <div className="rightb">
                    <div className="top">
                        <h1 className="font-bold text-[1.1rem]">Jennifer Olayiwola</h1>
                    </div>
                    <div className="bottom">
                        <p className="font-light">Makeup Artist</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial