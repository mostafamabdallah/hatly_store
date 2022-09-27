import axios from "axios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Iframe from "react-iframe";
import { useForm } from "react-hook-form";
import notFound from "../../../img/notFound.png";
import { useNavigate } from "react-router-dom";
import sliderImage5 from "../../../img/slider4.png";
import { motion } from "framer-motion";
import PaymentSlider from "../../PaymentSlider";

import cashImage from "../../../img/Cash-on-delivery.png";
import cardImage from "../../../img/Credit-Card.png";
import instalmentImage from "../../../img/Bank-Installments.png";
import valuImage from "../../../img/Value.png";


const pStyle = {
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "1",
  display: "-webkit-box",
  whiteSpace: "normal",
  overflow: "hidden",
  margin: "0",
};

const Checkout = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    const data = cart.products.map((product) => {
      return {
        name: product.item_name,
        amount_cents: product.price_list_rate * 100,
        quantity: product.quantity,
      };
    });
    setItems(data);
  }, [cart]);

  const [paymentKeys, setPaymentKeys] = useState("");
  const [display, setDisplay] = useState("none");
  const [iframeID, setIframeID] = useState();
  const [integrationID, setIntegrationID] = useState(2501045);
  const [cash, setCash] = useState(true);
  const [disable, setDisable] = useState({
    value: false,
    text: "SAVE AND CONTINUE",
  });
  const iframe = `https://accept.paymob.com/api/acceptance/iframes/${iframeID}?payment_token=`;

  const getToken = () =>
    axios.post("https://accept.paymob.com/api/auth/tokens", {
      api_key:
        "ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6VXhNaUo5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2TWpBMU9Ea3lMQ0p1WVcxbElqb2lhVzVwZEdsaGJDSjkuOXBjWkVFbDNqRkxkZExSYTdjU1piMFhoU0d4RHpfYkp3WUZ6dVIyQXFZZlc4aS02Tmh3cHktNVdLNjNvUnlYN2pXQmNEZ2RNdzRaWnNFZzJqMTdzNGc=",
    });

  const sendOrder = (token, data) =>
    axios.post("https://accept.paymob.com/api/ecommerce/orders", {
      auth_token: token,
      delivery_needed: "false",
      // amount_cents: `${Number(cart.total) * 100}`,
      amount_cents: `${100}`,
      currency: "EGP",
      items: items,
      shipping_data: {
        apartment: data.apartment,
        email: data.email,
        floor: data.floor,
        first_name: data.firstName,
        street: data.street,
        building: data.building,
        phone_number: data.phone,
        extra_description: data.extraDescription,
        city: data.city,
        country: "EG",
        last_name: data.lastName,
        state: data.state,
      },
    });

  const getPaymentKeys = (token, orderId, data) =>
    axios.post("https://accept.paymob.com/api/acceptance/payment_keys", {
      auth_token: token,
      // amount_cents: `${Number(cart.total) * 100}`,
      amount_cents: `${100}`,
      expiration: 3600,
      order_id: orderId,
      billing_data: {
        apartment: data.apartment,
        email: data.email,
        floor: data.floor,
        first_name: data.firstName,
        street: data.street,
        building: data.building,
        phone_number: data.phone,
        extra_description: data.extraDescription,
        city: data.city,
        country: "EG",
        last_name: data.lastName,
        state: data.state,
      },
      currency: "EGP",
      integration_id: integrationID,
      lock_order_when_paid: "true",
    });

  const payment = (data) => {
    setDisable({ value: true, text: "PLEASE WAIT..." });
    getToken().then((response) => {
      localStorage.setItem("token", JSON.stringify(response.data.token));
      sendOrder(response.data.token, data).then((res) => {
        getPaymentKeys(response.data.token, res.data.id, data).then(
          (paymentdata) => {
            setPaymentKeys(paymentdata.data.token);
            setTimeout(() => {
              setDisplay("block");
            }, 1000);
          }
        );
      });
    });
  };

  const cashRequest = (token) =>
    axios.post("https://accept.paymob.com/api/acceptance/payments/pay", {
      source: {
        identifier: "cash",
        subtype: "CASH",
      },
      payment_token: token,
    });
  const paymentCash = (data) => {
    setDisable({ value: true, text: "PLEASE WAIT..." });
    getToken().then((response) => {
      localStorage.setItem("token", JSON.stringify(response.data.token));
      sendOrder(response.data.token, data).then((res) => {
        getPaymentKeys(response.data.token, res.data.id, data).then(
          (paymentdata) => {
            cashRequest(paymentdata.data.token).then((res) => {
              navigate(
                "/payment_response/?" + res.data.redirection_url.split("?")[1]
              );
            });
          }
        );
      });
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="pb-5  d-flex justify-content-center"
      style={{ backgroundColor: "#ebeef5", paddingTop: "150px" }}
    >
      <div className="container">
        <form
          onSubmit={handleSubmit((data) => {
            if (cash) {
              paymentCash(data);
            } else {
              payment(data);
            }
          })}
        >
          <div className="row">
            <h6 className="col-12" style={{ color: "#ababab", padding: "0" }}>
              CHECKOUT
            </h6>
          </div>
          <div className="row">
            <div
              className="col-12 col-md me-3 p-3"
              style={{
                backgroundColor: "white",
                boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
                borderRadius: "5px",
              }}
            >
              <h6
                className="pb-3"
                style={{ borderBottom: "1px solid #ededed" }}
              >
                <i
                  style={{ color: "#ababab", fontSize: "1.25rem" }}
                  className="fa fa-check-circle pe-4"
                  aria-hidden="true"
                ></i>{" "}
                DETAILS
              </h6>

              <div className="row">
                <div className="p-4">
                  <div className="row">
                    <div className="mb-3 col-6">
                      <label className="form-label">First Name*</label>
                      <input
                        {...register("firstName", {
                          required: "This is required",
                        })}
                        type="text"
                        className="form-control"
                      />
                      <p className="mb-0 pt-2 text-danger">
                        {errors.firstName?.message}
                      </p>
                    </div>
                    <div className="mb-3 col-6">
                      <label className="form-label">Last Name*</label>
                      <input
                        {...register("lastName", {
                          required: "This is required",
                        })}
                        type="text"
                        className="form-control"
                      />
                      <p className="mb-0 pt-2 text-danger">
                        {errors.lastName?.message}
                      </p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone*</label>
                    <input
                      {...register("phone", {
                        required: "This is required",
                        maxLength: {
                          value: 13,
                          message: "Max number is 13",
                        },
                      })}
                      type="number"
                      className="form-control"
                    />
                    <p className="mb-0 pt-2 text-danger">
                      {errors.phone?.message}
                    </p>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email*</label>
                    <input
                      {...register("email", { required: "This is required" })}
                      type="email"
                      className="form-control"
                    />
                    <p className="pb-0 pt-2 text-danger">
                      {errors.email?.message}
                    </p>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">State*</label>
                    <input
                      {...register("state", { required: "This is required" })}
                      type="text"
                      className="form-control"
                    />
                    <p className="mb-0 pt-2 text-danger">
                      {errors.state?.message}
                    </p>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Street*</label>
                    <input
                      {...register("street", { required: "This is required" })}
                      type="text"
                      className="form-control"
                    />
                    <p className="mb-0 pt-2 text-danger">
                      {errors.street?.message}
                    </p>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Building*</label>
                    <input
                      {...register("building", {
                        required: "This is required",
                      })}
                      type="text"
                      className="form-control"
                    />
                    <p className="mb-0 pt-2 text-danger">
                      {errors.building?.message}
                    </p>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Floor*</label>
                    <input
                      {...register("floor", { required: "This is required" })}
                      type="text"
                      className="form-control"
                    />
                    <p className="mb-0 pt-2 text-danger">
                      {errors.floor?.message}
                    </p>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Apartment*</label>
                    <input
                      {...register("apartment", {
                        required: "This is required",
                      })}
                      type="text"
                      className="form-control"
                    />
                    <p className="mb-0 pt-2 text-danger">
                      {errors.apartment?.message}
                    </p>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">City*</label>
                    <input
                      {...register("city", { required: "This is required" })}
                      type="text"
                      className="form-control"
                    />
                    <p className="mb-0 pt-2 text-danger">
                      {errors.city?.message}
                    </p>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Extra Description</label>

                    <textarea
                      {...register("extraDescription")}
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 mt-3 mt-md-0">
              <div
                className="row p-3"
                style={{
                  backgroundColor: "white",
                  boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
                  borderRadius: "5px",
                }}
              >
                <div className="col-12">
                  <h6
                    className="pb-3"
                    style={{ borderBottom: "1px solid #ededed" }}
                  >
                    Your Order ({cart.products.length})
                  </h6>
                  {cart.products.map((product, i) => {
                    return (
                      <div className="row align-items-center" key={i}>
                        <div className="col-4">
                          <img
                            width="100%"
                            src={
                              product.image
                                ? `${`https://hatlystore.tswsp.net${product.image}`}`
                                : notFound
                            }
                          />
                        </div>
                        <div className="col-8">
                          <p style={pStyle}>{product.name}</p>
                          <p
                            style={{
                              margin: "0",
                              color: "#20c997",
                              fontWeight: "bold",
                            }}
                          >
                            {product.price}
                          </p>
                          <p style={{ margin: "0" }}>Qty: {product.quantity}</p>
                        </div>
                      </div>
                    );
                  })}
                  <div
                    className="row justify-content-between pt-2 pb-2"
                    style={{
                      borderBottom: "1px solid #ededed",
                      borderTop: "1px solid #ededed",
                    }}
                  >
                    <h6 className="col-4" style={{ margin: "0" }}>
                      Subtotal
                    </h6>
                    <p
                      className="col-8 text-end"
                      style={{
                        margin: "0",
                        fontSize: "1rem",
                        color: "#20c997",
                        fontWeight: "bold",
                      }}
                    >
                      {cart.total}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="row mt-3 p-3 "
                style={{
                  backgroundColor: "white",
                  boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
                  borderRadius: "5px",
                }}
              >
                <div className="col-12">
                  <h6
                    className="pb-3"
                    style={{ borderBottom: "1px solid #ededed" }}
                  >
                    Payment Methods
                  </h6>
                  <div className="row">
                    <div className="col-12">
                      <div className="row mb-2 align-items-center">
                        <div className="col-2">
                          <input
                            checked={cash}
                            onChange={() => { }}
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            onClick={(e) => {
                              setIntegrationID(2501045)
                              setCash(true);
                            }}
                          />
                        </div>
                        <div className="col-3">
                        <img
                            width="100%"
                            src={cashImage}
                          />
                        </div>
                        <div className="col">
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Cash on delivery
                          </label>
                        </div>
                      </div>
                      <div className="row mb-2 align-items-center" >
                        <div className="col-2">
                          <input
                            onClick={() => {
                              setIntegrationID(2715432)
                              setIframeID(402130);
                              setCash(false);
                            }}
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                          />
                        </div>
                        <div className="col-3">
                        <img
                            width="100%"
                            src={cardImage}
                          />
                        </div>
                        <div className="col">
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Online Payment
                          </label>
                        </div>
                      </div>
                      <div className="row mb-2 align-items-center">
                        <div className="col-2">
                          <input
                            onClick={() => {
                              setIntegrationID(2715432)
                              setIframeID(671776);
                              setCash(false);
                            }}
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                          />
                        </div>
                        <div className="col-3">
                        <img
                            width="100%"
                            src={instalmentImage}
                          />
                        </div>
                        <div className="col">
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Bank Installment
                          </label>
                        </div>
                      </div>
                      <div className="row mb-2 align-items-center">
                        <div className="col-2">
                          <input
                            onClick={() => {
                              setIntegrationID(2336861);
                              setIframeID(407523);
                              setCash(false);
                            }}
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                          />
                        </div>
                        <div className="col-3">
                          <img
                            width="100%"
                            src="https://accept.paymobsolutions.com/static/img/ValU.png"
                          />
                        </div>
                        <div className="col">
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            VaLU
                          </label>
                        </div>
                      </div>
                      <div className="row mt-5">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={disable.value}
                        >
                          {disable.text}
                        </button>


                      </div>
                      <div>
                        <PaymentSlider number={2}></PaymentSlider>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="row mt-3" >
          <div className="col-12 ps-0 pe-0">
            <img src={sliderImage5} alt="" width="100%" />
          </div>
        </div>
      </div >

      <div
        className="container p-0"
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          background: "#384a8cba",

          display: display,
        }}
      >
        <div
          className="row justify-content-center"
          style={{
            zIndex: "1",
            // top: "20%",
            height: "100%",
          }}
        >
          <Iframe
            allowtransparency="false"
            className="col-12 col-md-12"
            url={`${iframe}${paymentKeys}`}
            height="100%"
            id="myId"
          />
        </div>
      </div>
    </motion.div >
  );
};

export default Checkout;
