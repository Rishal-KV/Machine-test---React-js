import { FC } from "react";

const Card : FC<any> = (props:any) => {
    return (
        <div className="card">
        <img src={ props.imgUrl } 
          alt={ props.alt || 'Image' } />
       
      </div>
    )
}
export default Card