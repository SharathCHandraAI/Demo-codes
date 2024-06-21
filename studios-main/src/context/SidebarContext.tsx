import { createContext, useState } from "react";

export interface SideBarContextValue {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}
export const SideBarContext = createContext<SideBarContextValue>({
  isOpen: false,
  onClose: () => {},
  onOpen: () => {},
});
const SideBarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const value = {
    isOpen,
    onClose,
    onOpen,
  };

  return (
    <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>
  );
};

export default SideBarContextProvider;
