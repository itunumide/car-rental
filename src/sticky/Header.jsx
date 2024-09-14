import carlogo from '../assets/car-rental-logo.png'
import Button from '../reusables/Button'

const Header = () => {
  return (
    <div className="sticky p-4 top-8 w-4/5 m-auto flex justify-between items-center text-white rounded-[6rem] bg-[#3B3C36]/20 z-10">
        <img src={carlogo} alt="car logo" />

        <div className="nav">
            <ul className="flex justify-between items-center gap-10 italic font-bold">
                <li>Home</li>
                <li>Rent</li>
                <li>Locations</li>
                <li>FAQ</li>
                <li>About</li>
                <li>Contact</li>
                <li>Log In</li>
            </ul>
        </div>

        <Button
        text = "Request a Car"
        />
    </div>
  )
}

export default Header