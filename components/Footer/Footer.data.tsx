import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
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
    className: styles.email,
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
    className: styles.github,
    icon: () => <FaGithub size="2rem" />,
    links: [
      {
        id: 1,
        className: styles.githubText,
        href: 'http://www.github.com/ajsevillano',
        text: 'My github',
      },
    ],
  },
  {
    id: 3,
    className: styles.linkedin,
    icon: () => <FaLinkedin size="2rem" />,
    links: [
      {
        id: 1,
        className: styles.githubText,
        href: 'https://www.linkedin.com/in/ajsevillano/',
        text: 'Linkedin',
      },
    ],
  },
  {
    id: 4,
    className: styles.twitter,
    icon: () => <FaXTwitter size="2rem" />,
    links: [
      {
        id: 1,
        className: styles.twitterText,
        href: 'http://www.twitter.com/ajsevillano',
        text: 'On X',
      },
    ],
  },
];

export default contactLinks;
