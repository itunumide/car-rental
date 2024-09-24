// import PagesHero from "../reusables/PagesHero"


// const Contact = () => {
//   return (
//     <div>
//       <PagesHero />

//       <h1>Contact</h1>
//     </div>
//   )
// }

// export default Contact


import React from 'react'
import PagesHero from '../reusables/PagesHero'

const Contact = () => {
  return (
    <div>
      {/* <PagesHero /> */}
      <div className='w-[100%] flex justify-center items-center'>
        <div className="container flex justify-center items-center w-[100%] mt-4">
          <div className="wrapper flex flex-col justify-center items-center w-[90%]"> 
            <div className="get-in-touch-div flex flex-col justify-center items-center">
              <div className="contact-us bg-gray-300 text-customAccordionColor #F1F1F1 p-4 text-center rounded-3xl text-2xl mb-6 w-[250px]">
                Contact us today                   
              </div>

              <div className="get-in-touch w-[370px] text-center italic text-black text-3xl font-bold mb-8">
                Get in touch with us and ask your <span className='underline text-customYellow'>questions!</span>
              </div>
            </div>

            <div className='form-container bg-formBg w-full rounded-2xl'>
              <form action="" autoComplete='on' className='flex flex-col justify-center items-center text-customAccordionColor m-10'>
                <div className="name-and-email flex w-full justify-between">
                  <div className="name text-sm leading-loose">
                    <label htmlFor="">Your Name (*)</label> <br />
                    <input type="text"  className='w-[450px] h-[45px] rounded-2xl'/>
                  </div>

                  <div className="email text-sm leading-loose">
                    <label htmlFor="">Your Email (*)</label> <br />
                      <input type="text" className='w-[450px] h-[45px] rounded-2xl' />
                  </div>
                </div> <br />

                <div className="phone-and-department flex w-full justify-between">
                  <div className="phone text-sm leading-loose">
                    <label htmlFor="">Phone</label> <br />
                    <input type="text" className='w-[450px] h-[45px] rounded-2xl' />
                  </div>
                    

                  <div className="department text-sm leading-loose">
                    <label htmlFor="">Department</label> <br />
                      <select name="" id="" className='w-[450px] h-[45px] rounded-2xl px-4'>
                        <option value="">Business Department</option>
                        <option value="">Personal Department</option>
                        <option value="">Support Department</option>
                        <option value="">Others</option>
                      </select>
                                {/* <input type="text" className='w-[450px] h-[45px] rounded-2xl' /> */}
                  </div>
                </div> <br />

                <div className="question leading-loose">
                  <label>Your Question</label> <br />
                  <textarea name="message" rows="7" cols="125" id="" className='rounded-2xl'></textarea> <br />
                </div>

                <div className="button-div mt-4">
                  <button className='bg-customYellow text-black w-[120px] h-7 p-6 rounded-3xl font-bold flex justify-center items-center text-xl'>
                    Submit   
                  </button>
                </div>
                  
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact