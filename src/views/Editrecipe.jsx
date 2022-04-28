import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import Footer from "../components/Footer";
import NavBarPrimary from "../components/Navbar";
import styleAddrecipe from "../assets/styles/css/Addrecipe.module.css"
import LogoImage from "../assets/img/logoImageUpload.svg"
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailRecipe, updateRecipe } from "../redux/action/allRecipe"
import Swal from "sweetalert2";

const EditRecipe = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [photo, setPhoto] = useState('');
    const [form, setForm] = useState({
        title: '',
        ingredients: '',
        video: '',
    })

    // get detail recipe
    const detailRecipe = useSelector((state) => {
        return state.detailRecipe
    })

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getDetailRecipe(id))
    }, [])


    // Post recipe after edit
    const onSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("ingredients", form.ingredients);
        formData.append("video", form.video);
        formData.append("gambar", photo)

        // console.log(formData)

        updateRecipe(formData, id)
        // .then((response) => {
        //     if (response.code == 200) {
        //         Swal.fire({
        //             title: response.message,
        //             icon: "success"
        //         })
        //     }
        //     else {
        //         Swal.fire({
        //             title: response.error,
        //             icon: "error"
        //         })
        //     }
        // })
        // .catch((err) => {
        //     // console.log(err)
        //     Swal.fire({
        //         title: err.data.message,
        //         icon: "error"
        //     })
        // })
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
                                    <input onChange={(e) => setPhoto(e.target.files[0])} className={styleAddrecipe.uploadImg} type="file" id="upload" />
                                </label>
                                <input onChange={(e) => setForm({ ...form, title: e.target.value })} value={detailRecipe.data.title} type="text" className={`${styleAddrecipe.textTitle}`} placeholder="Title" />
                                <textarea onChange={(e) => setForm({ ...form, ingredients: e.target.value })} className={`${styleAddrecipe.textIngredients}`} name="" id="" cols="30" placeholder="Ingredients" rows="10">{detailRecipe.data.ingredients}</textarea>
                                <input onChange={(e) => setForm({ ...form, video: e.target.value })} value={detailRecipe.data.video} type="text" className={`${styleAddrecipe.uploadVideo}`} placeholder="Video" />

                                <button value={detailRecipe.data.video} className={`${styleAddrecipe.buttonSubmit}`} type="submit" >Post</button>
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

export default EditRecipe