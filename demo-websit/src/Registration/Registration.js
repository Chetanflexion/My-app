import './Registration.css';

function Registration() {
  return (
    <>
      <div className="container">
        <header>Registration</header>

        <form action="#">
          <div className="form first">
            <div className="details personal">
              <span className="title">Profile Picture</span>
              <div className="fields customeFile">
                <div className="input-field">
                  <input type="file" className='file' accept="image/*" required />
                </div>
              </div>
            </div>

            <div className="details ID">
              <span className="title">Personal Details</span>

              <div className="fields">
                <div className="input-field">
                  <label>First Name</label>
                  <input type="text" placeholder="Enter your first name" required />
                </div>

                <div className="input-field">
                  <label>Last Name</label>
                  <input type="text" placeholder="Enter your last name" required />
                </div>

                <div className="input-field">
                  <label>Mobile Number</label>
                  <input type="number" placeholder="Enter mobile number" required />
                </div>

                <div className="input-field">
                  <label>Gender</label>
                  <select title="gender" required>
                    <option disabled selected>Select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                  </select>
                </div>

                <div className="input-field customeAddress">
                  <label>Address</label>
                  <input type="text" placeholder="Enter Address" required />
                </div>

              </div>

            </div>

            <div className="details ID">
              <span className="title">Account Details</span>

              <div className="fields">
                <div className="input-field">
                  <label>Email</label>
                  <input type="email" placeholder="Enter Email" required />
                </div>

                <div className="input-field">
                  <label>Password</label>
                  <input type="password" placeholder="Enter Password" required />
                </div>

                <div className="input-field">
                  <label>Confirm Password</label>
                  <input type="password" placeholder="Enter Confirm Password" required />
                </div>

              </div>
              <button type="button" className="verifiEmail">
                <span className="btnText">Verifi Email</span>
                <i className="uil uil-navigator"></i>
              </button>
            </div>

            <div className="details ID">
              <span className="title">Email Verification</span>

              <div className="fields">
                <div className="input-field">
                  <label>Verification Code</label>
                  <input type="number" placeholder="Enter Verification Code" required />
                </div>
              </div>
              <button type="button" className="sumbit" onClick={() => window.location.reload(true)}>
                <span className="btnText">Submit</span>
                <i className="uil uil-navigator"></i>
              </button>

            </div>

          </div>
        </form>
      </div>
    </>
  );
}

export default Registration;