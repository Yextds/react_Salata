// src/template/404.tsx
import {
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  GetPath,
  Template,
} from "@yext/pages";
import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { liveFavIcon } from "../constants";

// The path must be exactly 404.html
export const getPath: GetPath<TemplateProps> = () => {
  return "404.html";
};

// Add a title to the page
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  return {
    title: "Page Not Found",
    tags: [
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
          href: liveFavIcon,
        },
      },
    ],
  };
};

// Template that will show as the page
const FourOhFour: Template<TemplateRenderProps> = ({ document }) => {
  const { _site } = document;
  console.log("fjjlf");
  return (
    <>
      <Header nav={document._site.c_navigation} />
      <div className="container" style={{ marginTop: "100px" }}>
        <h2 style={{ textAlign: "center", color: "#2e8661" }}>
          you must’ve reached the bottom of the bowl
        </h2>
        <p style={{ textAlign: "center" }}>
          <span>
            The page you’re looking for couldn’t be found. Use the navigation or
            return to
          </span>
          <a
            href="Salata.com"
            style={{ marginLeft: "5px", marginRight: "5px", color: "red" }}
          >
            Salata.com
          </a>{" "}
          <span>for a fresh start.</span>
        </p>
      </div>
      <Footer
        address={document._site.address}
        c_privacyPolicy={document._site.c_privacyPolicy}
        c_salataHomeOffice={document._site.c_salataHomeOffice}
        c_termsOfService={document._site.c_termsOfService}
        c_sitemap={document._site.c_sitemap}
        mainPhone={document._site.mainPhone}
        c_menu={document._site.c_menu}
        c_newsroom={document._site.c_newsroom}
        c_growWithUs={document._site.c_growWithUs}
        c_downloadapp={document._site.c_downloadapp}
        c_giveYourInboxATasteLift={document._site.c_giveYourInboxATasteLift}
        c_signUp={document._site.c_signUp}
        facebookPageUrl={document._site.facebookPageUrl}
        twitterHandle={document._site.twitterHandle}
        instagramHandle={document._site.instagramHandle}
        c_android={document._site.c_android}
        c_apple={document._site.c_apple}
        emails={document._site.emails[0]}
        c_copyright={document._site.c_copyright}
      />
    </>
  );
};

export default FourOhFour;
