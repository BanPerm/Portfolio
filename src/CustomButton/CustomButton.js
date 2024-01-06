// CustomButton.js
import PropTypes from 'prop-types';
import style from './CustomButton.module.css';

const CustomButton = ({ label, fontSize, color, backgroundColor, hoverColor, boxShadowColor, boxShadowHoverColor, onClick }) => {
    const buttonStyle = {
        '--button-font-size': fontSize || '1.5rem',
        '--button-color': color || 'rgb(106, 163, 137)',
        '--button-background-color': backgroundColor || 'rgb(205, 255, 232)',
        '--button-hover-color': hoverColor || 'rgb(187, 232, 211)',
        '--button-box-shadow-color': boxShadowColor || 'rgb(121, 186, 156)',
        '--button-box-shadow-hover-color': boxShadowHoverColor || 'rgb(106, 163, 137)',
    };

    return (
        <button className={style.btnCustom} style={buttonStyle} onClick={onClick}>
            {label}
        </button>
    );
};

CustomButton.propTypes = {
    label: PropTypes.string.isRequired,
    fontSize: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    hoverColor: PropTypes.string,
    boxShadowColor: PropTypes.string,
    boxShadowHoverColor: PropTypes.string,
    onClick: PropTypes.func,  // onClick est maintenant optionnel
};

export default CustomButton;
