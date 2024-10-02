

const CartProduct = ({pic,text}) => {
  return (
    <div>
      <div className="border-none text-center rounded-lg border-slate-800">
            <img id="cart-img" className="h-64 w-full border-4 rounded-t-lg border-green-950 " src={pic}alt="" />
            <a className="text-xl font-bold text-amber-300" href=""><h4 className="py-4 rounded-b-lg hover:bg-amber-400 hover:text-black duration-300 bg-green-950"> <i className="ri-shopping-cart-2-line"></i>{text}</h4></a>
          </div>
    </div>
  )
}

export default CartProduct