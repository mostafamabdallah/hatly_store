import React from "react";
import Loading from "../../Loading";
import styled from "styled-components";
import phonesImage from "../../../img/image0-1536x1152.png";
import wahtchImage from "../../../img/image1-1536x1152.png";
import chargerImage from "../../../img/image2-1536x1152.png";
import headphonesImage from "../../../img/image3-1536x1152.png";
import caseImage from "../../../img/image4-1536x1152.png";
import powerBanksImage from "../../../img/image5-1536x1152.png";
import gaming from '../../../img/gaming.png'
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import ImageSlider from "../../ImageSlider";
import { useState, useEffect } from "react";
import { fetchProduct } from "../../../API/product";
import Product from "../shop/ProductHome";
import sliderImage2 from "../../../img/slider1.png";
import sliderImage3 from "../../../img/slider2.png";
import sliderImage4 from "../../../img/slider3.png";
import sliderImage5 from "../../../img/slider4.png";
import sliderImage6 from "../../../img/slider5.png";
import sliderImage7 from "../../../img/slider6.png";
import sliderImage8 from "../../../img/slider7.png";
import mobileBanner from '../../../img/PHONES BANNER.png'
import watchBanner from '../../../img/SMART WATCHES BANNER.png'
import chargerBanner from '../../../img/chargers banner.png'
import headphoneBanner from '../../../img/HEADPHONES BANNERS.png'
import powerbankBanner from '../../../img/power banks banner.png'
import casesBanner from '../../../img/CASES BANNER.png'
import Whatsapp from "../../Whatsapp";


import { useInView } from "react-intersection-observer";
import CategoryDevider from "./CategoryDevider";
import Category from "./Category";
import PaymentSlider from "../../PaymentSlider";


const categoryArray = [
  {
    name: "Phones",
    img: phonesImage,
    url: 'Mobiles'
  },
  {
    name: "Chargers",
    img: chargerImage,
    url: 'Chargers'
  },
  {
    name: "Smart Watches",
    img: wahtchImage,
    url: 'Smart Watches'

  },
  {
    name: "Headphones",
    img: headphonesImage,
    url: 'Earbuds'
  },
  {
    name: "Power Banks",
    img: powerBanksImage,
    url: 'Mobiles'
  },
  {
    name: "Cases",
    img: caseImage,
    url: 'Mobiles'
  },
  {
    name: "Accessories ",
    img: gaming,
    url: 'Mobiles'
  },
];

const slider1 = [sliderImage2, sliderImage3, sliderImage5];
const slider2 = [sliderImage4, sliderImage6, sliderImage7];

const MainSection = styled.section`
  background-color: #ebeef5;
`;

const Home = () => {
  const { ref, inView } = useInView({
    rootMargin: "250px ",
  });

  const animation = useAnimation();
  const [countering, setCountering] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (countering < 50) {
        setCountering(countering + 1);
      }
    }, 40);
  }, [countering]);

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          type: "spring",
          duration: 5,
          bounce: 0.3,
        },
      });
    }
    // if (!inView) {
    //   animation.start({
    //     opacity: 0,
    //   });
    // }
  }, [inView]);

  const [productsMobiles, setProductsMobiles] = useState([]);
  const [productsWatches, setProductsWatches] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState();

  const getProductsMobiles = async () => {
    try {
      var res;
      setLoading(true);
      res = await fetchProduct.get(`/category/mobiles`);
      setProductsMobiles(res.data);
      setLoading(false);
    } catch (er) { }
  };

  const getProductsWatches = async () => {
    try {
      var res;
      setLoading(true);
      res = await fetchProduct.get(`/category/Smart Watches`);
      setProductsWatches(res.data);
      setLoading(false);
    } catch (er) { }
  };

  useEffect(() => {
    getProductsMobiles();
    getProductsWatches();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <MainSection
        style={{
          backgroundImage: "linear-gradient(180deg, #ebeef5, #384a8c)",
          position: "relative",
          paddingTop: "150px",
        }}
      >
        <div className="container" style={{ zIndex: "1" }}>
          <div className="row pt-4">
            <motion.div
              initial={{ y: "-500px" }}
              animate={{ y: "0" }}
              transition={{ duration: 1 }}
              className="col-md-12"
            >
              <div
                className="example-container "
                style={{ borderRadius: "15px" }}
              >
                <ImageSlider img={slider1} interval={3000}></ImageSlider>
              </div>
            </motion.div>
          </div>
          <div className="row align-items-center pt-sm-4 pb-5 pb-sm-5 pb-md-0 pb-md-4">
            <div className="col-md-7">
              <div
                className="row justify-content-center"
              >
                <motion.div
                  initial={{ x: "-600px", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    type: "spring",
                    delay: 2,
                  }}
                  className="col-md-8 pt-4 pt-sm-4 pt-md-0"
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "15px",
                    }}
                    src={sliderImage8}
                  />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 2,
                  }}
                  className="col-8 col-md-4 pt-4 pt-sm-4 pt-md-0"
                  style={{ minHeight: "100%" }}
                >
                  <div
                    className="p-4 pm-0"
                    style={{
                      backgroundColor: "white",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      borderRadius: "15px",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <h3
                      className="text-center text-bold"
                      style={{ color: "#fa4385" }}
                    >
                      {countering}+
                    </h3>
                    <p style={{ margin: "0" }} className="text-center">
                      OFFERS
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ x: "-600px", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1.5,
                type: "spring",
                delay: 1,
              }}
              className="col-12 col-md-5 mt-4 mt-md-0"
            >
              <div className="example-container" style={{ overflow: "hidden" }}>
                <ImageSlider img={slider2} interval={2500}></ImageSlider>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1658931295">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </MainSection>
      <section ref={ref}>

        <div className="container mb-3">
          <motion.div
            animate={animation}
            className="row justify-content-between align-items-center"
          >
            <h3 className="pt-2 pb-2">Categories</h3>
            {categoryArray.map((category, i) => {
              return <Category key={i} category={category}></Category>;
            })}
          </motion.div>
        </div>
      </section>
      <div className="container">
        <PaymentSlider number={3}></PaymentSlider>
      </div>
      <CategoryDevider img={mobileBanner} name="Mobiles" url="Mobiles"></CategoryDevider>
      <section ref={ref}>
        <div className="container">
          <div className="d-flex p-2  justify-content-between mb-3 mt-3" style={{ backgroundColor: '#384a8c' }}>
            <div className="col-4 d-flex flex-column justify-content-center"><h5 style={{ margin: '0', color: 'white' }}>Mobile</h5></div>
            <div className="col-4 d-flex flex-column justify-content-center"><Link onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }} to="/shop/mobiles"><h6 style={{ textAlign: 'end', margin: '0', color: 'white' }}>SEE ALL {'>'}</h6></Link></div>
          </div>
          <div
            className="row justify-content-center align-items-center"
            style={{ alignItems: "flex-end", gap: '10px' }}
          >
            {!loading ? (
              productsMobiles.map((product, i) => {
                if (i < 5) {
                  return (
                    <Product
                      grid="col-5 col-sm-5 col-md-3 col-lg-2 mb-3 p-3 productImage"
                      key={i}
                      data={product}
                    ></Product>
                  );
                }
              })
            ) : (
              <Loading grid="col-6 col-sm-6 col-md-6 col-lg mb-5 p-3 productImage" />
            )}
          </div>
        </div>
      </section>
      <CategoryDevider url="Mobiles"
        img={chargerBanner}
        name="New & Trendly"
      ></CategoryDevider>
      <section>
        <div className="container">
          <div className="d-flex p-2  justify-content-between mb-3 mt-3" style={{ backgroundColor: '#384a8c' }}>
            <div className="col-4 d-flex flex-column justify-content-center"><h5 style={{ margin: '0', color: 'white' }}>Chargers</h5></div>
            <div className="col-4 d-flex flex-column justify-content-center"><Link onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }} to="/shop/mobiles"><h6 style={{ textAlign: 'end', margin: '0', color: 'white' }}>SEE ALL {'>'}</h6></Link></div>
          </div>
          <div
            className="row justify-content-center"
            style={{ alignItems: "flex-end", gap: '10px' }}
          >
            {!loading ? (
              productsWatches.map((product, i) => {
                if (i < 5) {
                  return (
                    <Product
                      grid="col-5 col-sm-5 col-md-5 col-lg-2 mb-3 p-3 productImage"
                      key={i}
                      data={product}
                    ></Product>
                  );
                }
              })
            ) : (
              <Loading grid="col-5 col-sm-5 col-md-5 col-lg mb-5 p-3 productImage" />
            )}
          </div>
        </div>
      </section>
      <CategoryDevider img={watchBanner} name="Smart Phones" url="Mobiles"></CategoryDevider>
      <section style={{ backgroundColor: "#ebeef5" }}>
        <div className="container">
          <div className="d-flex p-2  justify-content-between mb-3 mt-3" style={{ backgroundColor: '#384a8c' }}>
            <div className="col-4 d-flex flex-column justify-content-center"><h5 style={{ margin: '0', color: 'white' }}>Smart watches</h5></div>
            <div className="col-4 d-flex flex-column justify-content-center"><Link onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }} to="/shop/mobiles"><h6 style={{ textAlign: 'end', margin: '0', color: 'white' }}>SEE ALL {'>'}</h6></Link></div>
          </div>
          <div
            className="row justify-content-center"
            style={{ alignItems: "flex-end", gap: '10px' }}
          >
            {!loading ? (
              productsWatches.map((product, i) => {
                if (i < 5) {
                  return (
                    <Product
                      grid="col-5 col-sm-5 col-md-5 col-lg-2 mb-3 p-3 productImage"
                      key={i}
                      data={product}
                    ></Product>
                  );
                }
              })
            ) : (
              <Loading grid="col-5 col-sm-5 col-md-5 col-lg mb-5 p-3 productImage" />
            )}
          </div>
        </div>
      </section>
      <CategoryDevider
        url="Mobiles"
        img={headphoneBanner}
        name="New & Trendly"
      ></CategoryDevider>
      <section>
        <div className="container">
          <div className="d-flex p-2  justify-content-between mb-3 mt-3" style={{ backgroundColor: '#384a8c' }}>
            <div className="col-4 d-flex flex-column justify-content-center"><h5 style={{ margin: '0', color: 'white' }}>Headphones</h5></div>
            <div className="col-4 d-flex flex-column justify-content-center"><Link onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }} to="/shop/mobiles"><h6 style={{ textAlign: 'end', margin: '0', color: 'white' }}>SEE ALL {'>'}</h6></Link></div>
          </div>
          <div
            className="row justify-content-center"
            style={{ alignItems: "flex-end", gap: '10px' }}
          >
            {!loading ? (
              productsWatches.map((product, i) => {
                if (i < 5) {
                  return (
                    <Product
                      grid="col-5 col-sm-5 col-md-5 col-lg-2 mb-3 p-3 productImage"
                      key={i}
                      data={product}
                    ></Product>
                  );
                }
              })
            ) : (
              <Loading grid="col-5 col-sm-5 col-md-5 col-lg mb-5 p-3 productImage" />
            )}
          </div>
        </div>
      </section>
      <CategoryDevider
        url="Mobiles"
        img={powerbankBanner}
        name="New & Trendly"
      ></CategoryDevider>
      <section>
        <div className="container">
          <div className="d-flex p-2  justify-content-between mb-3 mt-3" style={{ backgroundColor: '#384a8c' }}>
            <div className="col-4 d-flex flex-column justify-content-center"><h5 style={{ margin: '0', color: 'white' }}>Powerbanks</h5></div>
            <div className="col-4 d-flex flex-column justify-content-center"><Link onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }} to="/shop/mobiles"><h6 style={{ textAlign: 'end', margin: '0', color: 'white' }}>SEE ALL {'>'}</h6></Link></div>
          </div>
          <div
            className="row justify-content-center"
            style={{ alignItems: "flex-end", gap: '10px' }}
          >
            {!loading ? (
              productsWatches.map((product, i) => {
                if (i < 5) {
                  return (
                    <Product
                      grid="col-5 col-sm-5 col-md-5 col-lg-2 mb-3 p-3 productImage"
                      key={i}
                      data={product}
                    ></Product>
                  );
                }
              })
            ) : (
              <Loading grid="col-5 col-sm-5 col-md-5 col-lg mb-5 p-3 productImage" />
            )}
          </div>
        </div>
      </section>
      <CategoryDevider
        url="Mobiles"
        img={casesBanner}
        name="New & Trendly"
      ></CategoryDevider>
      <section>
        <div className="container">
          <div className="d-flex p-2  justify-content-between mb-3 mt-3" style={{ backgroundColor: '#384a8c' }}>
            <div className="col-4 d-flex flex-column justify-content-center"><h5 style={{ margin: '0', color: 'white' }}>Cases</h5></div>
            <div className="col-4 d-flex flex-column justify-content-center"><Link onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }} to="/shop/mobiles"><h6 style={{ textAlign: 'end', margin: '0', color: 'white' }}>SEE ALL {'>'}</h6></Link></div>
          </div>
          <div
            className="row justify-content-center"
            style={{ alignItems: "flex-end", gap: '10px' }}
          >
            {!loading ? (
              productsWatches.map((product, i) => {
                if (i < 5) {
                  return (
                    <Product
                      grid="col-5 col-sm-5 col-md-5 col-lg-2 mb-3 p-3 productImage"
                      key={i}
                      data={product}
                    ></Product>
                  );
                }
              })
            ) : (
              <Loading grid="col-5 col-sm-5 col-md-5 col-lg mb-5 p-3 productImage" />
            )}
          </div>
        </div>
      </section>
      <CategoryDevider
        url="all"
        img={sliderImage2}
      ></CategoryDevider>
      <Whatsapp></Whatsapp>

    </motion.div>

  );
};

export default Home;
