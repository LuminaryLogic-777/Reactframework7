import React from "react";
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavRight,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Button,
  Link, // Import Link component
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
        <Block>
          <div className="search-filter-container">
          <form className="search-form">
            <div className="search-input-wrapper">
              <i className="material-icons search-icon"></i>
              <input
                type="search"
                placeholder="Search..."
                className="search-input"
              />
            </div>
          </form>
          <Button
            className="filter-button"
            iconMd="material:filter_list" // You can use any filter icon you prefer
            onClick={() => document.querySelector('.dropdown-sheet').f7Component.open()}
          >
            Filter
          </Button>
        </div>
          <List>
            {Array.from({ length: 10 }).map((_, index) => (
              <ListItem
                key={index}
                title={`Item ${index + 1}`}
                subtitle="One line description"
                mediaItem
                media={
                  <img
                    src={`path_to_image_${index + 1}.jpg`} // Replace with actual image paths
                    alt="Item"
                    style={{ width: "80px", height: "80px" }}
                  />
                }
                footer={
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button icon="f7:heart_fill" />
                    <Button icon="f7:arrow_right_circle_fill" />
                    <Button icon="f7:pin_fill" />
                  </div>
                }
              />
            ))}
          </List>
        </Block>
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
