import PagesHero from "../reusables/PagesHero"


const Cart = () => {
  return (
    <div>
        <PagesHero />
        <div className=" ">
      <ul className="list-decimal flex items-center justify-center gap-14 mt-28 text-3xl border-red-400">
        <li className=" border-red-400">
          Shopping Cart
        </li> 
        <i class="ri-arrow-right-line"></i>
        <li> Checkout Details</li>
        <i class="ri-arrow-right-line"></i>
        <li>Order Complete</li>
      </ul>
      </div>
        <h1>Cart</h1>
    </div>
  )
}

export default Cart