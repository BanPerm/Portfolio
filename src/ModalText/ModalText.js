import React from "react";
import "./ModalText.css";
import Apprentissage from "./Apprentissage";

const ModalText = ({ role, tech, goal, know}) => {
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
                <tr>
                    <td><strong>Apprentissage Critique:</strong></td>
                    <td><Apprentissage list={know} /></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ModalText;
