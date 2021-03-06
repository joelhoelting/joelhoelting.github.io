import React from 'react';
import Link from 'gatsby-link';
import Radium from 'radium';
import Markdown from 'react-markdown';

import profilePic from '../../assets/profile.jpg';
import about from './about';

const About = () => {
  const styles = {
    container: {
      maxWidth: '650px',
      margin: '0 auto'
    },
    image: {
      borderRadius: '100%',
      display: 'block',
      margin: '0 auto',
      border: '4px solid #24255d',
      '@media (max-width: 700px)': {
        width: '40%'
      },
    },
    header: {
      textAlign: 'center',
      margin: '20px 0'
    },
    resume: {
      textAlign: 'center',
      display: 'block',
      textDecoration: 'underline',
      fontSize: '2rem',
      fontFamily: 'Code Bold',
      color: '#24255d'
    }
  };

  const { container, image, header, resume } = styles;

  return (
    <div style={container}>
     <img style={image} src={profilePic} />
     <h1 style={header}>About Me</h1>
     <Markdown source={about} />
    </div>
  )
};

export default Radium(About);
