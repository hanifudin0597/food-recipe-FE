/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarPrimary from "../components/Navbar"
import styleIndex from '../assets/styles/css/Index.module.css'
import { Row, Col } from 'reactstrap'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getLatestRecipe } from "../redux/action/allRecipe";
import landingImage from '../assets/img/landing.jpg'
import popularRecipe from '../assets/img/popular.jpg'
import newRecipe from '../assets/img/newrecipe.jpg'

const Index = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // Get Latest Recipe
    const latesRecipe = useSelector((state) => {
        return state.latestRecipe
    })

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getLatestRecipe())
    }, [dispatch])

    // search
    const [search, setSearch] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()

        return navigate(`/recipe?searchRecipe=${search}`)
    }


    return (
        <>
            <Row className="d-flex flex-column gx-0" >
                <Col>
                    <NavBarPrimary />
                </Col>
                <Col>
                    {/* main content */}
                    <section className={`row gx-0 ${styleIndex.hero}`}>
                        <div className={`content col-9 d-flex flex-column justify-content-center height: 100% w-75% ${styleIndex.content}`}>
                            <h1 className={`${styleIndex.texth1}`} >Discover Recipe & Delicious Food</h1>
                            <div className={styleIndex.formGroup}>
                                <div className={`icon ${styleIndex.fontAwesomeSearch} `}><i className="fa-solid fa-magnifying-glass"></i></div>
                                <form onSubmit={(e) => onSubmit(e)} action="">
                                    <input onChange={(e) => setSearch(e.target.value)} type="text" className={styleIndex.formGroupInput} placeholder="Search Restaurant, Food" />
                                </form>
                            </div>
                        </div>
                        <div className={`col-3 d-flex align-items-center ${styleIndex.decoration}`}>
                            <img className={styleIndex.decorationImg} src={landingImage} alt="image container" />
                        </div>
                    </section>
                </Col>
                <Col>
                    {/* Recomended recipe */}
                    <section className={`row second-hero d-flex flex-column gx-0 ${styleIndex.heroRecommendedRecipe}`}>
                        <div className={`text-popular-recipe col-12 ${styleIndex.textRecommendedMobile}`}>
                            <h1 className={styleIndex.textRecommendedRecipe} >Popular For You !</h1>
                        </div>
                        <div className={`row d-flex flex-row col-12 ${styleIndex.recommendedRecipeMobile}`}>
                            <div className="col-sm-12 col-md-12 col-lg-6 ">
                                <img className={styleIndex.recommendedImg} src={popularRecipe} alt="image popular recipe" />
                                {/* <div className={styleIndex.boderRecommendedImg} ></div> */}
                            </div>
                            <div className={`col-sm-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center ${styleIndex.formTextRecommended}`}>
                                <h1 className={styleIndex.textRecommendedImg} >Healthy Bone Broth Ramen (Quick & Easy)</h1>
                                <small className={styleIndex.textSmallRecommendedImg} >Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s
                                    right!</small>
                                <button className={styleIndex.buttonRecommended} onClick="location.href='/detailrecipe.html'" type="submit">Learn More</button>
                            </div>
                        </div>

                    </section>
                </Col>
                <Col>
                    {/* new recipe */}
                    <section className={`row second-hero d-flex flex-column gx-0 ${styleIndex.heroNewRecipe}`}>
                        <div className="text-popular-recipe col-12">
                            <h1 className={styleIndex.textRecommendedRecipe} >New Recipe</h1>
                        </div>
                        <div className="row d-flex flex-row col-12">
                            <div className="col-sm-12 col-md-12 col-lg-6 ">
                                <img className={styleIndex.recommendedImg} src={ newRecipe} alt="image popular recipe" />
                            </div>
                            <div className={`col-sm-12 col-md-12 col-lg-6  d-flex flex-column justify-content-center ${styleIndex.formTextRecommended}`}>
                                <h1 className={styleIndex.textRecommendedImg} >Healthy Bone Broth Ramen (Quick & Easy)</h1>
                                <small className={styleIndex.textSmallRecommendedImg} >Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s
                                    right!</small>
                                <button className={styleIndex.buttonRecommended} onClick="location.href='/detailrecipe.html'" type="submit">Learn More</button>
                            </div>
                        </div>

                    </section>
                </Col>
                <Col>
                    {/* Latest recipe */}
                    <section className={`row second-hero d-flex flex-column gx-0 ${[styleIndex.hero, styleIndex.widthRow]}`}>
                        <div className={`${styleIndex.texListNewRecipe} ${styleIndex.widthCardImg}`}>
                            <h1 className={styleIndex.textAllrecipeH1} >Latest Recipe</h1>
                        </div>
                        <div className={`${styleIndex.cardNewRecipe} ${styleIndex.widthCardImg}`}>
                            <div className="row">
                                {
                                    latesRecipe.isLoading ? (
                                        <h1>Loading</h1>
                                    ) : latesRecipe.isError ? (
                                        <h1>Error</h1>
                                    ) : (
                                        latesRecipe.data.map((item, index) => {
                                            return (
                                                < div key={index} className={`col-sm-6 col-md-4 col-lg-4 ${styleIndex.divCardImg}`}>
                                                    <div className=" d-flex justify-content-center">
                                                        <Link to={`/${item.id}`} >
                                                            <div className={styleIndex.textDecorationListNewRecipe}>
                                                                <img src={`${process.env.REACT_APP_BACKEN_URL}/${item.photo}`} className={styleIndex.listNewRecipeImg} alt="" />
                                                                <p className={styleIndex.tagPListNewRecipe}>{item.title}</p>
                                                            </div>
                                                        </Link>

                                                    </div>
                                                </div>
                                            )
                                        })
                                    )
                                }
                            </div>
                        </div >
                    </section >
                </Col >
                <Col>
                    <Footer />
                </Col >
            </Row >
        </>
    )
}

export default Index

