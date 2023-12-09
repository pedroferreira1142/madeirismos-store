/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function Footer() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="https://www.creative-tim.com?ref=nukr-default-footer"
                  target="_blank"
                >
                  Madeirismo
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            Criado por <a href="/">Pedro Ferreira</a>.
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
