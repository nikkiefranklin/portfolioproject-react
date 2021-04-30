import React, { useState } from 'react';
import {Component} from 'react'
import Slide1 from './images/harvesting-basket-2x.jpg';
import Slide2 from './images/specC.jpg';
import Slide3 from './images/rootsH.jpg';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import Card1 from './images/card1.png';
import Card2 from './images/card2b.jpg';
import Card3 from './images/card3b.jpg';
import { Card, CardImg, CardTitle, CardText, CardDeck, CardBody, NavLink, Form, FormGroup, Label, Input, FormText, Button, FormFeedback } from 'reactstrap';
import { render } from '@testing-library/react';
//import PlacesAutocomplete from 'react-places-autocomplete';
//import { geocodeByAddress, geocodeByPlaceId, getLatLng, yarn } from 'react-places-autocomplete';

const items = [
  {
    src: Slide1,
    altText: "Bountiful Harvest",
    caption: "Bountiful Harvest"
  },
  {
    src: Slide2,
    altText: "Grow Big Everyday",
    caption: "Grow Big Everyday"
  },
  {
    src: Slide3,
    altText: "You're capabale!",
    caption: "You're capabale!"
  }
];

const Carousel1 = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }


  const slides = items.map((item) => {
    return (

      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className='d-block w-100' />
        <CarouselCaption className="caption bg-dark d-block" captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <React.Fragment>
      <div>
        <h1 >Home of Grow Big</h1>
      </div>
      <div className="container">
        <div className="row row-content" id="homeCarousel">
          <div className="col-md">
            <Carousel activeIndex={activeIndex}
              next={next}
              previous={previous}
            >
              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
              {slides}
            </Carousel>
            <CarouselControl className="prev-icon bg-danger" direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl className="next-icon bg-danger" direction="next" directionText="Next" onClickHandler={next} />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <CardDeck>
          <Card className="card mb-3" id="card1">
            <CardImg src={Card1} className="card-img-top" alt="Grow your own food" />
            <CardBody className="card-body bg-success">
              <CardTitle className="cardT" tag="h4">About Us</CardTitle>
              <CardText className="card-text">Grow Big is a dedicated to teaching everyone how to grow their own food. There are
              many factors that determine how big your harvest is. We aim to simply that process with easy to follow
              instructions</CardText>
            </CardBody>
          </Card>
          <Card className="card mb-3" id="card2">
            <CardImg src={Card2} className="card-img-top" alt="strawberries" />
            <CardBody className="card-body bg-success">
              <CardTitle className="cardT" tag="h4">Shop</CardTitle>
              <CardText className="card-text">Come check out the shop to purchase locally grown produce or starter seeds.<br /><NavLink className="text-danger font-weight-bold font-italic text-uppercase" href="./shop">Click Here</NavLink></CardText>
            </CardBody>
          </Card>
          <Card className="card mb-3" id="card3">
            <CardImg src={Card3} className="card-img-top" alt="Michgan growing zones" />
            <CardBody className="card-body bg-success">
              <CardTitle className="cardT" tag="h4">Growing Information</CardTitle>
              <CardText className="card-text">We provide growing information specifiaclly for the state of Michigan. We don't over
              complicate the process. We provide simple easy to follow instructions that will increase your
              harvests.<br /><NavLink className="text-danger font-weight-bold font-italic text-uppercase" href="./growinginfo">Click Here</NavLink></CardText>
            </CardBody>
          </Card>
        </CardDeck>
      </div>
    </React.Fragment >
  );
}

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fName: '',
      lName: '',
      inputEmail: '',
      inputPassword: '',
      inputAddress: '',
      inputAddress2: '',
      inputCity: '',
      inputState: '',
      inputZip: '',
      gridCheck: false,
      touched: {
        fName: false,
        lName: false,
        inputEmail: false,
        inputPassword: false
      }
    };

    this.handleChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log('Current state is: ' + JSON.stringify(this.state));
    alert('Current state is: ' + JSON.stringify(this.state));
    event.preventDefault();
  }


render() {
return (
  <React.Fragment>
    <Carousel1></Carousel1>
    <div>
      <div className="container mt-5 mb-5" id="regForm">
        <Form onSubmit={this.handleSubmit} className="inset">
          <h2 className="text-center">Register Here</h2><br />
          <div className="form-row">
            <FormGroup className="form-group col-md-6">
              <Label htmlFor="fName">First Name</Label>
              <Input type="text" className="form-control" id="fName" name="fName" placeholder="First Name" value={this.state.fName}
                onChange={this.handleInputChange} />
            </FormGroup>
            <FormGroup className="form-group col-md-6">
              <Label htmlFor="lName">Last Name</Label>
              <Input type="text" className="form-control" id="lName" name="lName" placeholder="Last Name" value={this.state.lName}
                onChange={this.handleInputChange} />
            </FormGroup>
          </div>
          <div className="form-row">
            <FormGroup className="form-group col-md-6">
              <Label htmlFor="inputEmail">Email</Label>
              <Input type="email" className="form-control" id="inputEmail" name="inputEmail" placeholder="Email" value={this.state.inputEmail}
                onChange={this.handleInputChange} />
            </FormGroup>
            <FormGroup className="form-group col-md-6">
              <Label htmlFor="inputPassword">Password</Label>
              <Input type="password" className="form-control" id="inputPassword" name="inputPassword" placeholder="Password" value={this.state.inputPassword}
                onChange={this.handleInputChange} />
            </FormGroup>
          </div>
          <FormGroup className="form-group">
            <Label htmlFor="inputAddress">Address</Label>
            <Input type="text" className="form-control" id="inputAddress" name="inputAddress" placeholder="1234 Main St" value={this.state.inputAddress}
              onChange={this.handleInputChange} />
          </FormGroup>
          <FormGroup className="form-group">
            <Label htmlFor="inputAddress2">Address 2</Label>
            <Input type="text" className="form-control" id="inputAddress2" name="inputAddress2" placeholder="Apartment, studio, or floor" value={this.state.inputAddress2}
              onChange={this.handleInputChange} />
          </FormGroup>
          <div className="form-row">
            <FormGroup className="form-group col-md-6">
              <Label htmlFor="inputCity">City</Label>
              <Input type="text" className="form-control" id="inputCity" name="inputCity" placeholder="City" value={this.state.inputCity}
                onChange={this.handleInputChange} />
            </FormGroup>
            <FormGroup className="form-group col-md-4">
              <Label htmlFor="inputState">State</Label>
              <Input type="text" className="form-control" id="inputState" name="inputState" placeholder="State" value={this.state.inputState}
                onChange={this.handleInputChange} />
            </FormGroup>
            <FormGroup className="form-group col-md-2">
              <Label htmlFor="inputZip">Zip</Label>
              <Input type="text" className="form-control" name="inputZip" id="inputZip" value={this.state.inputZip}
                onChange={this.handleInputChange} />
            </FormGroup>
          </div>
          <FormGroup check>
            <Input type="checkbox" id="gridCheck" checked={this.state.gridCheck}
              onChange={this.handleInputChange} /> {' '}
            <Label htmlFor="gridCheck">
              Register Me
              </Label>
          </FormGroup>
          <Button size="lg" type="submit" className="btn btn-success">Sign In</Button>
        </Form>
      </div>
    </div>
  </React.Fragment>
);}
}

export default Home;