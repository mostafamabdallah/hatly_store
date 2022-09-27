import React, { useRef } from "react";
import "bootstrap/dist/js/bootstrap.bundle";
import logo from "../img/logo.png";
import logo2 from "../img/logo2.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faCartShopping,
  faEarth,
  faHome,
  faShop,
  faInfo,
  faPhone,
  faMobile,
  faClock,
  faBoltLightning, faHeadphones, faPlug, faMobileScreen,
  faPlus,
  faMinus,
  faHourglass
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
  faBehanceSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import SearchProduct from "./SearchProduct";
import { useDispatch } from "react-redux";
import { showAlert } from "../redux/alertReducer";

const NavBar = () => {
  const dispatch = useDispatch()
  const [elementMotion, setElementMotion] = useState({ x: "150%", opacity: 0 });
  const cart = useSelector((state) => state.cart);
  const [y, setY] = useState(window.scrollY);
  const [top, setTop] = useState('0px');
  const [color, setColor] = useState("transparent");
  const [text, setText] = useState("#384a8c");
  const [logos, setLogos] = useState(logo);
  const [motionCatergory, setMotionCatergory] = useState({});
  const [display, setDisplay] = useState('none');
  const [flage, setFlage] = useState(0)
  const [catIcon, setCatIcon] = useState(faPlus)

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        if (window.scrollY < 20) {
          setText("#384a8c");
          setColor("transparent");
          setTop('0');
          setLogos(logo);
        } else {
          setText("#ffffff");
          setTop('0');
          setColor("#3c4d8e");
          setLogos(logo2);
        }
      } else if (y < window.scrollY) {
        setText("#ffffff");
        setLogos(logo2);
        setTop("-300px");
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <div className="navBar"
      style={{
        top: top,
        transition: "1s",
        color: text,
        backgroundColor: color, zIndex: "99",
        position: 'fixed',
        width: '100%'
      }}>
      <div
        className="container"
      >
        <div className="row justify-content-between align-items-center  pt-lg-2 pt-2 pb-3 pb-lg-0 d-none d-lg-flex" style={{ borderBottom: `1px solid ${text}45` }}>
          <div className="col-auto">
            <p style={{ color: 'inherit', margin: '0px', fontWeight: 'bold' }}>The Easiest and Fastest instalment system.</p>
          </div>
          <div className="col-auto col-md-auto col-lg-auto d-none d-lg-block">
            <div className="row">
              <div className="col-auto p-3">
                <Link onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }} to="/">
                  <FontAwesomeIcon
                    className="col pe-2"
                    icon={faHome}
                  ></FontAwesomeIcon>
                  Home</Link>
              </div>
              <div className="col-auto p-3">
                <Link onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }} to="/shop/all">
                  <FontAwesomeIcon
                    className="col pe-2"
                    icon={faShop}
                  ></FontAwesomeIcon>
                  Shop</Link>
              </div>
              <div className="col-auto p-3">
                <Link onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }} to="/about">
                  <FontAwesomeIcon
                    className="col pe-2"
                    icon={faInfo}
                  ></FontAwesomeIcon>
                  About Us</Link>
              </div>
              <div className="col-auto p-3">
                <Link to="/contact">
                  <FontAwesomeIcon
                    className="col pe-2"
                    icon={faPhone}
                  ></FontAwesomeIcon>Contact Us</Link>
              </div>
            </div>
          </div>
          <div className="col-auto d-flex align-items-center justify-content-end">
            <a href="#" onClick={(e) => {
              dispatch(
                showAlert({
                  header: 'Masseage',
                  description: 'Comming Soon',
                  icon1: faHourglass,
                  icon2: faShop,
                  y: '0'
                }))
            }} >
              <FontAwesomeIcon
                className="col pe-2"
                icon={faEarth}
                style={{ fontSize: "20px" }}
              ></FontAwesomeIcon>
              <span className="d-none d-md-inline" style={{ fontSize: "20px" }} >العربية</span>
            </a>
          </div>
        </div>
        <div
          className="row justify-content-between align-items-center  pt-lg-0 pt-3 pb-3 pb-lg-0"
        >
          <div className="col-4 col-md-5 col-lg-2 p-1">
            <div className="row align-items-center">
              <div className="col-10 col-md-6 col-lg-8">
                <Link onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }} to="/"><img width="100%" src={logos}></img></Link>

              </div>
            </div>
          </div>
          <div className="col-4 col-md-2 d-lg-none" align="center">
            <div className="col-auto p-3">
              <Link to="/cart" style={{ position: "relative" }} onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}>
                {" "}
                <FontAwesomeIcon
                  className="col"
                  icon={faCartShopping}
                  style={{ fontSize: "20px" }}
                ></FontAwesomeIcon>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "-10px",
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#20c997",
                    borderRadius: "50%",
                  }}
                >
                  <i style={{ fontSize: "16px", color: "white" }}>
                    {cart.products.length}
                  </i>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-6 d-none d-lg-block p-1">
            <div className="row align-items-center justify-content-end">
              <div className="col-8" align="start">
                <SearchProduct color={text}></SearchProduct>
              </div>
              <div className="col-auto p-3">
                <Link to="/cart" onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }} style={{ position: "relative" }}>
                  {" "}
                  <FontAwesomeIcon
                    className="col"
                    icon={faCartShopping}
                    style={{ fontSize: "20px" }}
                  ></FontAwesomeIcon>
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      position: "absolute",
                      top: "-10px",
                      right: "-10px",
                      width: "20px",
                      height: "20px",
                      backgroundColor: "#20c997",
                      borderRadius: "50%",
                    }}
                  >
                    <i style={{ fontSize: "16px", color: "white" }}>
                      {cart.products.length}
                    </i>
                  </div>
                </Link>
              </div>
              <div className="col-auto p-3">
                <FontAwesomeIcon
                  onClick={() => {
                    setElementMotion({ x: "0px", opacity: 1 });
                  }}
                  icon={faBars}
                  style={{ fontSize: "30px" }}
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
          <div className="col-4 col-md-5 d-lg-none" align="end">
            <FontAwesomeIcon
              onClick={() => {
                setElementMotion({ x: "0px", opacity: 1 });
              }}
              icon={faBars}
              style={{ fontSize: "30px" }}
            ></FontAwesomeIcon>
          </div>
          <div className="col-4 col-md-5 d-lg-none">
            {/* <SearchProduct></SearchProduct> */}
          </div>
        </div>
        <div className="row d-lg-none mb-3">
          <div className="container d-flex justify-content-center"> 
          <div className="col-10">
            <SearchProduct color={text}></SearchProduct>
          </div>
          </div>
        </div>
      </div>
      {/* side nav */}
      <motion.div
        initial={{ x: "150%", opacity: 0 }}
        animate={elementMotion}
        transition={{
          duration: 1,
          repeatDelay: 1,
        }}
        className="col-12 col-md-6 col-lg-3 sideNav"
        style={{
          position: "fixed",
          maxHeight: "100vh",
          backgroundColor: "#384a8c",
          right: "0",
          zIndex: "999",
          overflowY: "scroll",
          overflowX: "hidden",
          bottom: 0,
          top: 0,
        }}
      >
        <div className="row justify-content-end pt-4">

          <div className="col-2">
            <FontAwesomeIcon
              onClick={() => {
                setElementMotion({ x: "150%", opacity: 0 });
              }}
              icon={faClose}
              style={{ fontSize: "30px" }}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className="row p-5" >
          <Link onClick={() => {
            setElementMotion({ x: "150%", opacity: 0 })
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }} to="/">
            <p className="text-end" style={{ fontSize: "25px" }}>
              <FontAwesomeIcon
                className="col pe-2"
                icon={faHome}
              ></FontAwesomeIcon>
              Home
            </p>
          </Link>
          <Link onClick={() => {
            setElementMotion({ x: "150%", opacity: 0 })
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }} to="/shop/all">
            <p className="text-end" style={{ fontSize: "25px" }}>
              <FontAwesomeIcon
                className="col pe-2"
                icon={faShop}
              ></FontAwesomeIcon>
              Shop
            </p>
          </Link>
          <Link onClick={() => {
            setElementMotion({ x: "150%", opacity: 0 })
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }} to="/about">
            <p className="text-end" style={{ fontSize: "25px" }}>
              <FontAwesomeIcon
                className="col pe-2"
                icon={faInfo}
              ></FontAwesomeIcon>
              About
            </p>
          </Link>
          <Link onClick={() => {
            setElementMotion({ x: "150%", opacity: 0 })
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }} to="/contact">
            <p className="text-end" style={{ fontSize: "25px" }}>
              <FontAwesomeIcon
                className="col pe-2"
                icon={faPhone}
              ></FontAwesomeIcon>
              Contact
            </p>
          </Link>
          <a href="#" onClick={() => {
            if (flage == 0) {
              setMotionCatergory({ x: '0', opacity: 1 })
              setFlage(1)
              setCatIcon(faMinus)
              setDisplay('block')
            } else {
              setMotionCatergory({ x: '-300px', opacity: 0 })
              setFlage(0)
              setCatIcon(faPlus)
              setTimeout(() => {
                setDisplay('none')

              }, 2000);
            }
          }}>
            <p className="text-end" style={{ fontSize: "25px" }}>
              <FontAwesomeIcon
                className="col pe-2"
                icon={catIcon}
              ></FontAwesomeIcon>
              Category
            </p>
          </a>
          <div className="category" style={{ display: display }}>

            <motion.div initial={{ x: "150%", opacity: 0 }}
              animate={motionCatergory}
              transition={{
                duration: 0.8,
                delay: 0
              }}>
              <Link onClick={() => {
                setElementMotion({ x: "150%", opacity: 0 })
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }} to="/shop/Mobiles">
                <p className="text-end" style={{ fontSize: "25px" }}>
                  <FontAwesomeIcon
                    className="col pe-2"
                    icon={faMobile}
                  ></FontAwesomeIcon>
                  Phones
                </p>
              </Link>
            </motion.div>
            <motion.div initial={{ x: "150%", opacity: 0 }}
              animate={motionCatergory}
              transition={{
                duration: 0.8,
                delay: 0.2
              }}>
              <Link onClick={() => {
                setElementMotion({ x: "150%", opacity: 0 })
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }} to="/shop/Smart Watches">
                <p className="text-end" style={{ fontSize: "25px" }}>
                  <FontAwesomeIcon
                    className="col pe-2"
                    icon={faClock}
                  ></FontAwesomeIcon>
                  Smart Watches
                </p>
              </Link>
            </motion.div>
            <motion.div initial={{ x: "150%", opacity: 0 }}
              animate={motionCatergory}
              transition={{
                duration: 0.8,
                delay: 0.4
              }}>
              <Link onClick={() => {
                setElementMotion({ x: "150%", opacity: 0 })
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }} to="/shop/Mobiles">
                <p className="text-end" style={{ fontSize: "25px" }}>
                  <FontAwesomeIcon
                    className="col pe-2"
                    icon={faBoltLightning}
                  ></FontAwesomeIcon>
                  Chargers
                </p>
              </Link>
            </motion.div>
            <motion.div initial={{ x: "150%", opacity: 0 }}
              animate={motionCatergory}
              transition={{
                duration: 0.8,
                delay: 0.6
              }}>
              <Link onClick={() => {
                setElementMotion({ x: "150%", opacity: 0 })
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }} to="/shop/Earbuds">
                <p className="text-end" style={{ fontSize: "25px" }}>
                  <FontAwesomeIcon
                    className="col pe-2"
                    icon={faHeadphones}
                  ></FontAwesomeIcon>
                  Headphones
                </p>
              </Link>
            </motion.div>
            <motion.div initial={{ x: "150%", opacity: 0 }}
              animate={motionCatergory}
              transition={{
                duration: 0.8,
                delay: 0.8
              }}>
              <Link onClick={() => {
                setElementMotion({ x: "150%", opacity: 0 })
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }} to="/shop/Mobiles">
                <p className="text-end" style={{ fontSize: "25px" }}>
                  <FontAwesomeIcon
                    className="col pe-2"
                    icon={faPlug}
                  ></FontAwesomeIcon>
                  Power Banks
                </p>
              </Link>
            </motion.div>
            <motion.div initial={{ x: "150%", opacity: 0 }}
              animate={motionCatergory}
              transition={{
                duration: 0.8,
                delay: 1
              }}>
              <Link onClick={() => {
                setElementMotion({ x: "150%", opacity: 0 })
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }} to="/shop/Mobiles">
                <p className="text-end" style={{ fontSize: "25px" }}>
                  <FontAwesomeIcon
                    className="col pe-2"
                    icon={faMobileScreen}
                  ></FontAwesomeIcon>
                  Cases
                </p>
              </Link>
            </motion.div>
          </div>
        </div>


        <div className="row ps-5 pe-5 icon">
          <FontAwesomeIcon
            className="col"
            icon={faFacebookSquare}
            style={{ fontSize: "30px" }}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="col"
            icon={faTwitterSquare}
            style={{ fontSize: "30px" }}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="col"
            icon={faYoutubeSquare}
            style={{ fontSize: "30px" }}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="col"
            icon={faBehanceSquare}
            style={{ fontSize: "30px" }}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="col"
            icon={faLinkedinIn}
            style={{ fontSize: "30px" }}
          ></FontAwesomeIcon>
        </div>
        <div className="row ps-5 pe-5">
          <img width="100%" src={logo2}></img>
        </div>
      </motion.div>
    </div>
  );
};

export default NavBar;
