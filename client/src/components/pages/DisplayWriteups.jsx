import React from 'react';
import Steg from '../../assets/img/base-img/steghide-is-fun.png';

import { styled } from '@mui/material/styles';

import Writeups from '../writeups/Writeups';

const PREFIX = 'DisplayWriteups';
const classes = {
  base: `${PREFIX}-base`,
  mainContent: `${PREFIX}-mainContent`,
  imageBanner: `${PREFIX}-imageBanner`,
  banner: `${PREFIX}-banner`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.base}`]: {
    position: 'relative',
    clear: 'all',
    marginTop: '5vh',
    width: '80vw',
    margin: 'auto',
  },
  [`&.${classes.mainContent}`]: {
    position: 'relative',
    clear: 'all',
    marginTop: '5vh',
    width: '80vw',
    margin: 'auto',
  },
  [`&.${classes.imageBanner}`]: {
    marginTop: '2.4em',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
  [`&.${classes.banner}`]: {
    maxWidth: '70vw',
  },
}));

const DisplayWriteups = () => {
  return (
    <Root className={ classes.base }>
      <div className={ classes.mainContent }>
        <h1>Writeups</h1>
        <p>&nbsp;</p>
        <p>During my experience in HackTheBox and TryHackMe I've been able to get lot of experience and knowledge regarding the cybersecurity domain; I hope that my writeups can be of help to learn something as well.</p>
        <p>I will try to add more writeups as the time passes to provide more and more content to see; for any information, suggestion contact me and I'll be happy to discuss about cyber topics.</p>
        <p>&nbsp;</p>
        <Writeups />
        <div className={ classes.imageBanner }>
          <img className={ classes.banner } src={ Steg } alt="Steganography is fun" />
        </div>
      </div>
    </Root>
  )
};

export default DisplayWriteups;
