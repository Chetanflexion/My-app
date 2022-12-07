import './My.css';

function My() {
    return (
        <>
            <div className="container">
                <header>My</header>

                <form action="#">
                    <div className="form first">

                        <div className="details ID">
                            <span className="title">Account Details</span>

                            <div className="fields">
                                <div className="input-field">
                                    <label>Email</label>
                                    <input type="email" className='customInput' placeholder="Enter Email" required />
                                </div>
                            </div>

                            <div className="fields">
                                <div className="input-field">
                                    <label>Password</label>
                                    <input type="password" placeholder="Enter Password" required />
                                </div>
                            </div>

                            <div className="input-field">
                                <a href="./forgot_password.js">Forgot Password</a>
                            </div>

                            <button type="button" className="verifiEmail">
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

export default My;