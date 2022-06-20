/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styleLogin from "../assets/styles/css/Login.module.css"
import LogoLogin from "../components/LogoLogin"
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../redux/action/user'
import Swal from "sweetalert2";

import { Row, Col } from "reactstrap";


const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
    const onSubmit = (e) => {
        // login(body)
        e.preventDefault()
        login(form)
            .then((response) => {
                console.log(response)
                return navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })

    }
    return (
        <>
            <Row className={styleLogin.row}>
                <LogoLogin />
                <Col sm={7} md={6} >
                    <div className={styleLogin.formInput}>
                        <div className={styleLogin.formGroup}>
                            <h1 className={styleLogin.inputH1} >Welcome</h1>
                            <small className={styleLogin.inputSmall}>Log in into your existing account</small>
                            <form onSubmit={(e) => onSubmit(e)} >
                                <label className={styleLogin.inputLabel} >Email</label>
                                <input style={{padding:'10px'}} onChange={(e) => setForm({ ...form, email: e.target.value })} className={styleLogin.formInputType} type="text" placeholder="examplexxx@gmail.com" />
                                <label className={styleLogin.inputLabel}>Password</label>
                                <input style={{padding:'10px'}} onChange={(e) => setForm({ ...form, password: e.target.value })} className={styleLogin.formInputType} type="password" placeholder="Password" />
                                <div className={styleLogin.formCheck}>
                                    <input className={styleLogin.formCheckBox} type="checkbox" />
                                    <label className={styleLogin.inputlabelCheckBox} > I agree to terms & conditions</label>
                                </div>
                                <button className={styleLogin.inputButton} type="submit" >Login</button>
                                <a className={styleLogin.inputAhref} href="">Forgot Password ?</a>
                                <div className={styleLogin.formNoAccount}>
                                    <label className={styleLogin.inputLabel}>Don't have an account? </label>
                                    <Link className={styleLogin.inputAhrefLink} to={`/register`}>
                                        <a className={styleLogin.inputAhref}>Sign Up </a>
                                    </Link>

                                </div>
                            </form>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Login

