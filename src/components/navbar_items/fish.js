import React from "react";
import rohu from "../../images/rohu.jpg";
import "../../css/page_content_design.css";

function Fish({ data }) {
  return (
    <div className="page_content_container">
      <span className="content_title">Rohu Fish (Labeo Rohita)</span>
      <div className="content_image">
        <div className="content_description">
          Freshwater flavours now come in perfect medium-sized cuts. Carved into
          neat Bengali cut pieces the subtle flavour and the soft texture of
          this fish is what makes it such a hit. A bony fish, it elevates
          curries to a fragrant dish of distinct flavours. Try it &amp; find out
          what makes it the choice for fish curries in the East.
        </div>
        <div className="circle" />
        <img
          className="thumbnail_image"
          src={rohu}
          alt={"rohu fish"}
          height="200"
          width="200"
        />
      </div>
    </div>
  );
}

export default Fish;
