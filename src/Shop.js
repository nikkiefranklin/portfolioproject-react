import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardBody, CardFooter } from 'reactstrap';
import Shop1 from "./images/shop01.jpg";
import Shop2 from "./images/shop02.jpg";
import Shop3 from "./images/shop03.jpg";
import Shop4 from "./images/shop04.jpg";
import Shop5 from "./images/shop05.jpg";
import Shop6 from "./images/shop06.jpg";
import Shop7 from "./images/shop07.jpg";
import Shop8 from "./images/shop08.jpg";
import Shop9 from "./images/shop09.jpg";
import Shop10 from "./images/shop10.jpg";
import Shop11 from "./images/shop11.jpg";
import Shop12 from "./images/shop12.jpg";

function Shop () {
      return (
        <React.Fragment>
      <div>
        <h1 >Grow Big Shop</h1>
      </div>
      <div>
        <div className="container">
          <CardDeck className="card-deck mb-5">
            <Card className="card">
              <CardImg src={Shop1} className="card-img-top" alt="..." />
              <CardBody className="card-body">
                <CardTitle tag="h5" className="card-title">Sweet Beet</CardTitle>
                <CardText className="card-text">Sweet Beet Beet has it all—sweet flavor, outstanding color, high yields and great
                  disease resistance. 1 pack of seeds contains 150 seeds.</CardText><br />
              </CardBody>
              <CardFooter className="card-footer">
                <form className="small-text">
                  <a>$2.99</a><br />
                  <label htmlFor="quantity">Quantity</label><br />
                  <input type="number" id="quantity" name="quantity" min={1} max={25} />
                </form><br />
                <Button href="#" className="btn btn-dark">Add to cart</Button>
              </CardFooter>
            </Card>
            <Card className="card">
              <CardImg src={Shop2} className="card-img-top" alt="..." />
              <CardBody className="card-body">
                <CardTitle tag="h5" className="card-title">Sweet Onion</CardTitle>
                <CardText className="card-text">This sweet, firm onion has straw-colored skin and yellowish flesh that matures into
                  a very uniform shape and size. 1 pack of seeds contains 150 seeds.</CardText>
              </CardBody>
              <CardFooter className="card-footer">
                <form>
                  <a>$2.99</a><br />
                  <label htmlFor="quantity">Quantity</label><br />
                  <input type="number" id="quantity" name="quantity" min={1} max={25} />
                </form><br />
                <Button href="#" className="btn btn-dark">Add to cart</Button>
              </CardFooter>
            </Card>
            <Card className="card">
              <CardImg src={Shop3} className="card-img-top" alt="..." />
              <CardBody className="card-body">
                <CardTitle tag="h5" className="card-title">Nicola Potato</CardTitle>
                <CardText className="card-text">A beautiful golden yellow inside and out, Nicola has a mild nutty flavor and is
                  great for baking, boiling or roasting. 1 pack of seeds contains 150 seeds.</CardText>
              </CardBody>
              <CardFooter className="card-footer">
                <form>
                  <a>$6.99</a><br />
                  <label htmlFor="quantity">Quantity</label><br />
                  <input type="number" id="quantity" name="quantity" min={1} max={25} />
                </form><br />
                <Button href="#" className="btn btn-dark">Add to cart</Button>
              </CardFooter>
            </Card>
            <Card className="card">
              <CardImg src={Shop4} className="card-img-top" alt="..." />
              <CardBody className="card-body">
                <CardTitle tag="h5" className="card-title">Blueberry Hedge</CardTitle>
                <CardText className="card-text">Berries are medium to large and very sweet when ripened on the bush. Yield on a
                  mature bush is above average at 8 to 10 pounds per bush. Productivity is high due to an extended, 5
                  weeklong harvest season. 1 6" starter plant.</CardText>
              </CardBody>
              <CardFooter className="card-footer">
                <form>
                  <a>$25.99</a><br />
                  <label htmlFor="quantity">Quantity</label><br />
                  <input type="number" id="quantity" name="quantity" min={1} max={25} />
                </form><br />
                <Button href="#" className="btn btn-dark">Add to cart</Button>
              </CardFooter>
            </Card>
          </CardDeck>
        </div>
        <div className="container">
          <CardDeck className="card-deck mb-5">
            <div className="card">
              <img src={Shop5} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Beast Strawberry</h5>
                <p className="card-text">Beast produces very large, wide fruit of superb quality. Great for fresh
                  eating—with or without sugar. 1 pack of seeds contains 150 seeds.</p>
              </div>
              <div className="card-footer">
                <form>
                  <a>$4.99</a><br />
                  <label htmlFor="quantity">Quantity</label><br />
                  <input type="number" id="quantity" name="quantity" min={1} max={25} />
                </form><br />
                <a href="#" className="btn btn-dark">Add to cart</a>
              </div>
            </div>
            <div className="card">
              <img src={Shop6} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Billie's Blackberry</h5>
                <p className="card-text">Delicious flavor, thornless, heat tolerant variety is not plagued by foliar
                  diseases—and it produces high yields of glossy black, medium-sized berries that are perfect for
                  snacking or making into jams, jellies and juice. 1 pack of seeds contains 150 seeds.</p>
              </div>
              <div className="card-footer">
                <form>
                  <a>$5.99</a><br />
                  <label htmlFor="quantity">Quantity</label><br />
                  <input type="number" id="quantity" name="quantity" min={1} max={25} />
                </form><br />
                <a href="#" className="btn btn-dark">Add to cart</a>
              </div>
            </div>
            <div className="card">
              <img src={Shop7} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Sugar Sweet Watermelon</h5>
                <p className="card-text">The only thing oversized is the flavor—rich and incredibly sweet. Compact vines
                  produce plenty of 6- to 10-lb. fruits packed with sweet red-orange flesh. 1 pack of seeds contains
                  50 seeds.</p>
              </div>
              <div className="card-footer">
                <form>
                  <a>$5.99</a><br />
                  <label htmlFor="quantity">Quantity</label><br />
                  <input type="number" id="quantity" name="quantity" min={1} max={25} />
                </form><br />
                <a href="#" className="btn btn-dark">Add to cart</a>
              </div>
            </div>
            <div className="card">
              <img src={Shop8} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Monster Tomatoe</h5>
                <p className="card-text">Monster packs full size pink tomato flavor, with a unique balance of sweetness
                  and acidity. Highly productive, indeterminate plants. 1 pack of seeds contains 150 seeds.</p>
              </div>
              <div className="card-footer">
                <form>
                  <a>$3.99</a><br />
                  <label htmlFor="quantity">Quantity</label><br />
                  <input type="number" id="quantity" name="quantity" min={1} max={25} />
                </form><br />
                <a href="#" className="btn btn-dark">Add to cart</a>
              </div>
            </div>
          </CardDeck>
        </div>
        <div className="container">
          <CardDeck className="card-deck mb-5">
            <div className="card">
              <img src={Shop9} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Grandma's Cucumber</h5>
                <p className="card-text">Grandma's bears heavy yields of straight, block-like, smooth fruits with dark
                  green skins and white flesh. Cukes have a very small seed cavity, tender skins and a sweet, mild
                  flavor. 1 pack of seeds contains 150 seeds.</p>
              </div>
              <div className="card-footer">
                <form>
                  <a>$1.99</a><br />
                  <label htmlFor="quantity">Quantity</label><br />
                  <input type="number" id="quantity" name="quantity" min={1} max={25} />
                </form><br />
                <a href="#" className="btn btn-dark">Add to cart</a>
              </div>
            </div>
            <div className="card">
              <img src={Shop10} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Bush Bean Seed</h5>
                <p className="card-text">Strong, dwarf plants produce high yields of huge, dark green, attractive pods
                  that have excellent flavor and texture—and no staking is required. 1 pack of seeds contains 150
                  seeds.</p>
              </div>
              <div className="card-footer">
                <form>
                  <a>$2.99</a><br />
                  <label htmlFor="quantity">Quantity</label><br />
                  <input type="number" id="quantity" name="quantity" min={1} max={25} />
                </form><br />
                <a href="#" className="btn btn-dark">Add to cart</a>
              </div>
            </div>
            <div className="card">
              <img src={Shop11} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Queen Hybrid Eggplant</h5>
                <p className="card-text">Meaty, white flesh does not turn brown. Delicious fruits do not turn bitter.
                  Glossy 6-8 in. fruits can weigh over ½ lb. Produces full-sized fruits through the summer. 1 pack of
                  seeds contains 150 seeds.</p>
              </div>
              <div className="card-footer">
                <form>
                  <a>$4.99</a><br />
                  <label htmlFor="quantity">Quantity</label><br />
                  <input type="number" id="quantity" name="quantity" min={1} max={25} />
                </form><br />
                <a href="#" className="btn btn-dark">Add to cart</a>
              </div>
            </div>
            <div className="card">
              <img src={Shop12} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Franken-Pumpkin</h5>
                <p className="card-text">Franken is a great dual-purpose variety for baking, carving and decorations—and
                  it matures earlier than many other pumpkin varieties. It bears 13-15 lb., round, dark orange
                  pumpkins with thick, well-attached handles. 1 pack of seeds contains 150 seeds.</p>
              </div>
              <div className="card-footer">
                <form>
                  <a>$6.99</a><br />
                  <label htmlFor="quantity">Quantity</label><br />
                  <input type="number" id="quantity" name="quantity" min={1} max={25} />
                </form><br />
                <a href="#" className="btn btn-dark">Add to cart</a>
              </div>
            </div>
          </CardDeck>
        </div>
      </div>
      </React.Fragment>
    );
  }

export default Shop;