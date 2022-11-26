import React from "react";
import "./Card.css";
// import sona from "../assets/sona.jpg";

const Card = ({
  title,
  author,
  category,
  date,
  excerpt,
  featureding,
  tags,
  articleurl,
}) => {
  return (
    <div className="card">
      <h2> {title} </h2>

      <p>
        Written By : {author}| Category:{category} | pubslide on :{date}{" "}
      </p>

      <div className="content">
        <img src={featureding} width="20%" alt="sona img" />
        <p dangerouslySetInnerHTML={{ __html: excerpt }}></p>
      </div>

      <div className="button">
        <h4>Tages</h4>
        <div className="tagContainer">
          {tags.map((tags) => {
            return <p>{tags}</p>;
          })}
        </div>
        <a href={articleurl} target="_blank">
          Reed More
        </a>
      </div>
    </div>
  );
};
export default Card;
