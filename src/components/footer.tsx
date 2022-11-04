import * as React from "react";
import CookieConsent from "react-cookie-consent";
import {
  cookieStartText,
  cookieEndText,
  CookieprivacypolicyUrl,
} from "../../src/constants";
import "../../src/main.css";
const Footer = () => {
  React.useEffect(() => {});
  return (
    <>
      <footer className="site-footer">
        <div className="container flex flex-col lg:flex-row justify-between">
          <div className="">
            <ul className="footer-links">
              <li>
                <a href="#">Cookies</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Terms of Sale</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>
          <div className="footer-address">
            <p>Salata Home Office</p>
            <p>16720 Park Row Dr,</p>
            <p>Houston, TX 77084 |(844) 725-2821</p>
          </div>
          <div className="text-center">
            <ul className="social-links">
              <li>
                <a href="#" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="20"
                    viewBox="0 0 10 20"
                  >
                    <path
                      d="M14,6.875H10.25v-2.5a1.25,1.25,0,0,1,1.25-1.25h1.25V0h-2.5A3.75,3.75,0,0,0,6.5,3.75V6.875H4V10H6.5V20h3.75V10h2.5Z"
                      transform="translate(-4)"
                      fill="#fff"
                      fill-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                  >
                    <path
                      d="M22.962,10.98H20.7a7.986,7.986,0,1,1-15.448,0H2.994V21.962a1,1,0,0,0,1,1H21.962a1,1,0,0,0,1-1Zm0-6.988a1,1,0,0,0-1-1H18.968a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h2.994a1,1,0,0,0,1-1ZM12.978,7.986a4.992,4.992,0,1,0,4.992,4.991,4.991,4.991,0,0,0-4.992-4.991m9.984,17.97H2.994a3,3,0,0,1-2.994-3V2.994A2.994,2.994,0,0,1,2.994,0H22.962a2.994,2.994,0,0,1,2.994,2.994V22.959a3,3,0,0,1-2.994,3"
                      fill="#fff"
                      fill-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="19.507"
                    viewBox="0 0 24 19.507"
                  >
                    <path
                      d="M23.953,4.57a10,10,0,0,1-2.825.775,4.958,4.958,0,0,0,2.163-2.723,10.163,10.163,0,0,1-3.127,1.184A4.92,4.92,0,0,0,11.78,8.288,13.938,13.938,0,0,1,1.64,3.162,4.822,4.822,0,0,0,.974,5.637a4.921,4.921,0,0,0,2.188,4.1A4.9,4.9,0,0,1,.934,9.117v.06A4.923,4.923,0,0,0,4.88,14a5,5,0,0,1-2.212.085,4.936,4.936,0,0,0,4.6,3.417,9.867,9.867,0,0,1-6.1,2.1A10.444,10.444,0,0,1,0,19.544a14,14,0,0,0,7.557,2.209,13.9,13.9,0,0,0,14-13.985c0-.21,0-.42-.015-.63A9.935,9.935,0,0,0,24,4.59Z"
                      transform="translate(0 -2.246)"
                      fill="#fff"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.375"
                    height="20"
                    viewBox="0 0 17.375 20"
                  >
                    <path
                      d="M11.494.017C12.586,0,13.669.008,14.753,0a5.191,5.191,0,0,0,1.458,3.475,5.877,5.877,0,0,0,3.533,1.492V8.325a8.92,8.92,0,0,1-3.5-.808,10.3,10.3,0,0,1-1.35-.775c-.008,2.433.008,4.867-.017,7.292a6.365,6.365,0,0,1-1.125,3.283,6.208,6.208,0,0,1-4.925,2.675,6.076,6.076,0,0,1-3.4-.858,6.284,6.284,0,0,1-3.042-4.758c-.017-.417-.025-.833-.008-1.242A6.273,6.273,0,0,1,9.653,7.567c.017,1.233-.033,2.467-.033,3.7a2.859,2.859,0,0,0-3.65,1.767,3.306,3.306,0,0,0-.117,1.342,2.836,2.836,0,0,0,2.917,2.392,2.8,2.8,0,0,0,2.308-1.342,1.923,1.923,0,0,0,.342-.883c.083-1.492.05-2.975.058-4.467.008-3.358-.008-6.708.017-10.058Z"
                      transform="translate(-2.369)"
                      fill="#fff"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <CookieConsent
        enableDeclineButton
        flipButtons
        location="bottom"
        buttonText={"I Accept"}
        cookieName="myAwesomeCookieName2"
        expires={150}
        contentStyle={{ color: "black" }}
        contentClasses="CoRhA"
        buttonStyle={{ color: "white" }}
      >
        {cookieStartText}{" "}
        <a href={CookieprivacypolicyUrl} style={{ color: "red" }}>
          privacy policy
        </a>{" "}
        {cookieEndText}
      </CookieConsent>
    </>
  );
};

export default Footer;
