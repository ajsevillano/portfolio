type State = {
  name: string;
  email: string;
  subject: string;
};

export type Action = {
  type: 'UPDATE_NAME' | 'UPDATE_EMAIL' | 'UPDATE_SUBJECT' | 'CLEAR_FORM';
  payload: string;
};

export const initialState: State = {
  name: '',
  email: '',
  subject: '',
};

export const formReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };
    case 'UPDATE_EMAIL':
      return { ...state, email: action.payload };
    case 'UPDATE_SUBJECT':
      return { ...state, subject: action.payload };
    case 'CLEAR_FORM':
      return { ...state, name: '', email: '', subject: '' };
    default:
      return state;
  }
};
