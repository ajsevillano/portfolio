// ModalContext.tsx
import React, {
  createContext,
  useState,
  useEffect,
  useRef,
  ReactNode,
  useMemo,
  useCallback,
} from 'react';
import Modal from '@components/Modal';

interface ModalContextProps {
  openDialog: () => void;
  closeDialog: () => void;
}

export const ModalContext = createContext<ModalContextProps>({
  openDialog: () => {},
  closeDialog: () => {},
});

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);

  const closeDialog = useCallback(() => setIsOpen(false), []);
  const openDialog = useCallback(() => setIsOpen(true), []);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      if (isOpen) {
        modalElement.showModal();
        document.body.style.overflow = 'hidden';
      } else {
        modalElement.close();
        document.body.style.overflow = 'auto';
      }
    }
  }, [isOpen]);

  const value = useMemo(
    () => ({ openDialog, closeDialog }),
    [openDialog, closeDialog],
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
      <Modal closeDialog={closeDialog} ref={modalRef} />
    </ModalContext.Provider>
  );
}
