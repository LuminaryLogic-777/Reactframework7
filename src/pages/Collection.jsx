import React from 'react';
import {
  Page,
  Navbar,
  BlockTitle,
  Block,
  Button,
  Toolbar
} from 'framework7-react';

const CollectionPage = () => {
  return (
    <Page className="grid-demo">
      {/* Navbar with title */}
      <Navbar backLink="Back">
        <div className="navbar-title">Collection</div>
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
              iconMd="material:filter_list"
              onClick={() => document.querySelector('.dropdown-sheet').f7Component.open()}
            >
              Filter
            </Button>
          </div>
        </Block>

        {/* Grid Layout */}
        <BlockTitle>Grid Layout</BlockTitle>
        <Block>
          <div className="grid grid-cols-2 grid-gap">
            <div className="grid-item">2 cols</div>
            <div className="grid-item">2 cols</div>
          </div>
          <div className="grid grid-cols-4 grid-gap">
            <div className="grid-item">4 cols</div>
            <div className="grid-item">4 cols</div>
            <div className="grid-item">4 cols</div>
            <div className="grid-item">4 cols</div>
          </div>
          <div className="grid grid-cols-3 grid-gap">
            <div className="grid-item">3 cols</div>
            <div className="grid-item">3 cols</div>
            <div className="grid-item">3 cols</div>
          </div>
          <div className="grid grid-cols-5 grid-gap">
            <div className="grid-item">5 cols</div>
            <div className="grid-item">5 cols</div>
            <div className="grid-item">5 cols</div>
            <div className="grid-item">5 cols</div>
            <div className="grid-item">5 cols</div>
          </div>
        </Block>

        <BlockTitle>No Gap between Columns</BlockTitle>
        <Block>
          <div className="grid grid-cols-2">
            <div className="grid-item">2 cols</div>
            <div className="grid-item">2 cols</div>
          </div>
          <div className="grid grid-cols-4">
            <div className="grid-item">4 cols</div>
            <div className="grid-item">4 cols</div>
            <div className="grid-item">4 cols</div>
            <div className="grid-item">4 cols</div>
          </div>
          <div className="grid grid-cols-3">
            <div className="grid-item">3 cols</div>
            <div className="grid-item">3 cols</div>
            <div className="grid-item">3 cols</div>
          </div>
          <div className="grid grid-cols-5">
            <div className="grid-item">5 cols</div>
            <div className="grid-item">5 cols</div>
            <div className="grid-item">5 cols</div>
            <div className="grid-item">5 cols</div>
            <div className="grid-item">5 cols</div>
          </div>
        </Block>

        <BlockTitle>Responsive Grid</BlockTitle>
        <Block>
          <p>Grid cells have different sizes on Phone/Tablet</p>
          <div className="grid grid-cols-1 medium-grid-cols-2 grid-gap">
            <div className="grid-item">1 col / medium 2 cols</div>
            <div className="grid-item">1 col / medium 2 cols</div>
          </div>
          <div className="grid grid-cols-2 medium-grid-cols-4 grid-gap">
            <div className="grid-item">2 col / medium 4 cols</div>
            <div className="grid-item">2 col / medium 4 cols</div>
            <div className="grid-item">2 col / medium 4 cols</div>
            <div className="grid-item">2 col / medium 4 cols</div>
          </div>
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
