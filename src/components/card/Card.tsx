import React from "react";
import "./Card.css";

interface CardProps {
  company: string;
  title: string;
  imageUrl: string;
}

const Card = ({ company, title, imageUrl }: CardProps) => (
  <div className="card">
    {imageUrl && <img src={imageUrl} alt={title} />}
    <h3>{company}</h3>
    <h2>{title}</h2>
  </div>
);

export default Card;
