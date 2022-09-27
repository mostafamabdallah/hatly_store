import React from "react";
import { useState, useEffect } from "react";
import Product from "../shop/Product";
import { useParams, Link } from "react-router-dom";
import { fetchProduct } from "../../../API/product";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../redux/cartRedux";
import { motion } from "framer-motion";
import ReactImageMagnify from "react-image-magnify";
import { storeData } from "../../../redux/recentlyRedux";
import notFound from "../../../img/notFound.png";
import LoadingSingle from "../../LoadingSingle";
import sliderImage3 from "../../../img/slider2.png";
import sliderImage5 from "../../../img/slider6.png";

const SingleProduct = () => {
  const recentlyViewed = useSelector((state) => state.recently);
  const [img, setimgs] = useState();
  const [product, setProduct] = useState({});
  const [productImgs, setProductImgs] = useState([]);
  const [productCategoey, setProductCategoey] = useState();
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [singleProductQuantity, setSingleProductQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [gallary, setGallary] = useState([]);
  const [addCartDisable, setAddCartDisable] = useState({
    on: false,
    discrption: "ADD TO CART",
  });

  const { id } = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const handleClick = (e) => {
    setAddCartDisable({ on: true, discrption: "PRODUCT ON THE CART" });
    dispatch(
      addProduct({
        product,
        price: product.price_list_rate,
        singleProductQuantity: singleProductQuantity,
      })
    );
  };

  const getProduct = async () => {
    try {
      const res = await fetchProduct.get(`products/${id}`)
      const res2 = await fetchProduct.get(`attactments`, {
        params: {
          code: res.data[0].item_code
        }
      })
      setGallary([res.data[0].image, ...res2.data.map((el) => {
        return el.file_url
      })])

      setLoading(false);
      setProduct(res.data[0]);
      setimgs(res.data[0].image ? `https://hatlystore.tswsp.net${res.data[0].image}` : notFound);
      setProductImgs([
        res.data[0].image ? `https://hatlystore.tswsp.net${res.data[0].image}` : notFound,
      ]);
      setProductCategoey(res.data[0].item_group);
      cart.products.map((item, i) => {
        if (item.id == res.data[0].id) {
          setAddCartDisable({ on: true, discrption: "PRODUCT ON THE CART" });
        }
      });
      var recentlyData;
      if (localStorage.getItem("product") == null) {
        localStorage.setItem("product", JSON.stringify([res.data[0]]));
      } else {
        recentlyData = JSON.parse(localStorage.getItem("product"));
        if (recentlyData.id) {
          recentlyData = [ res.data[0],...recentlyData];
        } else {
          recentlyData.map((el, i) => {
            if (el.id == res.data[0].id) {
              return recentlyData.splice(i, 1);
            }
          });
          recentlyData = [ res.data[0],...recentlyData];
        }
        localStorage.setItem("product", JSON.stringify(recentlyData));
      }
      dispatch(
        storeData({
          recentlyData,
        })
      );
    } catch (er) { }
  };

  const getRelatedProducts = async (productCategoey) => {
    try {
      var res;
      res = await fetchProduct.get(`/category/${productCategoey}`);
      setRelatedProducts(res.data);
    } catch (er) { }
  };

  // const getRelatedGallary = async (productCategoey) => {
  //   try {
  //     var res;
  //     res = await fetchProduct.get(`/category/${productCategoey}`);
  //     setRelatedProducts(res.data);
  //   } catch (er) { }
  // };

  useEffect(() => {
    getProduct()
  }, [id]);

  useEffect(() => {
    if (productCategoey != undefined) {
      getRelatedProducts(productCategoey);
    }
  }, [productCategoey]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="pb-5"
      style={{ backgroundColor: "#ebeef5", paddingTop: "150px" }}
    >
      {loading ? (
        <div className="container">
          <LoadingSingle></LoadingSingle>
        </div>
      ) : (
        <div className="container">
          <div className="row justify-content-center">
            <motion.div
              initial={{ y: "-500px", opacity: 0 }}
              animate={{ y: "0px", opacity: 1 }}
              transition={{
                duration: 1,
                repeatDelay: 1,
              }}
              className="col-11 col-lg me-md-3 p-0"
            >
              <div className="row justify-content-center">
                <div className="col-2">
                  {gallary.map((image, i) => {
                    return (
                      <div key={i} className="col-12 mt-2 col-md-12">
                        <img
                          onClick={(e) => {
                            setimgs(e.target.getAttribute("src"));
                          }}
                          src={image ? `${`https://hatlystore.tswsp.net${image}`}` : notFound}
                          style={{ width: "100%", cursor: "pointer" }}
                        ></img>
                      </div>
                    );
                  })}
                </div>
                <div className="col-10 col-md-10 d-flext justify-content-center js">
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: img ? `${img}` : notFound,
                      },
                      largeImage: {
                        src: img ? `${img}` : notFound,
                        width: 1000,
                        height: 1000,
                      },
                      enlargedImageContainerDimensions: {
                        width: "50%",
                        height: "50%",
                      },
                      enlargedImagePosition: "over",
                    }}
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: "500px" }}
              animate={{ y: "0px" }}
              exit={{ x: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeatDelay: 1,
              }}
              className="col-11 col-lg-5 mt-4 mt-lg-0 d-flex align-items-start p-0"
            >
              <div
                className="p-4 col-12"
                style={{
                  backgroundColor: "white",
                  boxShadow: "0 13px 86px rgb(0 0 0 / 10%)",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  className="col-12 col-md-12"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    className="row"
                    style={{ borderBottom: "1px solid #ededed" }}
                  >
                    <h4
                      className=""
                      style={{
                        width: "90%",
                        fontSize: "1.25rem",
                        color: "#282828",
                        fontWeight: "400",
                      }}
                    >
                      {product.item_name}
                    </h4>

                    <p>
                      Category:{" "}
                      <Link onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                        to={`/shop/${product.item_group}`}
                        style={{ color: "#264996", textDecoration: "none" }}
                        href="#"
                      >
                        {product.item_group}
                      </Link>
                    </p>
                  </div>

                  {product.actual_qty > 0 ? (
                    <div className="row mt-2">
                      <div className="col-12">
                        <button disabled className="text-white btn btn-success">In Stock</button>
                        <p className="pt-3">
                          {
                            <button
                              className="btn btn-success fw-bold"
                              disabled
                            >
                              {" "}
                              {product.actual_qty}{" "}
                            </button>
                          }{" "}
                          Items remaining
                        </p>

                        <button
                          className="btn btn-primary"
                          disabled={addCartDisable.on}
                          onClick={() => {
                            if (singleProductQuantity > 1) {
                              setSingleProductQuantity(
                                singleProductQuantity - 1
                              );
                            }
                          }}
                          style={{
                            boxShadow: "0 4px 8px 0 rgb(0 0 0 / 20%)",
                            color: "white",
                          }}
                        >
                          <i className="fa fa-minus"></i>
                        </button>
                        <i className="p-3">{singleProductQuantity}</i>
                        <button
                          className="btn btn-primary"
                          disabled={addCartDisable.on}
                          onClick={() => {
                            if (
                              singleProductQuantity > 0 &&
                              singleProductQuantity < product.actual_qty
                            ) {
                              setSingleProductQuantity(
                                singleProductQuantity + 1
                              );
                            }
                          }}
                          style={{
                            boxShadow: "0 4px 8px 0 rgb(0 0 0 / 20%)",
                            color: "white",
                          }}
                        >
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button className="btn btn-danger fw-bold" disabled>
                      Sold out
                    </button>
                  )}

                  <div className="row pt-3">
                    <div className="col">
                      <h4>
                        EGP{" "}
                        <span className="text-success" style={{ fontWeight: "bold" }}>
                          {product.price_list_rate}
                        </span>
                      </h4>
                      {product.actual_qty > 0 ? (
                        <button
                          disabled={addCartDisable.on}
                          className="btn btn-primary p-2 mt-4"
                          style={{ width: "100%" }}
                          onClick={handleClick}
                        >
                          <span>
                            <i className="fa fa-cart-plus"></i>
                          </span>{" "}
                          {addCartDisable.discrption}
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="row justify-content-center">
            <motion.div
              initial={{ x: "-500px", opacity: 0 }}
              animate={{ x: "0px", opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1,
              }}
              className="col-11 col-md-12  mt-3 p-4"
              style={{
                backgroundColor: "white",
                boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
                borderRadius: "5px",
              }}
            >
              <h4
                className="pb-2"
                style={{ borderBottom: "1px solid #ededed" }}
              >
                KEY FEATURES
              </h4>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: product.description }}
              ></div>
            </motion.div>
          </div>
          <div className="row mt-3" >
            <div className="col-12 ps-0 pe-0">
              <img src={sliderImage3} alt="" width="100%" />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className="row p-4 mt-3 "
            style={{
              backgroundColor: "white",
              boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
              borderRadius: "5px",
              alignItems: "flex-end",
            }}
          >
            <h4 className="pb-2" style={{ borderBottom: "1px solid #ededed" }}>
              RELATED PRODUCTS
            </h4>
            {relatedProducts.map((data, i) => {
              return (
                <Product
                  grid="col-6 col-sm-6 col-md-4 col-lg-2 mb-5"
                  key={i}
                  data={data}
                ></Product>
              );
            })}
          </motion.div>
          <div className="row mt-3" >
            <div className="col-12 ps-0 pe-0">
              <img src={sliderImage5} alt="" width="100%" />
            </div>
          </div>
          {recentlyViewed.products == null ? (
            ""
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className="row p-4 mt-3 "
              style={{
                backgroundColor: "white",
                boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
                borderRadius: "5px",
                alignItems: "flex-end",
              }}
            >
              <h4
                className="pb-2"
                style={{
                  borderBottom: "1px solid #ededed",
                  textTransform: "uppercase",
                }}
              >
                recently viewed
              </h4>
              {recentlyViewed.products
                .map((data, i) => {
                  if (i < 6) {
                    return (
                      <Product
                        grid="col-6 col-sm-6 col-md-4 col-lg-2 mb-5"
                        key={i}
                        data={data}
                      ></Product>
                    );
                  }
                })}
            </motion.div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default SingleProduct;
