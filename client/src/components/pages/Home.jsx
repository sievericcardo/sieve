import banner from '../../assets/img/base-img/home-banner.webp';

import React from 'react';

import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import Banner from '../assets/Banner';
import Projects from '../projects/Projects';
import Articles from '../articles/Articles';

import {
  GitHub,
  LinkedIn,
  Twitter,
} from '@mui/icons-material';

const PREFIX = 'Home';
const classes = {
  mainContent: `${PREFIX}-mainContent`,
  homeTitle: `${PREFIX}-homeTitle`,
  homeSubTitle: `${PREFIX}-homeSubTitle`,
  subTitle: `${PREFIX}-subTitle`,
  icons: `${PREFIX}-icons`,
  icon: `${PREFIX}-icon`,
};

const Root = styled('div')(({ theme }) => ({}));

const Block = styled('div')({
  width: '80vw',
  margin: '0 auto',
})

const Home = () => {
  return(
    <Root className={ classes.base }>
      <Banner childToParent={[banner, "Home page banner"]}/>
      <div className='homeMainContent'>
        <Typography variant="h1" className='homeTitle'>
          My personal portfolio
        </Typography>
        <Typography variant="body1">
          Since I was very little I had a passion for technology, playing games and trying to figure out how they worked and how they were created; I can still remember the hours playing Final Fantasy X and trying to understand how that characters could move, how the various event were handled and how everything was so perfectly scripted.
          During high school I started learning C with the Kernighan Ritchie manual, and learning a bit of C++ and Java as well. During the last two years I also started learning HTML and Blender for 3D art (I was still mesmerized with the beauty of Final Fantasy X and I wanted to be able to create that).
        </Typography>
        <p>&nbsp;</p>
        <Typography variant="body1">
          After an initial study in computer engineering, I decided to move into computer science to have the chance to work more on programming projects and have a higher knowledge in languages, algorithms, compilers and the functionalities of the computer architecture.
        </Typography>
        <p>&nbsp;</p>
        <Typography variant="body1">
          Even now that passion still lies and I keep learning and studying to improve and I constantly look for challenges and improvement possibilities.
        </Typography>
      </div>
      <Block>
        <Typography variant="h3" className='subTitle'>
          Projects
        </Typography>
        <Projects />
        <Typography variant="h3" className='subTitle'>
          Writeups
        </Typography>
        <Articles />
      </Block>
      <div>
        <p>&nbsp;</p>
        <Typography 
          variant="h2"
          className='homeSubTitle' 
          style={{ textAlign: 'center' }}>
          Come see me on other platform as well
        </Typography>
        <div className='icons'>
          <a href="https://www.linkedin.com/in/sieve-riccardo/" rel="noreferrer" className={ classes.links } target="_blank">
            <LinkedIn className={ classes.largeIcon + ' icon' } fontSize="large" />
          </a>
          <a href="https://github.com/sievericcardo/" rel="noreferrer" className={ classes.links } target="_blank">
            <GitHub className={ classes.largeIcon + ' icon' } fontSize="large" />
          </a>
          <a href="https://twitter.com/RiccardoSieve" rel="noreferrer" className={ classes.links } target="_blank">
            <Twitter className={ classes.largeIcon + ' icon' } fontSize="large" />
          </a>
        </div>
      </div>
    </Root>
  )
};

export default Home;
