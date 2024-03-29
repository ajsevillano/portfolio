import React, { useReducer, useState } from 'react';
import Button from '@components/Button';
import { FaPaperPlane } from 'react-icons/fa';
import { formReducer, initialState, Action } from '@reducers/formReducer';
import styles from './ContactForm.module.scss';

export default function ContactForm({
  setSent,
  closeDialog,
  setErrorStatus,
}: any) {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [buttonText, setButtonText] = useState('Send form');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const actionTypeMap: { [key: string]: Action['type'] } = {
      name: 'UPDATE_NAME',
      email: 'UPDATE_EMAIL',
      subject: 'UPDATE_SUBJECT',
      clearForm: 'CLEAR_FORM',
    };

    dispatch({
      type: actionTypeMap[e.target.name],
      payload: e.target.value,
    });
  };

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
        }),
      });

      if (response.ok) {
        setSent(true);
      } else {
        const data = await response.json();
        setErrorStatus(data.error);
        throw new Error(data.error);
      }
    } catch (error) {
      setErrorStatus((error as Error).message);
    }

    // Clear the form
    dispatch({
      type: 'CLEAR_FORM',
      payload: '',
    });

    setTimeout(() => {
      setSent(false);
      setErrorStatus(false);
      closeDialog();
    }, 4000);
  };

  return (
    <form className={styles.formContainer}>
      <input
        className={styles.input}
        type="text"
        name="name"
        id="name"
        placeholder="Your name"
        value={state.name}
        onChange={handleInputChange}
      />
      <span className={styles.errorText}>
        {!isValidEmail ? 'Please enter a valid email' : ''}
      </span>
      <input
        className={!isValidEmail ? styles.inputError : styles.input}
        type="email"
        name="email"
        id="email"
        placeholder="email@company.com"
        value={state.email}
        onChange={handleInputChange}
      />
      <textarea
        className={styles.textArea}
        name="subject"
        id="subject"
        placeholder="Your message"
        value={state.subject}
        onChange={handleInputChange}
      />
      <div className={styles.buttonContainer}>
        <Button
          text={buttonText}
          onclick={(e) => sendForm(e)}
          icon={<FaPaperPlane />}
          disabled={!state.name || !state.email || !state.subject}
        />
      </div>
    </form>
  );
}
