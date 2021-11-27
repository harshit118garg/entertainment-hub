import React from "react";
import "./SingleContent.css";
import { img_300, unavailable } from "../../config/config";
import { Badge } from "@material-ui/core";
import ContentModal from "../ContentModal/ContentModal";

function SingleContent(props) {
  const { id, poster, title, date, media_type, vote_average } = props;

  return (
    <>
      <div className="media">
        <Badge
          badgeContent={vote_average || "0"}
          color={vote_average > 7 ? "primary" : "secondary"}
        />
        <img
          className="poster"
          src={poster ? `${img_300}/${poster}` : unavailable}
          alt={title}
        />
        <b className="title">{title}</b>
        <span className="subTitle">
          {media_type === "tv" ? "TV Series" : "Movie"}
          <span className="subTitle">{date}</span>
        </span>
      </div>
    </>
  );
}

export default SingleContent;
