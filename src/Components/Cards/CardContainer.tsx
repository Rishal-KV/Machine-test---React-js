import { FC } from "react";
import Card from "./Card";
import { CardProps } from "../../Interface/props";
interface Cards {
        cardProps : CardProps[]
}
const CardContainer : FC<Cards> = ({cardProps}) => {
    return (
        <div className="cards-container">
    {
      cardProps.map((card:any) => (
        <Card key={card.id} 
          
          imgUrl={ card.imgUrl } />
      ))
    }
  </div>
    )
}

export default CardContainer