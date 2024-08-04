import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Page, BlockTitle, Block, List, ListItem, Link } from 'framework7-react';

// Importing image assets
import indiaLogo from '../assets/images/india_logo.png';
import usaLogo from '../assets/images/USA-Flag.png';
import germanyLogo from '../assets/images/Germany-Flag.png';
import ausLogo from '../assets/images/Australia-Flag.png';
import worldMap from '../assets/images/World_map_blank_gmt.svg';

const Countries = () => {
  const navigate = useNavigate();

  return (
    <Page
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        marginTop: '20px',
        backgroundImage: `url(${worldMap})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflowX: 'auto',
        padding: '20px',
      }}
    >
      <Navbar title="Choose a Country" />
      <BlockTitle style={{ textAlign: 'center', color: 'black', marginBottom: '20px' }}>
        Choose a Map
      </BlockTitle>
      <Block
        style={{
          width: '100%',
          maxWidth: '600px',
          margin: '0 auto',
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '8px',
        }}
      >
        <List>
          {[
            { src: indiaLogo, alt: 'India', code: 'IN', path: '/city/' },
            { src: usaLogo, alt: 'USA', code: 'US', path: '/city/', grayscale: true },
            { src: germanyLogo, alt: 'Germany', code: 'GM', path: '/city/', grayscale: true },
            { src: ausLogo, alt: 'Australia', code: 'AUS', path: '/city/', grayscale: true },
          ].map((country, index) => (
            <ListItem
              key={index}
              link={country.path}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px' }}
              
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={country.src}
                  alt={country.alt}
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    marginRight: '10px',
                    filter: country.grayscale ? 'grayscale(100%)' : 'none',
                  }}
                />
                <span style={{ fontWeight: 'bold', color: '#333' }}>{country.alt}</span>
              </div>
              <Link style={{ fontSize: '14px', color: '#007aff' }}>{country.code}</Link>
            </ListItem>
          ))}
        </List>
      </Block>
    </Page>
  );
};

export default Countries;
