import React from "react";
import { Link } from "react-router-dom";

const CategoryDevider = (props) => {
  return (
    <Link onClick={() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }} to={`/shop/${props.url}`}>
      <section className="container">
        <img src={props.img} alt="" width="100%" />
        {/* <h1 className="text-center" style={{ color: "white" }}>
            {props.name}
          </h1> */}
      </section>
    </Link>
  );
};

export default CategoryDevider;
