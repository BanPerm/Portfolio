// Modal.jsx

import React from "react";
import PropTypes from "prop-types";
import './Modal.css';

const Modal = ({ image, title, text, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <h2>{title}</h2>
                <img src={image} alt={title} className="imageModal"/>
                <p>{text}</p>
            </div>
        </div>
    );
};

Modal.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
