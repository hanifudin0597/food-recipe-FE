import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import Footer from "../components/Footer";
import NavBarPrimary from "../components/Navbar";
import styleAddrecipe from "../assets/styles/css/Addrecipe.module.css"
import LogoImage from "../assets/img/logoImageUpload.svg"
import { addRecipe } from "../redux/action/allRecipe";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Addrecipe = () => {

    const navigate = useNavigate()
    const [photo, setPhoto] = useState('');
    const [form, setForm] = useState({
        title: '',
        ingredients: '',
        video: '',
    })

    // console.log(form)

    const onSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("ingredients", form.ingredients);
        formData.append("video", form.video);
        formData.append("gambar", photo)

        // console.log(formData)

        addRecipe(formData)
            .then((response) => {
                if (response.code === 200) {
                    Swal.fire({
                        title: response.message,
                        icon: "success"

                    })
                    return navigate('/profile')
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
            <Row className="d-flex flex-column gx-0" >
                <Col>
                    <NavBarPrimary />
                </Col>
                <Col>
                    <section  >
                        <div className={styleAddrecipe.mainContent}>
                            <form onSubmit={(e) => onSubmit(e)} className={`d-flex flex-column justify-content-center align-items-center w-100 ${styleAddrecipe.formInput}`} action="">
                                <label className={styleAddrecipe.inpuImg} for="upload">
                                    <span className={styleAddrecipe.formLogoImg}>
                                        <img src={LogoImage} alt="" />
                                    </span>
                                    <input onChange={(e) => setPhoto(e.target.files[0])} className={styleAddrecipe.uploadImg} type="file" id="upload" required />
                                </label>
                                <input  style={{padding:'10px'}} onChange={(e) => setForm({ ...form, title: e.target.value })} type="text" className={`${styleAddrecipe.textTitle}`} placeholder="Title" required />
                                <textarea  style={{padding:'10px'}} onChange={(e) => setForm({ ...form, ingredients: e.target.value })} className={`${styleAddrecipe.textIngredients}`} name="" id="" cols="30" placeholder="Ingredients" rows="10" required ></textarea>
                                <input  style={{padding:'10px'}} onChange={(e) => setForm({ ...form, video: e.target.value })} type="text" className={`${styleAddrecipe.uploadVideo}`} placeholder="Video" required />

                                <button className={`${styleAddrecipe.buttonSubmit}`} type="submit" >Post</button>
                            </form>
                        </div>

                    </section>
                </Col>
                <Col>
                    <Footer />
                </Col>
            </Row>
        </>
    )
}

export default Addrecipe