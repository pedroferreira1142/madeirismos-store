import React from 'react';
// reactstrap components
import {Container, Row, Col} from 'reactstrap';

// core components
import LandingPageHeader from 'components/Headers/LandingPageHeader.js';
import Block from '../components/block/block';
import {Layout} from 'components/layout/layout';


function LandingPage() {
    React.useEffect(() => {
        document.body.classList.add('landing-page');
        document.body.classList.add('sidebar-collapse');
        document.documentElement.classList.remove('nav-open');
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove('landing-page');
            document.body.classList.remove('sidebar-collapse');
        };
    }, []);

    return (
        <Layout>
            <LandingPageHeader />
            <Block className="section section-about-us">
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto text-center" md="8">
                            <h2 className="title">Who we are?</h2>
                            <h5 className="description">
                                According to the National Oceanic and Atmospheric Administration, Ted, Scambos,
                                NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year
                                down to low ice extent in the Pacific and a late drop in ice extent in the Barents Sea.
                            </h5>
                        </Col>
                    </Row>
                    <Block className="separator separator-primary"></Block>
                    <Block className="section-story-overview">
                        <Row>
                            <Col md="6">
                                <Block
                                    className="image-container image-left"
                                    style={{
                                        backgroundImage: 'url(' + require('assets/img/login.jpg').default + ')',
                                    }}
                                >
                                    <p className="blockquote blockquote-info">
                                        "Over the span of the satellite record, Arctic sea ice has been declining
                                        significantly, while sea ice in the Antarctichas increased very slightly"{' '}
                                        <br></br>
                                        <br></br>
                                        <small>-NOAA</small>
                                    </p>
                                </Block>
                                <Block
                                    className="image-container"
                                    style={{
                                        backgroundImage: 'url(' + require('assets/img/bg3.jpg').default + ')',
                                    }}
                                ></Block>
                            </Col>
                            <Col md="5">
                                <Block
                                    className="image-container image-right"
                                    style={{
                                        backgroundImage: 'url(' + require('assets/img/bg1.jpg').default + ')',
                                    }}
                                ></Block>
                                <h3>So what does the new record for the lowest level of winter ice actually mean</h3>
                                <p>
                                    The Arctic Ocean freezes every winter and much of the sea-ice then thaws every
                                    summer, and that process will continue whatever happens with climate change. Even if
                                    the Arctic continues to be one of the fastest-warming regions of the world, it will
                                    always be plunged into bitterly cold polar dark every winter. And year-by-year, for
                                    all kinds of natural reasons, there’s huge variety of the state of the ice.
                                </p>
                                <p>
                                    For a start, it does not automatically follow that a record amount of ice will melt
                                    this summer. More important for determining the size of the annual thaw is the state
                                    of the weather as the midnight sun approaches and temperatures rise. But over the
                                    more than 30 years of satellite records, scientists have observed a clear pattern of
                                    decline, decade-by-decade.
                                </p>
                                <p>
                                    The Arctic Ocean freezes every winter and much of the sea-ice then thaws every
                                    summer, and that process will continue whatever happens with climate change. Even if
                                    the Arctic continues to be one of the fastest-warming regions of the world, it will
                                    always be plunged into bitterly cold polar dark every winter. And year-by-year, for
                                    all kinds of natural reasons, there’s huge variety of the state of the ice.
                                </p>
                            </Col>
                        </Row>
                    </Block>
                </Container>
            </Block>
        </Layout>
    );
}

export default LandingPage;
