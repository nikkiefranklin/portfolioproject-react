import React from 'react';
import Slide1 from './images/harvesting-basket-2x.jpg';
import Slide2 from './images/specC.jpg';
import Slide3 from './images/rootsH.jpg';


function Home() {
  return (
    <React.Fragment>
      <div>
      <div class="container">
        <div class="row">
          <div class="col" style={{textalign: "center"}} >
            <h1 class="mt-4 mb-4" id="indexT" href="/">Home of Grow Big</h1>
          </div>
        </div>
      </div>
        <div className="container">
          <div className="row row-content">
            <div className="col-md">
              <div id="homeCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#homeCarousel" data-slide-to={0} className="active" />
                  <li data-target="#homeCarousel" data-slide-to={1} />
                  <li data-target="#homeCarousel" data-slide-to={2} />
                </ol>
                <div className="carousel-inner" id="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src={ Slide1 } alt={"Basket full of harvest"} />
                    <div className="carousel-caption">
                      <h3 className="bg-dark">Bountiful Harvest</h3>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={ Slide2 } alt={"Specaility crops"} />
                    <div className="carousel-caption">
                      <h3 className="bg-dark">Grow Big Everyday</h3>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={ Slide3 } alt={"Root Harvest"} />
                    <div className="carousel-caption">
                      <h3 className="bg-dark">You're capabale!</h3>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#homeCarousel" role="button" data-slide="prev" id="preButton">
                  <span className="carousel-control-prev-icon bg-danger h-25 w-50" style={{ borderColor: '#76b852', borderStyle: 'ridge', borderWidth: '6px' }} />
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#homeCarousel" role="button" data-slide="next" id="forwButton">
                  <span className="carousel-control-next-icon bg-danger h-25 w-50" style={{ borderColor: '#76b852', borderStyle: 'ridge', borderWidth: '6px' }} />&gt;
                  <span className="sr-only">Next</span>
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}


export default Home;