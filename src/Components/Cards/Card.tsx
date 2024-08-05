import { FC } from "react";
import { CardProps } from "../../Interface/props";

const Card : FC<CardProps> = ({imgUrl}) => {
    return (
        <div className="card">
        <img src={ imgUrl } 
          alt= 'Image'  />
       
      </div>
    )
}
export default Card