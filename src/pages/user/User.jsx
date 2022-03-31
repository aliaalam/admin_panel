import { Link } from "react-router-dom";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://feeds.abplive.com/onecms/images/uploaded-images/2021/06/24/c7514515e386b98ea994dbd42240a4f6_original.jpg?impolicy=abp_cdn&imwidth=720"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUserName">Anna Becke</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 789</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">annaback99@email</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <lable>User Name</lable>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="annabeck99"
                />
              </div>

              <div className="userUpdateItem">
                <lable>Full Name</lable>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Anna Becker"
                />
              </div>

              <div className="userUpdateItem">
                <lable>Email</lable>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="annabeck99@gmail.com"
                />
              </div>

              <div className="userUpdateItem">
                <lable>Phone</lable>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="+1 234 567 89"
                />
              </div>

              <div className="userUpdateItem">
                <lable>Address</lable>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="New York | USA"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://feeds.abplive.com/onecms/images/uploaded-images/2021/06/24/c7514515e386b98ea994dbd42240a4f6_original.jpg?impolicy=abp_cdn&imwidth=720"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input
                  type="file"
                  name=""
                  id="file"
                  style={{ display: "none" }}
                />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
