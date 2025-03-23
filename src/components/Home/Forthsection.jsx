
import bird1 from "../../assets/bird1.png";
import bird2 from "../../assets/bird2.png";

export default function Forthsection() {
  return (
    <div className="flex">
      <div className="text-center ">
        <img src={bird1} alt="" />
      </div>
      <div className="items-center justify-center text-center lg:my-20 justify-items-center">
        <h1 className="items-center justify-center text-center text-orange-700 lg:text-6xl text-bold lg:my-20 justify-items-center" >In You Sewing Designer The Best Day To Wake Up Today</h1>
      </div>
      <div className="flex ">
        <img src={bird2} alt="" />
      </div>
    </div>
  );
}
