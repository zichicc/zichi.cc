import React from 'react';
import { FaTwitter, FaMedium } from 'react-icons/fa';
import { BsDiscord, BsGithub, BsHeartFill } from 'react-icons/bs';
import { SiSubstack } from 'react-icons/si';
import { FiArrowRight } from 'react-icons/fi';
import { DISCORD, GITHUB, MEDIUM, SUBSTACK, TWITTER } from '../config';

export const Footer: React.FC = ({}) => {
  return (
    <footer
    </footer>
  );
};

const MediaIcons = () => {
  return (
    <div className='h-8 flex w-full items-center justify-center space-x-8 transition-all duration-200 text-3xl text-primary/70'>
      {TWITTER.link !== undefined ? (
        <a
          className='hover:text-4xl hover:text-primary w-7'
          href={TWITTER.link}
          target='_blank'
          rel='noreferrer'>
          <FaTwitter />
        </a>
      ) : (
        <></>
      )}

      {MEDIUM.link !== undefined ? (
        <a
          className='hover:text-4xl hover:text-primary w-7'
          href={MEDIUM.link}
          target='_blank'
          rel='noreferrer'>
          <FaMedium />
        </a>
      ) : (
        <></>
      )}

      {SUBSTACK.link !== undefined ? (
        <a
          className='hover:text-4xl hover:text-primary w-7'
          href={SUBSTACK.link}
          target='_blank'
          rel='noreferrer'>
          <SiSubstack />
        </a>
      ) : (
        <></>
      )}

      {GITHUB.link !== undefined ? (
        <a
          className='hover:text-4xl hover:text-primary w-7'
          href={GITHUB.link}
          target='_blank'
          rel='noreferrer'>
          <BsGithub />
        </a>
      ) : (
        <></>
      )}

      {DISCORD.link !== undefined ? (
        <a
          className='hover:text-4xl hover:text-primary w-7'
          href={DISCORD.link}
          target='_blank'
          rel='noreferrer'>
          <BsDiscord />
        </a>
      ) : (
        <></>
      )}
    </div>
  );
};
