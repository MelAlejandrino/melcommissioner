import React from "react";
import { useEffect } from "react";
// import Mansprite from './assets/mansprite.gif';
import Facebook from './assets/facebook.png';
import Github from './assets/github.png';
import Twitter from './assets/twitter.png';
import Me from './assets/me.jpg';

function Heading() {
  useEffect(() => {
    const navTab = document.querySelector(".headerNav");
    const headerpage = document.querySelector(".meWrapper");
    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navTab.setAttribute("data-visible", false);
        } else {
          navTab.setAttribute("data-visible", true);
        }
      });
    });

    observer.observe(headerpage);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="meWrapper">
      <div className="headingWrapper">
        <picture>
          <img src={Me} alt="" />
        </picture>
        <div className="aboutMe">
          <h1>Mel Alejandrino</h1>
          <h2>Academic Commissioner</h2>
          <p>
            A student from University of Science and Technology of
            Southern Philippines
          </p>
        </div>
      </div>
      <div className="socialLinks">
        <a
          href="https://github.com/MelAlejandrino"
          target="_blank"
          className="socialItem"
        >
          <img src={Github} alt="" />
          <h1>GITHUB</h1>
        </a>
        <a
          href="https://www.facebook.com/Melkun02"
          target="_blank"
          className="socialItem"
        >
          <img src={Facebook} alt="" />
          <h1>FACEBOOK</h1>
        </a>
        <a
          href="https://twitter.com/MelKun8"
          target="_blank"
          className="socialItem"
        >
          <img src={Twitter} alt="" />
          <h1>TWITTER</h1>
        </a>
      </div>
      <div className="headerNav" data-visible="false">
        <nav>
          <ul role="list">
            <li>
              <a
                href="https://github.com/MelAlejandrino"
                target="_blank"
                className="socialItem"
              >
                <img src={Github} alt="" />
                <h1>GITHUB</h1>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/Melkun02"
                target="_blank"
                className="socialItem"
              >
                <img src={Facebook} alt="" />
                <h1>FACEBOOK</h1>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/MelKun8"
                target="_blank"
                className="socialItem"
              >
                <img src={Twitter} alt="" />
                <h1>TWITTER</h1>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Heading;
