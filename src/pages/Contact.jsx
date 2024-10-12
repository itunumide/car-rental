import React, { useState } from 'react';
import PageHero from '../reusables/PagesHero'


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    question: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name) {
      tempErrors.name = "Name is required";
      isValid = false;
    }
    
    if (!formData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is not valid";
      isValid = false;
    }

    if (!formData.phone) {
      tempErrors.phone = "Phone is required";
    } else if (!/^\d+$/.test(formData.phone)) {
      tempErrors.phone = "Phone must contain only digits";
    }

    if (!formData.question) {
      tempErrors.question = "Please ask your question";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      // handling the form submission logic here (e.g., sending data to an API)
      setFormData({
        name: '',
        email: '',
        phone: '',
        department: '',
        question: '',
      });
    }
  };

  return (
    <div>
        <PageHero />
        <div className='w-full flex justify-center items-center'>
            <div className="container flex justify-center items-center w-full mt-4">
                <div className="wrapper flex flex-col justify-center items-center w-[90%]">
                    <div className="get-in-touch-div flex flex-col justify-center items-center">
                        <div className="contact-us bg-gray-300 text-customAccordionColor p-4 text-center rounded-3xl text-2xl mb-6 w-[250px]">
                            Contact us today                   
                        </div>

                        <div className="get-in-touch w-[370px] text-center italic text-black text-3xl font-bold mb-8">
                            Get in touch with us and ask your <span className='underline text-customYellow'>questions!</span>
                        </div>
                    </div>

                    <div className='form-container bg-formBg w-full rounded-2xl'>
                        <form onSubmit={handleSubmit} autoComplete='on' className='flex flex-col justify-center items-center text-formLabel m-10'>
                            <div className="name-and-email flex flex-col md:flex-row md:justify-between w-full">
                                <div className="name text-sm leading-loose w-full md:w-[48%]">
                                    <label className='text-lightGray'>Your Name (*)</label> <br />
                                    <input 
                                        type="text" 
                                        name="name" 
                                        value={formData.name}
                                        onChange={handleChange} 
                                        className='w-full h-[45px] rounded-2xl p-4 mt-2' 
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                </div>

                                <div className="email text-sm leading-loose w-full md:w-[48%] mt-5 md:mt-0">
                                    <label className='text-lightGray'>Your Email (*)</label> <br />
                                        <input 
                                            type="text" 
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange} 
                                            className='w-full h-[45px] rounded-2xl p-4 mt-2' 
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>
                            </div> 
                            <br />

                            <div className="phone-and-department flex flex-col md:flex-row md:justify-between w-full">
                                <div className="phone text-sm leading-loose w-full md:w-[48%]">
                                    <label className='text-lightGray'>Phone</label> <br />
                                    <input 
                                        type="text" 
                                        name="phone" 
                                        value={formData.phone}
                                        onChange={handleChange} 
                                        className='w-full h-[45px] rounded-2xl p-4 mt-2' 
                                    />
                                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                </div>

                                <div className="department text-sm leading-loose w-full md:w-[48%] mt-5 md:mt-0">
                                    <label className='text-lightGray'>Department</label> <br />
                                    <select name="" id="" className='w-full h-[45px] rounded-2xl mt-2 p-2'>
                                        <option>Business Department</option>
                                        <option>Personal Department</option>
                                        <option>Support Department</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                            </div> 
                            <br />

                            <div className="question leading-loose w-full">
                                <label className='text-lightGray'>Your Question</label> <br />
                                <textarea 
                                    name="question" 
                                    rows="7" 
                                    value={formData.question}
                                    onChange={handleChange} 
                                    className='w-full rounded-2xl p-4 mt-2'>
                                </textarea>
                                {errors.question && <p className="text-red-500 text-xs mt-1">{errors.question}</p>}
                            </div>

                            <div className="button-div mt-4">
                                <button type="submit" className='bg-customYellow text-black w-[120px] h-7 p-6 rounded-3xl font-bold flex    justify-center items-center text-xl'>
                                Submit   
                                </button>
                            </div>
                        </form>
                    
                    </div>
                </div>
            </div>
        </div> 
    </div>
  );
}

export default Contact;



