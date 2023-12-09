import React from 'react';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import {UserSelectors} from './../../store/user/selector';

// reactstrap components
import {Collapse, Navbar, NavItem, NavLink, Nav, Container, UncontrolledTooltip} from 'reactstrap';
import {CollapseButton} from './collapseButton';
import {SocialIcon} from './socialIcon';
import {BrandIcon} from './brandIcon';
import {ProfileMenu} from './../profileMenu';
import {useSelector} from 'react-redux';

const screenWidth = window.screen.width;

const NavbarMenu = ({navBackgroundColor = 'navbar-transparent', activeScrollTransperency = true}) => {
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    const [navbarColor, setNavbarColor] = React.useState(navBackgroundColor);
    const isLoggedIn = useSelector(UserSelectors.getIsLoggedIn);

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
            <Navbar
                className={'fixed-top ' + navbarColor}
                color="info"
                expand="lg"
                style={{maxWidth: screenWidth - 17}}
            >
                <Container>
                    <div className="navbar-translate">
                        <BrandIcon brandName="Madeirismos" />

                        <CollapseButton
                            onClick={() => {
                                document.documentElement.classList.toggle('nav-open');
                                setCollapseOpen(!collapseOpen);
                            }}
                            collapseOpen={collapseOpen}
                        />
                    </div>
                    <Collapse className="justify-content-end" isOpen={collapseOpen} navbar>
                        <Nav navbar>
                            {isLoggedIn && (
                                <NavItem>
                                    <NavLink to="shop" tag={Link} id="shop-button">
                                        Produtos
                                    </NavLink>
                                    <UncontrolledTooltip target="#shop-button">
                                        Veja os nossos produtos
                                    </UncontrolledTooltip>
                                </NavItem>
                            )}
                            <NavItem>
                                <SocialIcon
                                    id="pinterest-tooltip2"
                                    href="/"
                                    iconClass="fab fa-pinterest"
                                    toolTip="Siga-nos no pinterest"
                                    menuText="Pinterest"
                                />
                            </NavItem>
                            <NavItem>
                                <SocialIcon
                                    id="facebook-tooltip"
                                    href="/"
                                    iconClass="fab fa-facebook-square"
                                    toolTip="Dê um gosto no facebook"
                                    menuText="Facebook"
                                />
                            </NavItem>
                            <NavItem>
                                <SocialIcon
                                    id="instagram-tooltip"
                                    href="/"
                                    iconClass="fab fa-instagram"
                                    toolTip="Follow us on Instagram"
                                    menuText="Instagram"
                                />
                            </NavItem>

                            {isLoggedIn ? (
                                <Box style={{margin: collapseOpen ? '10px 10px' : '0px 0px 0px 100px'}}>
                                    <ProfileMenu />
                                </Box>
                            ) : (
                                <NavItem style={{marginLeft: 70}}>
                                    <NavLink to="login" tag={Link} id="login-button">
                                        Entrar
                                    </NavLink>
                                    <UncontrolledTooltip target="#login-button">Autentique-se</UncontrolledTooltip>
                                </NavItem>
                            )}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarMenu;
