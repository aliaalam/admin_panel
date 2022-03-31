import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Panel UI</span>
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
            <Settings />
          </div>
          <img
            src="https://feeds.abplive.com/onecms/images/uploaded-images/2021/06/24/c7514515e386b98ea994dbd42240a4f6_original.jpg?impolicy=abp_cdn&imwidth=720"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
