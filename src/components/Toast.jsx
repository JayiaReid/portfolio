// Toast.jsx
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const toastVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

const Toast = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000); // Close the toast after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={toastVariants}
          className="fixed bottom-5 right-5 bg-white text-black p-4 rounded shadow-lg z-50"
        >
          {message}
          <button
            onClick={onClose}
            className="ml-2 text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
