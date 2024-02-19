// Modal.jsx

import React from "react";
import PropTypes from "prop-types";
import './Modal.css';
import ModalText from "../ModalText/ModalText";

const Modal = ({ image, title, role,tech,goal,know, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <h2>{title}</h2>
                <img src={image} alt={title} className="imageModal"/>
                <ModalText role={role} tech={tech} goal={goal} know={know} />
            </div>
        </div>
    );
};

Modal.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
