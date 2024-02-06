import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Modal = ({ imageUrl, onClose }) => {
  const modalRef = useRef(null);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  const handleClickOutside = useCallback(
    (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect (() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleKeyDown, handleClickOutside]);
  

  return (
    <div className={styles.Overlay}>
      <div ref={modalRef} className={styles.Modal}>
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;