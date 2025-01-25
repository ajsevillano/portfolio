import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { FaBluesky } from 'react-icons/fa6';
import styles from './Footer.module.scss';

interface Link {
  id: number;
  className: string;
  href: string;
  text: string;
}

interface ContactLink {
  id: number;
  className: string;
  icon: () => JSX.Element;
  links: Link[];
}

const contactLinks: ContactLink[] = [
  {
    id: 1,
    className: styles.social,
    icon: () => <FaEnvelope size="2rem" />,
    links: [
      {
        id: 1,
        className: styles.emailMobile,
        href: 'mailto:websitecontactform@ajsevillano.com',
        text: 'contact',
      },
      {
        id: 2,
        className: styles.emailLaptop,
        href: 'mailto:websitecontactform@ajsevillano.com',
        text: 'By email',
      },
    ],
  },
  {
    id: 2,
    className: styles.social,
    icon: () => <FaGithub size="2rem" />,
    links: [
      {
        id: 1,
        className: styles.socialText,
        href: 'http://www.github.com/ajsevillano',
        text: 'My github',
      },
    ],
  },
  {
    id: 3,
    className: styles.social,
    icon: () => <FaLinkedin size="2rem" />,
    links: [
      {
        id: 1,
        className: styles.socialText,
        href: 'https://www.linkedin.com/in/ajsevillano/',
        text: 'Linkedin',
      },
    ],
  },
  {
    id: 4,
    className: styles.social,
    icon: () => <FaBluesky size="2rem" />,
    links: [
      {
        id: 1,
        className: styles.socialText,
        href: 'https://bsky.app/profile/ajsevillano.bsky.social',
        text: 'On Bluesky',
      },
    ],
  },
];

export default contactLinks;
