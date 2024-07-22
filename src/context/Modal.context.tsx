import { createContext, useContext, useState, ReactNode } from 'react';
import { Platform } from '@/types';

interface ModalContextProps {
  openModal: (platform: Platform) => void;
  closeModal: () => void;
  isModalOpen: boolean;
  activePlatform: Platform;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

interface ModalProviderProps {
  children: JSX.Element | JSX.Element[];
}

const ModalProvider = ({ children }: ModalProviderProps) => {
  // Define modal and platform state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activePlatform, setActivePlatform] = useState<Platform>('facebook');

  // Define funcions to open and close the modal
  const openModal = (platform: Platform) => {
    setActivePlatform(platform);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
        isModalOpen,
        activePlatform,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = (): ModalContextProps => {
  // Define context and throw error if not found
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
};

export default ModalProvider;
