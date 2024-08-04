import React from "react";
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
} from "framework7-react";

import Logo from "../assets/images/logo.png";
import cityBanner from "../assets/images/citybanner_1.webp";
import Countries from "../components/Countries";

const HomePage = () => {
  return (
    <Page name="home">
      {/* Top Navbar */}
      <Navbar large sliding={false}>
        <NavLeft>
          <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
        </NavLeft>
        <NavTitle sliding>Best5</NavTitle>
        <NavRight>
          <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right" />
        </NavRight>
        <NavTitleLarge>Best5</NavTitleLarge>
      </Navbar>

      {/* Page content */}
      <Block>
        <div
          className="homepage-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            fontFamily: "Arial, sans-serif",
            overflow: "hidden",
            background: "linear-gradient(#f9f6ef, #f5e0c6)",
          }}
        >
          <header
            className="header"
            style={{
              color: "white",
              padding: "40px",
              width: "100%",
              textAlign: "center",
              position: "relative",
              height: "240px",
              backgroundImage: `url(${cityBanner})`,
              backgroundSize: "cover",
              backgroundPosition: "center", // Center the image
              backgroundRepeat: "no-repeat", // Ensure the image is not repeated
            }}
          >
            <div
              className="logo-container"
              style={{
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "8px",
                borderRadius: "50%",
                backgroundColor: "white",
              }}
            >
              <img
                src={Logo}
                alt="Logo"
                className="logo"
                style={{
                  width: "128px",
                  height: "128px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </div>
          </header>

          <section
            className="content"
            style={{
              flex: 1,
              padding: "20px",
              textAlign: "center",
              overflow: "auto",
              marginTop: "40px",
              width: "100%",
            }}
          >
            <h1>
              <strong
                style={{
                  marginTop: "0",
                  padding: "10px 20px",
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                Find the Best Businesses, Services, Professionals and Landmarks
              </strong>
            </h1>

            {/* Countries Component */}
            <Countries />

            <p
              className="description"
              style={{
                color: "#666",
                marginTop: "10px",
                textAlign: "center",
                zIndex: "10",
                padding: "16px",
                fontSize: "12px",
              }}
            >
              Find addresses, phone numbers, reviews and ratings, photos, maps
              of businesses.
            </p>
          </section>
        </div>
      </Block>

      {/* Toolbar */}
      <Toolbar bottom>
        <Link>Left Link</Link>
        <Link>Right Link</Link>
      </Toolbar>
    </Page>
  );
};

export default HomePage;
