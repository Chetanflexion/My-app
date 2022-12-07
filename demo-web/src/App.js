import './App.css';
// import natural1 from './Images/natural-1.jpg';
// import natural2 from './Images/natural-2.jpg';
// import natural3 from './Images/natural-3.jpg';

function App() {

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
                  <label>Profile Picture</label>
                  <input type="file" className='file' required />
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

      {/* <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration customeCardRegistration">
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                  <form>

                    <div className="row">
                      <div className="col-md-6 mb-4">

                        <div className="form-outline">
                          <input type="text" id="firstName" className="form-control form-control-lg" />
                          <label className="form-label" for="firstName">First Name</label>
                        </div>

                      </div>
                      <div className="col-md-6 mb-4">

                        <div className="form-outline">
                          <input type="text" id="lastName" className="form-control form-control-lg" />
                          <label className="form-label" for="lastName">Last Name</label>
                        </div>

                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">

                        <div className="form-outline datepicker w-100">
                          <input type="text" className="form-control form-control-lg" id="birthdayDate" />
                          <label for="birthdayDate" className="form-label">Birthday</label>
                        </div>

                      </div>
                      <div className="col-md-6 mb-4">

                        <h6 className="mb-2 pb-1">Gender: </h6>

                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                            value="option1" checked />
                          <label className="form-check-label" for="femaleGender">Female</label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                            value="option2" />
                          <label className="form-check-label" for="maleGender">Male</label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                            value="option3" />
                          <label className="form-check-label" for="otherGender">Other</label>
                        </div>

                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">

                        <div className="form-outline">
                          <input type="email" id="emailAddress" className="form-control form-control-lg" />
                          <label className="form-label" for="emailAddress">Email</label>
                        </div>

                      </div>
                      <div className="col-md-6 mb-4 pb-2">

                        <div className="form-outline">
                          <input type="tel" id="phoneNumber" className="form-control form-control-lg" />
                          <label className="form-label" for="phoneNumber">Phone Number</label>
                        </div>

                      </div>
                    </div>

                    

                    <div className="mt-4 pt-2">
                      <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ................................... navbar start ................................... */}
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="https://pbs.twimg.com/profile_images/1503265097761796096/ee8NFmrG_400x400.png" alt="Flexion Infotech" width="35" height="35" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav> */}
      {/* ................................... navbar end ................................... */}


      {/* ................................... Image slider start ................................... */}
      {/* <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item customeImageSlider active" data-bs-interval="10000">
            <img src={ natural1 } className="d-block w-100" alt="natural" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item customeImageSlider" data-bs-interval="2000">
            <img src={ natural2 } className="d-block w-100" alt="natural" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item customeImageSlider">
            <img src={ natural3 } className="d-block w-100" alt="natural" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
      {/* ................................... Image slider end ................................... */}


      {/* ................................... Accordion start ................................... */}
      {/* <div className="accordion custom" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div> */}
      {/* ................................... Accordion end ................................... */}

      {/* ................................... Card start ................................... */}
      {/* <div className="card customeCard">
        <img src={ natural1 } className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
          <a href="/" className="card-link">Card link</a>
          <a href="/" className="card-link">Another link</a>
        </div>
      </div> */}
      {/* ................................... Card end ................................... */}

    </>
  );
}

export default App;