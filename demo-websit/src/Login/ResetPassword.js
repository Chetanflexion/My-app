import './ResetPassword.css'

function ResetPassword() {
  return (
    <>
      <div className="container">
        <header>ResetPassword</header>

        <form action="#">
          <div className="form first">
            
            <div className="details ID">
              <span className="title">Forgot Password</span>

              <div className="fields">
                <div className="input-field">
                  <label>Email</label>
                  <input type="email" placeholder="Enter Email" required />
                </div>

              </div>
              <button type="button" className="verifiEmail">
                <span className="btnText">Verifi Email</span>
                <i className="uil uil-navigator"></i>
              </button>
            </div>

          </div>
        </form>
      </div>
    </>
  );
}

export default ResetPassword;