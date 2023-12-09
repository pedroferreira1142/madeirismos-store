import React from 'react';
import {Link, useHistory} from 'react-router-dom';
// reactstrap components
import {Collapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container, UncontrolledTooltip} from 'reactstrap';

export const NavbarMenu = ({navBackgroundColor = '', activeScrollTransperency = false, showCart = false}) => {
    const [navbarColor, setNavbarColor] = React.useState(navBackgroundColor);
    const [collapseOpen, setCollapseOpen] = React.useState(false);

    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (
                (document.documentElement.scrollTop > 399 || document.body.scrollTop > 399) &&
                activeScrollTransperency === true
            ) {
                setNavbarColor('');
            } else if (
                (document.documentElement.scrollTop < 400 || document.body.scrollTop < 400) &&
                activeScrollTransperency === true
            ) {
                setNavbarColor('navbar-transparent');
            }
        };
        window.addEventListener('scroll', updateNavbarColor);
        return function cleanup() {
            window.removeEventListener('scroll', updateNavbarColor);
        };
    });
    return (
        <>
            {collapseOpen ? (
                <div
                    id="bodyClick"
                    onClick={() => {
                        document.documentElement.classList.toggle('nav-open');
                        setCollapseOpen(false);
                    }}
                />
            ) : null}
            <Navbar className={'fixed-top ' + navbarColor} color="info" expand="lg">
                <Container>
                    {/*  <Anchor onClick={() => openCart()}>
            <Icon name="Bag" size="20px" color="black500" />
          </Anchor> */}
                    <div className="navbar-translate">
                        <NavbarBrand href="/" id="navbar-brand">
                            Madeirismo
                        </NavbarBrand>
                        <UncontrolledTooltip target="#navbar-brand">
                            Empresa de Brinquedos de Madeira
                        </UncontrolledTooltip>
                        <button
                            className="navbar-toggler navbar-toggler"
                            onClick={() => {
                                document.documentElement.classList.toggle('nav-open');
                                setCollapseOpen(!collapseOpen);
                            }}
                            aria-expanded={collapseOpen}
                            type="button"
                        >
                            <span className="navbar-toggler-bar top-bar"></span>
                            <span className="navbar-toggler-bar middle-bar"></span>
                            <span className="navbar-toggler-bar bottom-bar"></span>
                        </button>
                    </div>
                    <Collapse className="justify-content-end" isOpen={collapseOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink to="/shop" tag={Link}>
                                    Produtos
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">Contacte-nos</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://twitter.com/" target="_blank" id="twitter-tooltip">
                                    <i className="fab fa-pinterest"></i>
                                    <p className="d-lg-none d-xl-none">Twitter</p>
                                </NavLink>
                                <UncontrolledTooltip target="#twitter-tooltip">
                                    Siga-nos no pinterest
                                </UncontrolledTooltip>
                                {/* <SocialIcon  
                      icon="fab fa-pinterest" 
                      className="d-lg-none"
                      href="https://twitter.com" 
                      text="Twitter"
                      id="twitter-tooltip" 
                      toolTip="siga-nos no pinterest/>*/}
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="https://www.facebook.com/CreativeTim?ref=creativetim"
                                    target="_blank"
                                    id="facebook-tooltip"
                                >
                                    <i className="fab fa-facebook-square"></i>
                                    <p className="d-lg-none d-xl-none">Facebook</p>
                                </NavLink>
                                <UncontrolledTooltip target="#facebook-tooltip">
                                    Like us on Facebook
                                </UncontrolledTooltip>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                                    target="_blank"
                                    id="instagram-tooltip"
                                >
                                    <i className="fab fa-instagram"></i>
                                    <p className="d-lg-none d-xl-none">Instagram</p>
                                </NavLink>
                                <UncontrolledTooltip target="#instagram-tooltip">
                                    Follow us on Instagram
                                </UncontrolledTooltip>
                            </NavItem>
                        </Nav>
                        <ProfileMenu />
                    </Collapse>
                </Container>
            </Navbar>
        </>
    );
};
