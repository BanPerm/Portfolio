import React from "react";
import './Future.css';
import style from "../Contact/Contact.module.css";
import CustomButton from "../CustomButton/CustomButton";
import {Link} from "react-router-dom";

const Future = () =>{
    return (
      <div>
          <img src="/Portfolio/image/nofuture.jpg" className="imageFuture"/>
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
      </div>
    );
}

export default Future;