/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styleVideo from '../assets/styles/css/Detailvideo.module.css'
// import Footer from '../components/Footer'
import { Row, Col } from 'reactstrap'
import { useEffect } from "react";
// import axios from "axios"
import { useParams } from "react-router-dom";
import NavBarPrimary from "../components/Navbar";
import { getDetailRecipe } from "../redux/action/allRecipe"
import { useDispatch, useSelector } from "react-redux";


const Detailvideo = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    // const navigate = useNavigate()

    const detailRecipe = useSelector((state) => {
        return state.detailRecipe
    })

    console.log(detailRecipe.data)

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getDetailRecipe(id))
    }, [dispatch, id])
    return (
        <>
            <Row className={`d-flex flex-row gx-0 w-100`} >
                <Col className={`col-lg-1 ${styleVideo.decoration}`} ></Col>
                <Col className="col-lg-11 d-flex flex-column ">
                    <Col className={styleVideo.customNavbar} >
                        <NavBarPrimary />
                    </Col>
                    <Col>
                        <div className={styleVideo.mainContent}>
                            <div className="col-md-12 col-lg-9">
                                <section className={styleVideo.formContent}>
                                    <div className={styleVideo.mainContentVideo}>
                                        {/* <iframe src="https://www.youtube.com/embed?v=7sws4VHNrYQ" frameborder="0"></iframe> */}
                                        <iframe className={styleVideo.videoIframe} src={detailRecipe.data.video} allowfullscreen ng-show="showvideo" frameborder="0">
                                        </iframe>
                                        <h4 className={styleVideo.textVideoH4} >{detailRecipe.data.title}</h4>
                                        <small className={styleVideo.textDateSmall} >{detailRecipe.data.date}</small>

                                    </div>
                                </section>
                            </div>
                            <div className="col-md-12 col-lg-3 mt-5">
                                <div className={styleVideo.secondContent}>
                                    <h4 className={styleVideo.textNextH4} >Next</h4>
                                    <img className={styleVideo.secondContentVideo} src="./assets/images/detailvideo/1.jpg" alt="" />
                                    <h6 className={styleVideo.textSecondContentH6} >Beef Steak with Curry Sauce - [Step 5]
                                        Saute condiments together until turn brown</h6>
                                    <small className={styleVideo.textSecondContentSmall} >3 month ago</small>
                                </div>

                            </div>
                        </div>
                    </Col>
                </Col>
            </Row >
        </>
    )
}

export default Detailvideo