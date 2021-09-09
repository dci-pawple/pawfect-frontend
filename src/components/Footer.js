import React from "react";

export default function Footer() {
  return (
    <footer>
      <ul className="flex">
        <li>
          {/* <h5 className="copyright"> */}
            <p>
              All copyright &copy; for <b>Magda, Julia, Phil, Dusan and Mo</b>
            </p>
          {/* </h5> */}
        </li>

        <li>
          <a href="#" className="footerstyle fa fa-lg fa-facebook"></a>
        </li>
        <li>
          <a href="#" className="footerstyle fa fa-lg fa-instagram"></a>
        </li>
        <li>
          <a href="#" className="footerstyle fa fa-lg fa-twitter"></a>
        </li>
        <li>
          <a href="#" className="footerstyle fa fa-lg fa-linkedin-square"></a>
        </li>

        <li id="help">
          <h4 className="footer-list-header"></h4>
        </li>
        <li>
          <a
            href=""
            className="footerstyle generic-anchor footer-list-anchor"
            itemprop="significantLink"
          >
            CONTACT
          </a>
        </li>
        <li>
          <a
            href=""
            className="footerstyle generic-anchor footer-list-anchor"
            itemprop="significantLink"
          >
            About us
          </a>
        </li>
        <li id="faq">
          <a
            href=""
            className="footerstyle generic-anchor footer-list-anchor"
            itemprop="significantLink"
          >
            FAQ
          </a>
        </li>
        <li id="terms">
          <a
            href=""
            className="footerstyle generic-anchor footer-list-anchor"
            itemprop="significantLink"
          >
            Terms
          </a>
        </li>
        <li id="privacy">
          <a
            href=""
            itemprop="significantLink"
            className="footerstyle generic-anchor footer-list-anchor"
          >
            Privacy
          </a>
        </li>
      </ul>
    </footer>
  );
}
