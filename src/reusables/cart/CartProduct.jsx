
import { useState } from "react"
import Button from "../Button"
const CartProduct = ({pic,text}) => {
  // const [userId, setUserId] = useState('');
  //   const [carId, setCarId] = useState('');
  //   const [message, setMessage] = useState('');
  
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  
  //     const url = `https://car-rental-okvm.onrender.com/cart/add/`;
  
  //     try {
  //       const response = await fetch(url, {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       });
  
  //       const result = await response.json();
  
  //       if (response.ok) {
  //         setMessage(`Success: ${result.message}`);
  //       } else {
  //         setMessage(`Error: ${result.message}`);
  //       }
  //     } catch (error) {
  //       setMessage(`Error: ${error.message}`);
  //     }
  //   };
 
  return (
    <div>
      <div className="border-none text-center rounded-lg border-slate-800">
            <img id="cart-img" className="h-64 w-full border-4 rounded-t-lg border-green-950 " src={pic}alt="" />
            <a className="text-xl font-bold text-amber-300" href=""><h4 className="py-4 rounded-b-lg hover:bg-amber-400 hover:text-black duration-300 bg-green-950" > <i className="ri-shopping-cart-2-line"></i>{text}</h4></a>
          </div>
         
    </div>
  )
}

export default CartProduct