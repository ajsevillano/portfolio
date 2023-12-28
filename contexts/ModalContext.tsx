// ModalContext.tsx
import React, {
  createContext,
  useState,
  useEffect,
  useRef,
  ReactNode,
  useMemo,
} from 'react';

interface ModalContextProps {
  openDialog: () => void;
  closeDialog: () => void;
  modalRef: React.RefObject<HTMLDialogElement>;
}

export const ModalContext = createContext<ModalContextProps>({
  openDialog: () => {},
  closeDialog: () => {},
  modalRef: { current: null },
});

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);

  const closeDialog = () => setIsOpen(false);
  const openDialog = () => setIsOpen(true);

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
    () => ({ openDialog, closeDialog, modalRef }),
    [openDialog, closeDialog, modalRef],
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
