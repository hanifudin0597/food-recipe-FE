import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styleIndex from '../assets/styles/css/Index.module.css'
import { Col } from "reactstrap";

const Footer = () => {
    return (
        <>
            <Col>
                <footer className={`  ${styleIndex.footer}`} >
                    <div className="d-flex flex-column justify-content-center align-items-center h-100">
                        <div className={`w-100 d-flex flex-column justify-content-center align-items-center ${styleIndex.textFooter}`}>
                            <h1 className={styleIndex.footerH1} >Eat, Cook, Repeat</h1>
                            <small className={styleIndex.footerSmall} >Share your best recipe by uploading here !</small>
                        </div>
                        <div className={styleIndex.linkFooter}>
                            <a className={styleIndex.linkFooterAhref} href="">Product</a>
                            <a className={styleIndex.linkFooterAhref} href="">Company</a>
                            <a className={styleIndex.linkFooterAhref} href="">Learn more</a>
                            <a className={styleIndex.linkFooterAhref} href="">Get in touch</a>
                            {/* <div className="icon-footer">
                                    <img src="./assets/images/footer.svg" alt="">
                                </div> */}
                        </div>
                    </div>
                </footer>
            </Col>
        </>

    )
}

export default Footer