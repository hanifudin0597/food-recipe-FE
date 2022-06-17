import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styleLogin from "../assets/styles/css/Login.module.css"
import { Col } from "reactstrap";
import logoLogin from '../assets/img/logoLogin.svg'
import logoAuth from '../assets/img/logoAuth.png'

const LogoLogin = () => {
    return (
        <>
            <Col sm={5} md={6} >
                <div className={styleLogin.decoration}>
                    <img className={styleLogin.imgDecoration} src={logoAuth} alt="gambar landingpage" />
                    <div className={styleLogin.formLogoLogin}>
                        <img src={logoLogin} alt="" />
                    </div>

                </div>

            </Col>
        </>

    )
}

export default LogoLogin