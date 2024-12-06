import React, { useContext } from 'react';
import { FaRegClipboard } from 'react-icons/fa';
import Modal from '@components/Modal';
import { ModalContext } from '../../contexts/ModalContext';
import Button from '../Button';
import Wrapper from '../Layouts/Wrapper';
import styles from './Footer.module.scss';
import contactLinks from './Footer.data';

function Footer() {
  const { openDialog, closeDialog, modalRef } = useContext(ModalContext);
  return (
    <Wrapper
      elementType="section"
      id="contact"
      background="#19202D"
      justifycontent="center"
    >
      <div className={styles.sectionContainer}>
        <Modal closeDialog={closeDialog} ref={modalRef} />
        <div className={styles.contacMeHeader}>
          <h2 className={styles.contactMe}>Contact me</h2>
          <p className={styles.subTitle}>
            I&apos;d love connecting with you and exploring innovative ideas.
            Whether you have a specific project in mind or simply want to
            discuss potential collaborations, I&apos;m here to have insightful
            conversations and explore exciting possibilities with you.
          </p>
          <div className={styles.buttoncontainer}>
            <Button
              variant="secondary"
              text="Get in touch"
              onclick={openDialog}
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
