import React from "react";
import "../App.css";
import CardItem from "./Carditem";

function Card(props) {
    return (
        <div className="gameApp">
            <div className="Card">
                {props.cards.map(element => (
                    <CardItem
                        key={element.id}
                        carditem={element}
                        carditemclick={props.ClickCount}
                    />
                ))}
            </div>
        </div>
    );
}

export default Card;