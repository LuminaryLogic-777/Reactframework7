import React from 'react';
import { Page, Navbar, Block, List, ListItem, ListInput, Link } from 'framework7-react';

import Kolkata from '../assets/images/Kolkata-West-Bengal.jpg';
import Lucknow from '../assets/images/Lucknow-Uttar-Pradesh.jpg';
import Agra from '../assets/images/Agra-Uttar-Pradesh.jpg';
import Hyderabad from '../assets/images/Hyderabad-Telangana.jpg';
import searchIcon from '../assets/images/icons8-search-30.png';

export default () => {
  const cities = [
    { name: 'Kolkata', image: Kolkata },
    { name: 'Lucknow', image: Lucknow },
    { name: 'Agra', image: Agra },
    { name: 'Hyderabad', image: Hyderabad },
  ];

  const cityList = [
    { name: 'Raipur', state: 'Chhattisgarh', image: Kolkata },
    { name: 'Hyderabad', state: 'Telangana', image: Kolkata },
    { name: 'Chandigarh', state: 'Chandigarh', image: Kolkata },
    { name: 'Jaipur', state: 'Rajasthan', image: Kolkata },
  ];

  return (
    <Page name="city">
      <Navbar title="Top Cities in India" backLink="Back" />

      {/* City Icons */}
      <Block>
        <div className="city-icons">
          {cities.map((city) => (
            <ListItem
              key={city.name}
              title={city.name}
              className="city-icon"
              link={`/collections/`} // Replace with appropriate route
            >
              <img src={city.image} alt={city.name} className="city-image" />
            </ListItem>
          ))}
        </div>
      </Block>

      {/* Search Bar */}
      <Block>
        <div className="search-bar" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={searchIcon}
            alt="Search Icon"
            className="search-icon"
            style={{ marginRight: '10px', width: '20px' }}
          />
          <ListInput
            type="text"
            placeholder="Search your city"
            className="search-input"
            style={{ width: '100%' }}
          />
        </div>
      </Block>

      {/* City List */}
      <Block>
        <List>
          {cityList.map((city) => (
            <ListItem
              key={city.name}
              className="city-list-item"
              link={`/collections/${city.name}`} // Replace with appropriate route
            >
              <img src={city.image} alt={city.name} className="city-list-image" />
              <div>
                <p>{city.name} - {city.state}</p>
              </div>
            </ListItem>
          ))}
        </List>
      </Block>
    </Page>
  );
};
