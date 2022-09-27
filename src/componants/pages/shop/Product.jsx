import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../../img/notFound.png";

const pStyle = {
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "1",
  display: "-webkit-box",
  whiteSpace: "normal",
  overflow: "hidden",
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
    <div className={props.grid}>
      <div>
        <Link to={`/product/${props.data.id}`} onClick={scrollTop}>
          <img
            className="productImage"
            src={props.data.image ? `https://hatlystore.tswsp.net${props.data.image}`:notFound}
            style={{ width: "100%", height: "100%" }}
          />
        </Link>
        <Link to={`/product/${props.data.id}`} onClick={scrollTop}>
          <p style={pStyle}>{props.data.item_name}</p>
        </Link>

        <p style={{ fontWeight: "500" }}>{`EGP ${props.data.price_list_rate}`}</p>
        <Link
          onClick={scrollTop}
          className="btn btn-primary"
          style={{ width: "100%" }}
          to={`/product/${props.data.id}`}
        >
          <i className="fa fa-eye"></i> View
        </Link>
      </div>
    </div>
  );
};

export default Product;
