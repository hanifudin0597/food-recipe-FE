import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col } from "reactstrap";
import styleLogin from "../assets/styles/css/Login.module.css"
import LogoLogin from "../components/LogoLogin";
import { register } from "../redux/action/user";
import Swal from "sweetalert2";

const Register = () => {

    const navigate = useNavigate();
    const [photo, setPhoto] = useState('');
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        passwordConfirmation: '',
    })

    const onSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("email", form.email);
        formData.append("phone", form.phone);
        formData.append("password", form.password);
        formData.append("gambar", photo)

        // console.log(formData)

        register(formData)
            .then((response) => {
                if (response.code === 200) {
                    Swal.fire({
                        title: response.message,
                        icon: "success"
                    })
                    navigate('/login')
                }
                else {
                    Swal.fire({
                        title: response.error,
                        icon: "error"
                    })
                }
            })
            .catch((err) => {
                // console.log(err)
                Swal.fire({
                    title: err.data.message,
                    icon: "error"
                })
            })
    }



    return (
        <>
            <Row className={`${styleLogin.row} ${styleLogin.contain}`} >
                <LogoLogin />
                <Col sm={7} md={6} className={styleLogin.overflowRegisterScroll} >
                    <div className={styleLogin.formInput}>
                        <div className={styleLogin.formGroup}>
                            <h1 className={styleLogin.inputH1} >Let's Get Started !</h1>
                            <small className={styleLogin.inputSmall} >Create new account to access all features</small>
                            <form onSubmit={(e) => onSubmit(e)} >
                                <label className={styleLogin.inputLabel} >Name</label>
                                <input style={{padding:'10px'}} onChange={(e) => setForm({ ...form, name: e.target.value })} className={styleLogin.formInputType} type="text" placeholder="Name" required />
                                <label className={styleLogin.inputLabel} >Email Addres</label>
                                <input style={{padding:'10px'}} onChange={(e) => setForm({ ...form, email: e.target.value })} className={styleLogin.formInputType} type="email" placeholder="Enter email address" required />
                                <label className={styleLogin.inputLabel} >Phone Number</label>
                                <input style={{padding:'10px'}} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={styleLogin.formInputType} type="text" placeholder="08xxxxxxxxxx" required />
                                <label className={styleLogin.inputLabel} >Create New Password</label>
                                <input style={{padding:'10px'}} onChange={(e) => setForm({ ...form, password: e.target.value })} className={styleLogin.formInputType} type="password" placeholder="Create New Password" required />
                                <label className={styleLogin.inputLabel} >Confirmation Password</label>
                                <input style={{padding:'10px'}} onChange={(e) => setForm({ ...form, password: e.target.value })} className={styleLogin.formInputType} type="password" placeholder="New Password" required />
                                <label className={styleLogin.inputLabel} >Photo</label>
                                <input style={{padding:'10px'}} onChange={(e) => setPhoto(e.target.files[0])} type="file" name="" id="" required />
                                <div className={styleLogin.formCheck}>
                                    <input className={styleLogin.formCheckBox} type="checkbox" />
                                    <label className={styleLogin.inputlabelCheckBox}> I agree to terms & conditions</label>
                                </div>
                                <button className={styleLogin.inputButton} type="submit">Register Account</button>
                                <div className={styleLogin.formNoAccount}>
                                    <label className={styleLogin.inputLabel} >Already have account? </label>
                                    <Link to="/login" className={styleLogin.inputAhrefLink}>
                                        Log in Here
                                    </Link>
                                    {/* <a className={styleLogin.inputAhref} href="./login.html">Log in Here </a> */}
                                </div>
                            </form>
                        </div >
                    </div >
                </Col >
            </Row >
        </>
    )
}

export default Register