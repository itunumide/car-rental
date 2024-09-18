import React from 'react'
import Accordion from '../reusables/Accordion';
import post from '../assets/post5.jpg'
import { IoIosHelpCircle, IoIosHelp } from "react-icons/io";
import { FaComment, FaCarSide, FaCar, FaCarCrash, FaCaravan, FaRegIdCard, FaCarBattery } from "react-icons/fa";

const FAQs = () => {
  return (
    <div>
      <div className="container-div w-[100%] flex justify-center items-center my-5"> 
        <div className="wrapper w-[95%] flex justify-between items-center">
          <div className="w-[2500px] LHS">

            <div className="top-left mb-6">
              <img src={post} alt="" className='rounded-xl'/>
            </div>

            <div className="bottom-left bg-formBg rounded-2xl mt-6 shadow-lg">

              <div className="ask-us w-[100px] flex justify-between items-center">
                <div className="comment-icon-hold bg-customYellow w-10 h-10 rounded-full flex justify-center items-center">
                  <FaComment color='#000' />
                </div>

                <h4 className='font-bold text-white'>Ask Us</h4>
              </div>

              <form action="" autoComplete='on' className='flex flex-col justify-center items-center text-customAccordionColor'>
                <div className="name-email flex w-[350px] justify-between">
                  <div className="name text-sm leading-loose">
                    <label className=''> Your Name (*)</label> <br />
                    <input type="text"  className='w-[150px] h-[35px] rounded-2xl'/>
                  </div>

                  <div className="email text-sm leading-loose">
                    <label> Your Email (*)</label> <br />
                    <input type="text" className='w-[150px] h-[35px] rounded-2xl'/>
                  </div>                  
                </div>
                <br />

                <div className="subject flex flex-col leading-loose">
                  <label> Subject</label>
                  <input type="text" className='w-[350px] h-[35px] rounded-2xl' />
                </div>
                <br />

                  <div className="department flex flex-col leading-loose">
                    <label>Department</label>
                    <input type="text" className='w-[350px] h-[35px] rounded-2xl'/>
                  </div>
                  <br />

                  <div className="question leading-loose">
                    <label>Your Question</label> <br />
                    <textarea name="message" rows="7" cols="45" id="" className='rounded-2xl'></textarea> <br />
                    <button className='bg-customYellow w-[55px] h-7 rounded-3xl font-bold'>Ask</button>
                  </div>
              </form>
            </div>
          </div>

          <div className="RHS width-[60%] ml-10">

            <div className="top-right mb-10">
              <h1 className='text-black italic text-3xl font-bold mb-6'>Do you have any <span className='bg-customYellow underline'>Questions?</span></h1>
              <p className='text-customP mb-4 text-xl'>Please read questions below and if you can not find your answer, please send us your question, we will answer you as soon as possible</p>
            </div>

            <div className="bottom-right">
              <div className="faq text-black w-44 h-24 flex justify-between items-center mb-10">
                <div className="help-icon-hold w-16 h-16 ">
                  <IoIosHelp size='75px' color='#000' className='bg-customYellow rounded-full' />
                </div>
                <h1 className='text-3xl font-bold'>F.A.Qs</h1>
              </div>

              <div className="accordion-hold">
                <Accordion 
                  icon={<FaCarSide  size='25px'/>}
                  title='How to rent a car?'
                  content='Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.

                  Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. '
                />

                <Accordion 
                  icon={<FaCar size='25px' />}
                  title='How do I return my rental car at the airport?'
                  content='Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.

                  Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. '
                />

                <Accordion 
                  icon={<FaRegIdCard size='25px' />}
                  title='What is Rental Cover and how does it work?'
                  content='Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.

                  Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. '
                />

                <Accordion 
                  icon={<FaCarCrash size='25px' />}
                  title='Excepteur sint occaecat cupidatat iusmod tempor incid idun?'
                  content='Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.

                  Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. '
                />

                <Accordion 
                  icon={<FaCarBattery size='25px' />}
                  title='Consectetur adipisicing elit, sed do eiusmod tempor incididunt?'
                  content='Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.

                  Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. '
                />

                <Accordion 
                  icon={<FaCaravan size='25px' />}
                  title='Vestibulum ante ipsum primis in faucibus orci luctus'
                  content='Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.

                  Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. '
                />

                <Accordion 
                  icon={<FaRegIdCard size='25px' />}
                  title='What is Rental Cover and how does it work?'
                  content='Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.

                  Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. '
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQs