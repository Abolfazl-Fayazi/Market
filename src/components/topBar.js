import "../asset/styles/sass/topBar.scss";
import TruckIcon from "../asset/icons/truckIcon";
import { Link } from "@mui/material";
const TopBar = () => {
  return (
    <div className="topBar__background">
      <div className="topBar__container">
        <div>
          <TruckIcon />
        </div>
        <div>
          <text className="topBar__text">
            FREE SHIPPING ON ORDERS OF $50 OR MORE
          </text>
        </div>
        <div className="topBar__link">
          <Link>DETAILS</Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
