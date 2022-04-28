import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarPrimary from "../components/Navbar"
import styleProfile from '../assets/styles/css/Profile.module.css'
import { Row, Col } from 'reactstrap'
import Footer from '../components/Footer'
import iconEdit from '../assets/img/iconEditUser.svg'
import { Nav, NavItem, NavLink, TabContent, TabPane, Card, CardTitle, CardText, Button } from 'reactstrap'
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from '../redux/action/user'
import { deleteRecipe, getMyRecipe } from '../redux/action/allRecipe'
import Swal from "sweetalert2";

const Profile = () => {
    const [activeTabs, setactiveTabs] = useState('1')
    const dispatch = useDispatch()

    // usestate untuk edit
    const [title, setTitle] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [video, setVideo] = useState("")

    // Get Users Profile ad Myrecipe
    const users = useSelector((state) => {
        return state.users
    })
    const myRecipe = useSelector((state) => {
        return state.myRecipe
    })


    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getUser())
        dispatch(getMyRecipe())
    }, [])

    const onClick = (id) => {
        Swal.fire({
            title: "Are you sure delete this recipe?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteRecipe(id)
                    .then((response) => {
                        // Swal(result.message)
                        Swal.fire({
                            title: response.message,
                            icon: "success"
                        })
                        dispatch(getMyRecipe())
                    })
                    .catch((err) => {
                        Swal.fire({
                            title: 'Delete failed',
                            icon: "error"
                        })
                    })
            }
        })
    }



    return (
        <>
            {/* <h1>Halaman Profile</h1> */}
            <Row className="d-flex flex-column gx-0">
                <Col>
                    <NavBarPrimary />
                </Col>
                <Col>
                    <section className={`hero ${styleProfile.hero}`}>
                        <div className={` w-100 ${styleProfile.mainContent}`}>
                            <div className={styleProfile.profile}>
                                <img className={styleProfile.profileImg} src={`${process.env.REACT_APP_BACKEN_URL}/${users.data.photo}`} alt="" />
                                <div className={styleProfile.iconEditUser}>
                                    <img className={styleProfile.userImg} src={iconEdit} alt="" />
                                </div>
                                <h4>{users.data.name}</h4>
                            </div>
                            <Nav tabs className={`d-flex justify-content-left ${styleProfile.nabTab}`}>
                                <NavItem>
                                    <NavLink className={activeTabs == "1" ? "active" : ""} onClick={() => setactiveTabs("1")}>
                                        My Recipe
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={activeTabs == "2" ? "active" : ""} onClick={() => setactiveTabs("2")}>
                                        Saved Recipe
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={activeTabs == "3" ? "active" : ""} onClick={() => setactiveTabs("3")}>
                                        Liked Recipe
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTabs} className={styleProfile.tabContentNav} >
                                <TabPane tabId="1">
                                    <Row className="d-flex flex-row justify-content-left w-100" >
                                        {/* <Col className="col-sm-6 col-md-4 col-lg-4" sm="12"> */}
                                        <div className="row">

                                            {
                                                myRecipe.data.isLoading ? (
                                                    <div>Loading</div>
                                                ) : myRecipe.data.isError ? (
                                                    <div>Errorr</div>
                                                ) : myRecipe.data.map((item, index) => {
                                                    return (
                                                        <div key={index} className="col-sm-6 col-md-3 col-lg-3">

                                                            <div className={` d-flex w-100 ${styleProfile.listMyRecipe}`}>
                                                                <div className={`d-flex flex-column ${styleProfile.formListMyRecipe}`}>
                                                                    <Link to={`/editrecipe/${item.id}?title=${title}&ingredient=${ingredients}&video=${video}`} className={`fa-solid fa-pen-to-square ${styleProfile.actionRecipeEdit} `}></Link>
                                                                    <button
                                                                        onClick={() => onClick(item.id)}
                                                                        className={styleProfile.actionRecipeDelete}
                                                                    >
                                                                        <i className="far fa-trash-can"></i>
                                                                    </button>
                                                                    <Link className={styleProfile.cardMyRecipeImg} to={`/${item.id}`}>
                                                                        <img className={styleProfile.cardMyRecipeImg} src={`${process.env.REACT_APP_BACKEN_URL}/${item.photo}`} alt="" />
                                                                        <small className={styleProfile.titleMyRecipe} >{item.title}</small>
                                                                    </Link>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row>
                                        <Col className={styleProfile.heighTabContent} sm="12">
                                            {/* <h4>Tab 2 Contents</h4> */}
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="3">
                                    <Row>
                                        <Col className={styleProfile.heighTabContent} sm="12">
                                            {/* <h4>Tab 3 Contents</h4> */}
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </div>
                    </section>
                </Col>
                <Col>
                    <Footer />
                </Col>
            </Row >

        </>
    )
}

export default Profile