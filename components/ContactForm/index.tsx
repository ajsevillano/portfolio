import React, { useReducer } from 'react';
import Button from '@components/Button';
import { FaPaperPlane } from 'react-icons/fa';
import { formReducer, initialState, Action } from '@reducers/formReducer';
import styles from './ContactForm.module.scss';

export default function ContactForm({ setSent, closeDialog }: any) {
  const [state, dispatch] = useReducer(formReducer, initialState);

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

  const sendForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    // Clear the form
    dispatch({
      type: 'CLEAR_FORM',
      payload: '',
    });

    setTimeout(() => {
      setSent(false);
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
      <input
        className={styles.input}
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
          text="Send form"
          onclick={(e) => sendForm(e)}
          icon={<FaPaperPlane />}
          disabled={!state.name || !state.email || !state.subject}
        />
      </div>
    </form>
  );
}
