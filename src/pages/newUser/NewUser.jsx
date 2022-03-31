import "./newUser.css";
export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form action="" className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="">User Name</label>
          <input type="text" className="newUserInput" placeholder="john" />
        </div>

        <div className="newUserItem">
          <label htmlFor="">Full Name</label>
          <input
            type="text"
            className="newUserInput"
            placeholder="john Smith"
          />
        </div>

        <div className="newUserItem">
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="newUserInput"
            placeholder="john@gmail.com"
          />
        </div>

        <div className="newUserItem">
          <label htmlFor="">Password</label>
          <input type="password" className="newUserInput" />
        </div>

        <div className="newUserItem">
          <label htmlFor="">Phone</label>
          <input
            type="text"
            className="newUserInput"
            placeholder="+1 234 567 89"
          />
        </div>

        <div className="newUserItem">
          <label htmlFor="">Address</label>
          <input
            type="text"
            className="newUserInput"
            placeholder="New York | USA"
          />
        </div>

        <div className="newUserItem">
          <label htmlFor="">Gender</label>
          <div className="newUserGender">
            <input type="radio" name="name" id="gender" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="name" id="gender" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="name" id="gender" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label htmlFor="">Active</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="newUserItem">
          <button className="newUserButton">Create</button>
        </div>
      </form>
    </div>
  );
}
