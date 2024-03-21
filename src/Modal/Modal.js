import React, { useRef } from "react";
import PropTypes from "prop-types";
import './Modal.css';
import ModalText from "../ModalText/ModalText";

const Modal = ({ image, title, role, tech, goal, know, onClose }) => {
    const modalRef = useRef(null);

    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    return (
        <div className="modal" onClick={handleOutsideClick}>
            <div className="modal-content" ref={modalRef}>
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
