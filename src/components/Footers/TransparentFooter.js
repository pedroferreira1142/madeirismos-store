/*eslint-disable*/
import React from 'react';

// reactstrap components
import {Container} from 'reactstrap';

const TransparentFooter = () => {
    return (
        <footer className="footer">
            <Container>
                <nav>
                    <ul>
                        <li>
                            <a href="https://www.creative-tim.com?ref=nukr-transparent-footer" target="_blank">
                                Pedro Ferreira
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="copyright" id="copyright">
                    © {new Date().getFullYear()} -{' '}
                    <a href="https://www.invisionapp.com?ref=nukr-transparent-footer" target="_blank">
                        Madeirismos
                    </a>
                </div>
            </Container>
        </footer>
    );
};

export default TransparentFooter;
