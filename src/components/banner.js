import { Link } from "react-router-dom";
import "../css/index.css";
import logo from "../images/logo.png";

const Banner = () => {
  return (
    <div className="banner_box">
      <img src={logo} height="15%" width="15%" />
      <div className="banner-box-translate">
        Translate in:&nbsp;
        <button>Hindi</button>&nbsp;
        <button>Bengali</button>
      </div>
    </div>
  );
};

export default Banner;
