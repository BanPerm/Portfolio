import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import style from './Contact.module.css';
import {Link} from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";


const Contact = () => {
    const form = useRef();

    const handleInputChange = (event) => {
        const input = event.target;
        if (input.value !== '' || input === document.activeElement) {
            input.classList.add('filled');
        } else {
            input.classList.remove('filled');
        }
    };

    const handleInputClick = (event) => {
        const input = event.target;
        input.classList.add(style.filled);
    };

    const handleInputBlur = (event) => {
        const input = event.target;
        if (input.value === '' && input !== document.activeElement) {
            input.classList.remove(style.filled);
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_thjny6e", "template_2paccsg", form.current, "So9JAO_muxs6Q1jsh").then(
            (result) => {
                console.log(result.text);
                window.alert('Le message à été envoyé');
            },
            (error) => {
                console.log(error.text);
            }
        );
    };

    return (
        <div className={style.container}>
            <Link to="/Portfolio/">
                <div style={{ position: 'absolute', top: '10px', left: '10px'}}>
                    <CustomButton
                        label="Accueil"
                        fontSize="1rem"
                        color="rgb(50, 99, 162)"
                        backgroundColor="rgb(108, 171, 255)"
                        hoverColor="rgb(97, 160, 220)"
                        boxShadowColor="rgb(68, 116, 180)"
                        boxShadowHoverColor="rgb(51, 112, 159)"
                    />
                </div>
            </Link>
            <form ref={form} onSubmit={sendEmail} className={style.form}>
                <div className={style.texteContact}>
                    <h1>Me Contacter</h1>
                </div>
                <div className={style.inputContainer}>
                    <div className={style.inputWrapper}>
                        <input
                            type="text"
                            name="name"
                            required
                            onChange={handleInputChange}
                            onClick={handleInputClick}
                            onBlur={handleInputBlur}
                        />
                        <label>Nom</label>
                    </div>
                    <div className={style.inputWrapper}>
                        <input
                            type="email"
                            name="email"
                            required
                            onChange={handleInputChange}
                            onClick={handleInputClick}
                            onBlur={handleInputBlur}
                        />
                        <label>Email</label>
                    </div>
                    <div className={style.inputWrapper}>
                        <textarea
                            name="message"
                            required
                            onChange={handleInputChange}
                            onClick={handleInputClick}
                            onBlur={handleInputBlur}
                        ></textarea>
                        <label>Message</label>
                    </div>
                    <div className={style.divSubmit}>
                        <CustomButton
                            label="Envoyer"
                            fontSize="1rem"
                            color="rgb(106, 163, 137)"
                            backgroundColor="rgb(205, 255, 232)"
                            hoverColor="rgb(187, 232, 211)"
                            boxShadowColor="rgb(121, 186, 156)"
                            boxShadowHoverColor="rgb(106, 163, 137)"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;
