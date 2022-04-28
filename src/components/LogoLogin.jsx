import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styleLogin from "../assets/styles/css/Login.module.css"
import { Col } from "reactstrap";
import logoLogin from '../assets/img/logoLogin.svg'

const LogoLogin = () => {
    return (
        <>
            <Col sm={5} md={6} >
                <div className={styleLogin.decoration}>
                    <img className={styleLogin.imgDecoration} src="https://s3-alpha-sig.figma.com/img/86b2/055d/76c7e3577554580136d5f65222046a21?Expires=1650844800&Signature=KohSGDqTJy4D1hB~ifM2Auem4N~dRnmCYMHoqrbx6L1hlUp07BtAI2mAJNDwP5b7O1XKW8834TuhSFSWYBRY46tmpVLMr6F~qlOD6fvlOcre4ecae9HFTagCRVWI-NqXFQxE-xi-a9AY6iRUoEwfaBtVKR~XHvd4MBxCg4OTpEYx7u4EaHXbCF08vQYtShxqz2P6OzrQOdAKy3S4V0sysVjkBA2qzxwhn2bCNuSICSP3wllcEcZBWyfVVfKiRLBcnQn-kN39827oMGYTTxDs9oAboyBg66fvENWhPQ6C53tCSl4kTsX6NBODenBO1yqimaCqTdNnE26Lp-9PM4dG4Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="gambar landingpage" />
                    <div className={styleLogin.formLogoLogin}>
                        <img src={logoLogin} alt="" />
                    </div>

                </div>

            </Col>
        </>

    )
}

export default LogoLogin