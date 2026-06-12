import React, { useContext } from 'react';
import { FaRegClipboard } from 'react-icons/fa';
import { ModalContext } from '../../contexts/ModalContext';
import Button from '../Button';
import Wrapper from '../Layouts/Wrapper';
import styles from './Footer.module.scss';
import contactLinks from './Footer.data';

function Footer() {
  const { openDialog } = useContext(ModalContext);
  return (
    <Wrapper
      elementType="section"
      id="contact"
      background="#19202D"
      justifycontent="center"
    >
      <div className={styles.sectionContainer}>
        <div className={styles.contactMeHeader}>
          <h2 className={styles.contactMe}>Let's work together</h2>
          <p className={styles.subTitle}>
            I'm currently looking for my next role, frontend or fullstack, remote in the UK. If you're hiring, or know someone who is, the form below is the fastest way to reach me: I reply within a day. You can also find me on LinkedIn, or dig into my code on GitHub.
          </p>
          <div className={styles.buttoncontainer}>
            <Button
              variant="secondary"
              text="Get in touch"
              onClick={openDialog}
              icon={<FaRegClipboard size={25} />}
            />
          </div>
        </div>
        <div className={styles.socialIcons}>
          {contactLinks.map((contact) => (
            <div key={contact.id} className={contact.className}>
              {contact.icon()}
              {contact.links.map((link) => (
                <a
                  key={link.id}
                  className={link.className}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.text}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;
