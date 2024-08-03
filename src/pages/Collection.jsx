import React from "react";
import {
  Page,
  Navbar,
  NavTitle,
  Toolbar,
  BlockTitle,
  Button,
} from "framework7-react";


const CollectionPage = () => {
  return (
    <Page>
      {/* Navbar with title and menu button */}
      <Navbar backLink="Back">
        <NavTitle>Collection</NavTitle>
      </Navbar>

      {/* Main Content */}
      <div className="content-wrapper">
        <BlockTitle className="block-title block-title-large">
          Collection
        </BlockTitle>

        <div className="GridRow amajan-list">
          <div className="grid grid-cols-4 grid-gap">
            {/* Repeated Grid Items */}
            {[...Array(9)].map((_, index) => (
              <div className="grid-item" key={index}>
                <div className="user-logo">
                  <span>Arijit janaaa</span>
                </div>
                <div className="pro-image">
                  {/* Add the image here */}
                  <img
                    src="./images/logo512.png"
                    alt="Description of the image"
                    className="image-class"
                  />
                </div>

                <div className="GridRow">
                  <span className="badge color-red">5</span>
                  <span className="badge color-red">5</span>
                  <span className="badge color-red">5</span>
                  <span className="badge color-red">5</span>
                  <span className="badge color-red">5</span>
                </div>
                <div className="pro-discription">
                  Birds Chirping in Space 360°Birds Chirping in Space
                  360°Birds Chirping in Space 360°Birds Chirping in Space
                  360°Birds Chirping in Space 360°Birds Chirping
                </div>
                <div className="GridRow card-footer-link">
                  <a href="#" className="button">
                    1
                  </a>
                  <a href="#" className="button">
                    2
                  </a>
                  <a href="#" className="button">
                    3
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <Toolbar bottom>
        <div className="toolbar-inner">
          <Button>Filter</Button>
        </div>
      </Toolbar>
    </Page>
  );
};

export default CollectionPage;
