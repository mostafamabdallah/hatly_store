import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faCartShopping,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import notFound from "../../../img/logo2.png";
const pStyle = {
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "1",
  display: "-webkit-box",
  whiteSpace: "normal",
  overflow: "hidden",
  color: "white",
  textDecoration: "none",
  marginBottom: '0px'
};


const scrollTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const Product = (props) => {
  return (
    <div
      className={props.grid}
      style={{ borderRadius: "10px", backgroundColor: "#384a8c" }}
    >
      <div align="center">
        <Link
          className="text-center"
          to={`/product/${props.data.id}`}
          onClick={scrollTop}
          style={{ textDecoration: "none" }}
        >
          <img
            src={props.data.image ? `https://hatlystore.tswsp.net${props.data.image}`:notFound}
            style={{
              width: "80%",
              height: "80%",
              filter: "drop-shadow(white 0px 0px 70px)",
            }}
          />
        </Link>
        <Link
          className="text-center"
          to={`/product/${props.data.id}`}
          onClick={scrollTop}
          style={{ textDecoration: "none" }}

        >
          <p style={pStyle} className="mt-2">{props.data.item_name}</p>
        </Link>
        <p
          className="text-center mb-2"
          style={{ fontWeight: "600", color: "#20c997" }}
        >{`EGP ${props.data.price_list_rate}`}</p>
        <div className="row">
          <p className="text-center m-0">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star text-secondary"></span>
          </p>
        </div>
        <Link onClick={scrollTop} to={`/product/${props.data.id}`} className="btn bg-white col-12 mt-1" style={{color:'#384a8c'}}>
          <FontAwesomeIcon
            className="col"
            icon={faCartShopping}
          ></FontAwesomeIcon> View</Link>
      </div>
    </div>
  );
};

export default Product;
