import { Dispatch, SetStateAction } from 'react';

export interface ContactFormProps {
  setSent: Dispatch<SetStateAction<boolean>>;
  setErrorStatus: Dispatch<SetStateAction<boolean | string>>;
  closeDialog: () => void;
}
