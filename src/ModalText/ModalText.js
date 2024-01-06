import React from "react";
import "./ModalText.css";

const ModalText = ({ role, tech, goal }) => {
    return (
        <div className="modal-text-container">
            <table>
                <tbody>
                <tr>
                    <td><strong>Role:</strong></td>
                    <td>{role}</td>
                </tr>
                <tr>
                    <td><strong>Technologies:</strong></td>
                    <td>{tech}</td>
                </tr>
                <tr>
                    <td><strong>Objectif:</strong></td>
                    <td>{goal}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ModalText;
