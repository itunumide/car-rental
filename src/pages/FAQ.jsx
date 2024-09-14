import PagesHero from "../reusables/PagesHero"
import femaleDriver from '../assets/post5.jpg'
import { IoIosHelpCircle } from "react-icons/io";



const FAQ = () => {
  return (
    <div>
      <PagesHero />

      <h1>FAQ</h1>

      {/*  ========== Boxification ==========  */}

      <div className="container">
        <div className="wrapper">
          <div className="LHS">
            <div className="left-top">
              <img src={femaleDriver} alt="" />
            </div>

            <div className="left-bottom"></div>
          </div>

          <div className="RHS">
            <div className="right-top"></div>
            <div className="right-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ