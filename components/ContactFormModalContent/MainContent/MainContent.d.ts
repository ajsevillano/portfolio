import { Dispatch, SetStateAction } from 'react';

export interface MainContentProps {
  setSent: Dispatch<SetStateAction<boolean>>;
  setErrorStatus: Dispatch<SetStateAction<boolean | string>>;
}
