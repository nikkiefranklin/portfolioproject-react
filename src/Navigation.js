import React from 'react';


function Navigation() {
  return (
    <header>
        <div>
          <nav className="navbar navbar-expand-lg navbar navbar-light" style={{backgroundColor: '#76b852', fontStyle: 'italic', fontSize: 'x-large', fontWeight: 600, borderTop: '0px'}} id="navBar">
            <div className="container-fluid">
              <a href="#">
                <img src="images\growbigmuscletree.png" alt="Muscle Tree" width={150} height={145} /></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBar" aria-controls="navBar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-5">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="src\Home.js">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="src\Shop.js">Shop</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="src\Growinginfo.js">Growing Information</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="login-container">
              <form action="index.html" id="loginC1">
                <div>
                  <input type="text" placeholder="Username" name="username" id="useN" />
                  <input type="text" placeholder="Password" name="psw" id="password" />
                  <button type="submit" id="myBtn" onclick="myFunction()">Login</button>
                </div>
              </form>
            </div>
          </nav>
        </div>
      </header>
    );
  }


export default Navigation;