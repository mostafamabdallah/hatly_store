import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from "mdb-react-ui-kit";

export default function ImageSlider(props) {
  return (
    <MDBCarousel showControls interval={props.interval}>
      <MDBCarouselInner>
        {props.img.map((img, i) => {
          if (i == 1) {
            return (
              <MDBCarouselItem className="active" key={i}>
                <MDBCarouselElement
                  style={{ borderRadius: "15px" }}
                  src={img}
                  alt="..."
                />
              </MDBCarouselItem>
            );
          } else {
            return (
              <MDBCarouselItem key={i}>
                <MDBCarouselElement
                  style={{ borderRadius: "15px" }}
                  src={img}
                  alt="..."
                />
              </MDBCarouselItem>
            );
          }
        })}
      </MDBCarouselInner>
    </MDBCarousel>
  );
}
