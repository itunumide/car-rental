import Benefit from "./Benefit";
import b1 from "../assets/b-1.jpg";
import b2 from "../assets/b-2.jpg";
import b3 from "../assets/b-3.jpg";
import b4 from "../assets/b-4.jpg";
import p1 from "../assets/p-1.png";
import p2 from "../assets/p-2.png";
import p3 from "../assets/p-3.png";
import p4 from "../assets/p-4.png";

const Benefits = () => {
  return (
    <div className="flex justify-center items-center gap-9">
      <Benefit image={b1} pic={p1}/>
      <Benefit image={b2} pic={p2}/>
      <Benefit image={b3} pic={p3}/>
      <Benefit image={b4} pic={p4}/>
    </div>
  );
}

export default Benefits;
