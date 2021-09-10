import React from "react";

export default function Footer() {
  return (
    <footer>

      <aside className="copy">
        <p>
          All copyright &copy; for <b>Magda, Julia, Phil, Dusan and Mo</b>
        </p>
      </aside>
    
      <aside className="social">
        <a
          href="https://www.facebook.com/Pawfect-100884952347295/"
          target="blank"
          className="footerstyle fa fa-lg fa-facebook"
        ></a>

        <a
          href="https://www.instagram.com/pawfect.7/"
          target="blank"
          className="footerstyle fa fa-lg fa-instagram"
        ></a>

        <a
          href="https://twitter.com/pawfect7/"
          target="blank"
          className="footerstyle fa fa-lg fa-twitter"
        ></a>

        <a
          href="https://www.linkedin.com/in/paw-fect-07a739220/"
          target="blank"
          className="footerstyle fa fa-lg fa-linkedin-square"
        ></a>
      </aside>

      <aside className="help">
        <ul>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Terms</a>
          </li>
          <li>
            <a href="">Privacy</a>
          </li>
        </ul>
      </aside>
    </footer>
  );
}
