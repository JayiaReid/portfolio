import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white overflow-y-auto max-h-[700px] rounded-lg p-5  max-w-[700px] mx-4 sm:mx-auto relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl text-primary p-1"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
