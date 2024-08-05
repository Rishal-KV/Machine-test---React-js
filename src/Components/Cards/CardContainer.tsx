import { FC } from "react";
import Card from "./Card";
const CardContainer : FC<any> = (props:any) => {
    return (
        <div className="cards-container">
    {
      props.cards.map((card:any) => (
        <Card key={card.id}  title={ card.title }
          content={ card.content }
          imgUrl={ card.imgUrl } />
      ))
    }
  </div>
    )
}

export default CardContainer