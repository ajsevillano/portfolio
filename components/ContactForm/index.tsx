import React, { useRef, useState } from 'react';
import Button from '@components/Button';
import { FaPaperPlane } from 'react-icons/fa';
import styles from './ContactForm.module.scss';
import { ContactFormProps } from './ContactForm';

export default function ContactForm({
  setSent,
  setErrorStatus,
}: ContactFormProps) {
  const emptyForm = { name: '', email: '', subject: '' };
  const [state, setState] = useState(emptyForm);
  const [buttonText, setButtonText] = useState('Send form');
  const [isValidEmail, setIsValidEmail] = useState(true);
  // Honeypot: stays empty for real users, bots tend to fill every field.
  const honeypotRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setState({ ...state, [e.target.name]: e.target.value });

  const sendForm = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(state.email);
    setIsValidEmail(isValid);

    if (!isValid) {
      return;
    }
    setButtonText('Sending...');
    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: state.email,
          name: state.name,
          subject: state.subject,
          website: honeypotRef.current?.value ?? '',
        }),
      });

      if (response.ok) {
        setSent(true);
        setState(emptyForm);
      } else {
        const data = await response.json();
        setErrorStatus(data.message);
      }
    } catch (error) {
      setErrorStatus((error as Error).message);
    }
    setButtonText('Send form');
  };

  return (
    <form className={styles.formContainer} onSubmit={sendForm}>
      {/* Honeypot: hidden from users and assistive tech, bots fill it in. */}
      <input
        ref={honeypotRef}
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: 'none' }}
      />
      <label className={styles.label} htmlFor="name">
        Your name
      </label>
      <input
        className={styles.input}
        id="name"
        type="text"
        name="name"
        placeholder="Your name"
        value={state.name}
        onChange={handleInputChange}
      />
      <label className={styles.label} htmlFor="email">
        Your email
      </label>
      <input
        className={!isValidEmail ? styles.inputError : styles.input}
        id="email"
        type="email"
        name="email"
        placeholder="email@company.com"
        value={state.email}
        onChange={handleInputChange}
        aria-invalid={!isValidEmail}
        aria-describedby="email-error"
      />
      <span className={styles.errorText} id="email-error" role="alert">
        {!isValidEmail ? 'Please enter a valid email' : ''}
      </span>
      <label className={styles.label} htmlFor="message">
        Your message
      </label>
      <textarea
        className={styles.textArea}
        id="message"
        name="subject"
        placeholder="Your message"
        value={state.subject}
        onChange={handleInputChange}
      />
      <div className={styles.buttonContainer}>
        <Button
          type="submit"
          text={buttonText}
          icon={<FaPaperPlane />}
          disabled={!state.name || !state.email || !state.subject}
        />
      </div>
    </form>
  );
}
