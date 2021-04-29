import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { Accordion, AccordionToggle, AccordionCollapse, Button } from 'react-bootstrap';




function GrowingInfo() {

  return (
    <React.Fragment>
      <div>
        <h1>Growing Information</h1>
      </div>
      <div className="container">
        <div className="row row-content">
          <div className="col">
            <Accordion id="accordion">
              <Card className="card" id="git">
                <CardBody>
                  <AccordionToggle as={Button} variant="link" eventKey="0">
                    <CardTitle tag="h4" className="font-weight-bold text-danger">
                      Getting Started  <small> Why garden?</small></CardTitle>
                  </AccordionToggle>
                  <AccordionCollapse eventKey="0">
                    <CardText className="d-none d-sm-block">Gardening is therapy in many ways - get outside, get your hands in
                    the dirt, forget about what is on the computer or the notes on your desk. It is also a family
                    activity and a fun thing to do with your kids outside. The biggest hurdle in gardening for
                    beginners is to understand light. Many new gardeners don't understand the difference between
                    direct and indirect light or full sun and filtered light. Many believe full sun means 16 hours
                    a
                    day, but in reality 8 hours is considered full sun. The first step is to get out there and
                    plant
                    something. It doesn't matter how small you start. The end goal is to grow as much food as
                    possible elimanating the grocers profits and putting the money back in your own pockets.
                        </CardText>
                  </AccordionCollapse>
                </CardBody>
              </Card>
              <Card className="card" id="sweetB">
                <CardBody>
                  <AccordionToggle as={Button} variant="link" eventKey="1">
                    <CardTitle tag="h4" className="collapsed font-weight-bold text-danger">Sweet Beet
                      <small>  Planting Instructions</small></CardTitle>
                  </AccordionToggle>
                  <AccordionCollapse eventKey="1">
                    <CardText className="d-none d-sm-block">Plant the seeds 1 inch apart and about 1/2 inch deep. Each
                    beet seed is actually a little cluster of multiple seeds. Sometimes only one will germinate
                    but
                    often they all will, so you’ll need to thin the seedlings. Wait until they have grown 2 to 4
                    inches tall and thin them to be 3 inches apart. You can simply pull out the weakest plants or
                    cut them off at ground level with scissors. You can start harvesting beets when the roots
                    reach
                    1 inch wide, at this stage they are called baby beets and are very sweet and tender.
                    Start by pulling every other beet leaving the remaining ones to continue growing to full size,
                    this is normally when they reach 1 1/2 to 3 inches wide. Most varieties of beets grown past
                    there maturity will tasty woody and tough. So make sure you harvest them on time.
                        </CardText>
                  </AccordionCollapse>
                </CardBody>
              </Card>
              <Card className="card" id="sweetO">
                <CardBody>
                  <AccordionToggle as={Button} variant="link" eventKey="2">
                    <CardTitle tag="h4" className="collapsed font-weight-bold text-danger">Sweet Onion
                          <small>  Planting Instructions</small></CardTitle>
                  </AccordionToggle>
                  <AccordionCollapse eventKey="2">
                    <CardText className="d-none d-sm-block">Plant onions in early spring once the ground is workable. In-ground
                    gardens and raised beds are both excellent options for growing onions. Space onion plants 6
                    inches apart in rows that are 12 inches apart. Grow them in a sunny spot that has fertile,
                    well-drained soil. Onions aren’t great at taking up water, so it’s important to keep soil
                    moist
                    so their shallow roots can drink up. Water whenever the top inch of soil becomes dry.You can
                    harvest young onions just a few weeks after planting if you want to use them as “spring
                    onions”
                    or scallions. There is no perfect size, just pull when they are big enough to suit you. For
                    full-sized bulbs, let onions grow and mature. They are ready to harvest when the bulbs are big
                    and the tops begin to turn yellow and fall over. Pull them up, shake off the soil, and lay
                    them
                    out to cure with the tops still attached. Any warm, airy location is a good place to do this
                        </CardText>
                  </AccordionCollapse>
                </CardBody>
              </Card>
              <Card className="card" id="nicolaP">
                <CardBody>
                  <AccordionToggle as={Button} variant="link" eventKey="3">
                    <CardTitle tag="h4" className="collapsed font-weight-bold text-danger">Nicola Potato
                          <small>  Planting Instructions</small></CardTitle>
                  </AccordionToggle>
                  <AccordionCollapse eventKey="3">
                    <CardText className="d-none d-sm-block">Potatoes are grown from specially prepared ‘seed’ potatoes (or
                    tubers). It’s important to ‘chit’ the seed potatoes before planting. This means allowing them
                    to
                    start sprouting shoots. Stand them rose end up (the end with the most small dents, or eyes) in
                    egg boxes or trays in a light, frost-free place. The potatoes are ready to plant when the
                    shoots
                    are about 1in long. Rub off the weakest shoots, leaving four per tuber. Potatoes need a sunny
                    site. The traditional planting method is to dig a narrow trench 5in deep. Space the
                    tubers 1ft apart in rows 2ft apart. The tubers are ready to harvest when they’re the size of
                    hens’ eggs.
                        </CardText>
                  </AccordionCollapse>
                </CardBody>
              </Card>
              <Card className="card" id="blueB">
                <CardBody>
                  <AccordionToggle as={Button} variant="link" eventKey="4">
                    <CardTitle tag="h4" className="collapsed font-weight-bold text-danger">Blueberry Hedge
                          <small>  Planting Instructions</small></CardTitle>
                  </AccordionToggle>
                  <AccordionCollapse eventKey="4">
                    <CardText className="d-none d-sm-block">You can plant a blueberry bush at any time of the year, except when
                    the ground is frozen. For the widest range of varieties, it’s best to buy online or via mail
                    order. If planting in the ground, dig a hole that’s a little larger than the plant’s previous
                    pot. Plant to the same depth as the ‘soil tide mark’ (if it’s bare-root) or to the same depth
                    as
                    the pot. Mulch with composted pine needles or bark. Don’t add well-rotted manure as this will
                    make the soil too alkaline. Water generously and continue to water well while the plant
                    establishes. If you’re planting a young plant into a container, choose one that is at least
                    12in
                    in diameter and be sure to use ericaceous compost. Again, plant at the same level that the
                    plant
                    was planted in the field or in its previous pot. Firm in well, water with rainwater and don’t
                    allow the compost to dry out. Blueberries don’t need pruning in their first two years – simply
                    remove any crossing or rubbing branches. Once established, bushes benefit from regular pruning
                    to keep them healthy and productive. Prune while the plants are still dormant in late February
                    or March, when it’s easier to distinguish the fruit buds from the leaf buds (the fruit buds
                    are
                    rounder and fatter) You can start harvesting blueberries from midsummer, over a few weeks as
                    they ripen gradually. Gently pick off the deepest blue berries, leaving the greener ones to
                    continue ripening. It will take several years for your plant to crop heavily but you should
                    enjoy fruits in the first summer.
                        </CardText>
                  </AccordionCollapse>
                </CardBody>
              </Card>
              <Card className="card" id="beastS">
                <CardBody role="tab" className="card-header">
                  <AccordionToggle as={Button} variant="link" eventKey="5">
                    <CardTitle tag="h4" className="collapsed font-weight-bold text-danger">Beast Strawberry
                          <small>  Planting Instructions</small></CardTitle>
                  </AccordionToggle>
                  <AccordionCollapse eventKey="5">
                    <CardText className="d-none d-sm-block">Plant your strawberries so that the base of the crown where the
                    leaves emerge is at soil level. Space them 18-24 inches apart in both directions to
                    allow plenty of room for weeding, watering and picking. Keep plants well watered in dry
                    weather
                    so that the fruits can swell to a good size. Stop mud from splashing up onto the developing
                    fruits by laying down special strawberry mats shortly after planting. Alternatively, use a
                    mulch
                    which will lock in soil moisture while keeping fruits clean. Straw is the traditional choice,
                    hence the name strawberries. Maximize your harvest by using an organic liquid fertilizer
                    that’s
                    high in fruit-promoting potassium. As soon as the first flowers appear, start watering your
                    diluted liquid fertilizer on regularly, at least every two weeks until they’ve finished
                    fruiting. Natural plant fertilizers such as comfrey tea are ideal, or opt for a liquid tomato
                    fertilizer as an alternative. Pick your fruits as soon as they’ve turned red. Enjoy them as
                    soon
                    as possible after picking. You can use a refrigerator to store the fruits, but this does
                    impair
                    the flavor and aroma of the fruits.
                        </CardText>
                  </AccordionCollapse>
                </CardBody>
              </Card>
              <Card className="card" id="billieB">
                <CardBody>
                  <AccordionToggle as={Button} variant="link" eventKey="6">
                    <CardTitle tag="h4" className="collapsed font-weight-bold text-danger">Billie's Blackberry
                          <small>  Planting Instructions</small></CardTitle>
                  </AccordionToggle>
                  <AccordionCollapse eventKey="6">
                    <CardText className="d-none d-sm-block">Blackberries root shallowly, so there’s no need to dig a big hole.
                    Space each plant several feet apart. They will take care of filling themselves in if you so
                    desire. Get them off to a good start with a hearty drink of water. Once your blackberries are
                    in
                    the ground, keep them well mulched. This conserves water, gives them additional nutrition, and
                    keeps down weeds. When the berries turn very dark purple, or black, it’s time to harvest them!
                    They should pop right off the bush when you pick them. If not, try again in a day or two.
                        </CardText>
                  </AccordionCollapse>
                </CardBody>
              </Card>
              <Card className="card" id="sugarS">
                <CardBody>
                  <AccordionToggle as={Button} variant="link" eventKey="7">
                    <CardTitle tag="h4" className="collapsed font-weight-bold text-danger">Sugar Sweet Watermelon
                          <small>  Planting Instructions</small></CardTitle>
                  </AccordionToggle>
                  <AccordionCollapse eventKey="7">
                    <CardText className="d-none d-sm-block">Watermelons are grown from seed. You may be tempted to use seed out
                    of a melon you bought, but don't waste your time. It is almost guaranteed to be a hybrid.
                    Start
                    your watermelon seeds in the ground, right where they are supposed to grow. The soil should be
                    at least 65F for them to germinate. Watermelon seed germinates easily and quickly, within a
                    few
                    days. Watermelon plants outgrow the seedling stage very quickly and they don't like
                    transplanting. Rows should be about 6 ft apart and the plants spaced at 1 foot apart.Telling
                    when a watermelon is ripe is an art. You will get better at it with practice. The first sign
                    to
                    look for is the curly tendril at the stem. Once it is dry, as in, totally dry not just
                    starting
                    to dry off, once it is totally dry, your watermelon may be ready. Maybe. Another sign is the
                    light coloured patch on the bottom of the fruit. It is initially greenish, but as the melon
                    ripens the green tinge disappears and it becomes yellowish. The skin overall becomes duller
                    and
                    tougher. But the most popular way to tell if watermelons are ripe is the sound. Knock them
                    with
                    your knuckles and listen for a dull, hollow sound. The unripe melons have a higher pitched
                    sound. Keep thumping lots of them and comparing until you can tell the difference.
                        </CardText>
                  </AccordionCollapse>
                </CardBody>
              </Card>
              <Card className="card" id="monsterT">
                <CardBody>
                  <AccordionToggle as={Button} variant="link" eventKey="8">
                    <CardTitle tag="h4" className="collapsed font-weight-bold text-danger">Monster Tomatoe
                          <small>  Planting Instructions</small></CardTitle>
                  </AccordionToggle>
                  <AccordionCollapse eventKey="8">
                    <CardText className="d-none d-sm-block">Make a 1/4-inch furrow in the potting mix. Then, sprinkle two to
                    three seeds into the furrow, and cover them with a sprinkling of potting mix. Gently pat down
                    the mix, so the seeds make good contact with the soil. You can spray the surface with water if
                    it doesn’t feel moist. When the seedlings are 2 to 3 inches tall and have a couple sets of
                    true
                    leaves, it's time to pot them in larger containers. In general, 3- to 4-inch containers are a
                    good size, though you might have to move them to larger pots later if you can't plant them
                    outdoors. Once flowers appear, feed your plants weekly with liquid tomato food, such as
                    Tomorite. Keep tomatoes well watered because irregular watering causes fruit to split or
                    develop
                    hard black patches, known as blossom-end rot. This is caused by a lack of calcium, which is
                    found in water. Leave tomatoes on the plants so they can ripen naturally, which greatly
                    improves
                    the flavour. Towards the end of the season, prune off the older leaves to let in more light
                    and
                    prevent grey mould fungus taking hold. If the weather turns cold, pick the trusses to ripen
                    indoors.
                        </CardText>
                  </AccordionCollapse>
                </CardBody>
              </Card>
              <Card className="card" id="gmaC">
                <CardBody>
                  <AccordionToggle as={Button} variant="link" eventKey="9">
                    <CardTitle tag="h4" className="collapsed font-weight-bold text-danger">Grandma's Cucumber
                          <small>  Planting Instructions</small></CardTitle>
                  </AccordionToggle>
                  <AccordionCollapse eventKey="9">
                    <CardText className="d-none d-sm-block">Sow cucumber seeds into pots of peat-free, multi-purpose compost in
                    spring. Keep them in a warm spot to aid successful germination. Pot seedlings on after they
                    have
                    developed their first pair of ‘true’ leaves. All cucumbers need support for their trailing
                    stems. Trellis, bamboo canes or netting work well and you can tie the stems in if necessary.
                    Water regularly and feed weekly with a high potash feed, such as a liquid tomato feed, when
                    plants start flowering. Cucumbers on outdoor plants will be ready from midsummer to early
                    autumn. Indoor cucumbers will be ready sooner. The more cucumbers you pick, the more the plant
                    will produce.
                        </CardText>
                  </AccordionCollapse>
                </CardBody>
              </Card>
              <Card className="card" id="bushB">
                <CardBody>
                  <AccordionToggle as={Button} variant="link" eventKey="10">
                    <CardTitle tag="h4" className="collapsed font-weight-bold text-danger">Bush Bean Seed
                          <small>  Planting Instructions</small></CardTitle>
                  </AccordionToggle>
                  <AccordionCollapse eventKey="10">
                    <CardText className="d-none d-sm-block">To grow bush beans you need a good, moisture-retentive soil, bamboo
                    canes or similar support, and some twine to tie the bamboo canes together. Plant seeds in
                    pots,
                    root-trainers or old toilet roll tubes in April for planting out in late May, or sow seed
                    direct
                    in the ground in May and early June. Bush beans need a strong support. Bush beans are ready to
                    pick 12 to 16 weeks after sowing. The bean pods are at their most tender at 15-20cm long – any
                    longer and they become stringy. Regular picking encourages the plants to produce more flowers,
                    and therefore more young beans. Don’t leave old beans on the plants as this will stop the
                    plants
                    flowering.
                        </CardText>
                  </AccordionCollapse>
                </CardBody>
              </Card>
              <Card className="card" id="queenE">
                <CardBody>
                  <AccordionToggle as={Button} variant="link" eventKey="11">
                    <CardTitle tag="h4" className="collapsed font-weight-bold text-danger">Queen Eggplant
                          <small>  Planting Instructions</small></CardTitle>
                  </AccordionToggle>
                  <AccordionCollapse eventKey="11">
                    <CardText className="d-none d-sm-block">Sow queen eggplant seed indoors as early as January if you have a
                    heated
                    propagator, or from March if you don’t. Transplant seedlings into individual 7.5cm pots, when
                    the first true leaves appear. Eventually, plant into the ground or individually in 30cm pots
                    of
                    peat-free, multi-purpose compost. To encourage plants to fruit, you can either gently tap or
                    shake the flowers with water to help release the pollen, or grow pollinator plants nearby to
                    entice pollinators (this may be an issue in a closed greenhouse). The general rule of
                    harvesting
                    aubergines is to pick fruits before the skin loses its gloss. This can be a symptom of
                    over-ripeness, but check the habit of the variety you are growing as some aubergines have less
                    shiny skins.
                        </CardText>
                  </AccordionCollapse>
                </CardBody>
              </Card>
              <Card className="card mb-5" id="frankenP">
                <CardBody>
                  <AccordionToggle as={Button} variant="link" eventKey="12">
                    <CardTitle tag="h4" className="collapsed font-weight-bold text-danger">Franken-Pumpkin
                          <small>  Planting Instructions</small></CardTitle>
                  </AccordionToggle>
                  <AccordionCollapse eventKey="12">
                    <CardText className="d-none d-sm-block">Sow pumpkin seeds indoors in spring. Soak seeds in water overnight
                    to
                    speed up germination, then sow two seeds into 8cm pots filled with seed compost. Place seeds
                    on
                    their sides and not flat to stop water sitting on top and causing rotting. Place pots on a
                    warm,
                    light windowsill and water well. Transplant young plants into larger pots when big enough to
                    handle. This enables the plants to develop their rootball and grow larger and more robust,
                    before planting out. Then, once all danger of frost has passed in late May or early June,
                    plant
                    them out into their final growing positions. Cover young plants with a cloche to ward against
                    slugs and snails. Pumpkins are ready to harvest when the stem begins to crack and the skin
                    hardens. Pick before the first frosts in October or November, cutting to retain as long a stem
                    as possible.
                        </CardText>
                  </AccordionCollapse>
                </CardBody>
              </Card>
            </Accordion>
          </div>
        </div>
      </div>
    </React.Fragment >
  )
}


export default GrowingInfo;