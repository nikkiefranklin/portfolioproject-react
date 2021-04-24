import React from 'react';
import { Navbar, NavItem, NavLink, NavbarBrand, Form, FormGroup } from 'reactstrap';


function Navigation() {
  return (
    <React.Fragment>
      <header>
        <div>
          <Navbar className="navbar navbar-expand-lg navbar navbar-light " style={{ backgroundColor: '#76b852', fontStyle: 'italic', fontSize: 'x-large', fontWeight: 600, borderTop: '0px', }} id="navBar">
            <div className="container-fluid" >
              <NavbarBrand href="#">
                <img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/66695105_2516962315256961_3588613985202601984_n.png?_nc_cat=102&ccb=1-3&_nc_sid=e3f864&_nc_ohc=Vcq4tMy99tcAX_8PvVx&_nc_ht=scontent-iad3-1.xx&oh=8c35edd133d6b6f3f6ca8789be47c131&oe=60AA34A2" alt="Muscle Tree" width={150} height={145} /></NavbarBrand>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBar" aria-controls="navBar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" >
                <nav className="navbar-nav me-auto mb-2 mb-lg-0 ml-5 nav-pills" >
                  <NavItem>
                    <NavLink href="./home" role="tab">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="./shop" role="tab">Shop</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="./growinginfo" role="tab">Growing Information</NavLink>
                  </NavItem>
                </nav>
              </div>
            </div>
            <div>
              <Form action="/home" id="loginC1" className="container-fluid">
                
                  <FormGroup className="d-flex my-2" id="login-container" >
                    <input type="text" placeholder="Username" name="username" id="useN" className="flex-fill col-5 m-1" />



                    <input type="text" placeholder="Password" name="psw" id="password" className="flex-fill col-5 m-1" />



                    <button type="submit" id="myBtn" className="flex-fill col-2 m-1 small btn-sm">Login</button>
                  </FormGroup>

                

              </Form>
            </div>
          </Navbar>
        </div>
      </header>
    </React.Fragment >
  );
}


export default Navigation;