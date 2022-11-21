import { ReactNode } from "react";

import './Modal.scss'

interface ModalProps {
  setIsOpen: Function;
  children: ReactNode;
  isCenterModal?: boolean;
}

const Modal = ({ setIsOpen, children, isCenterModal = false }: ModalProps) => {
  return (
    <>
      {isCenterModal && <div className='bg-behind-modal' onClick={() => setIsOpen(false)} />}
      <div className={isCenterModal ? 'center-modal' : 'full-modal'}>
        { children }
        <button className="button-modal" onClick={() => setIsOpen(false)}>Voltar</button>
      </div>
    </>
  );
};

export default Modal;