import React from "react";

const CardItem = props => {
    return (
        <div>
            <img
                src={props.carditem.img}
                id={props.carditem.id}
                alt={props.carditem.name}
                onClick={event => {
                    //console.log(event.target.id);
                    event.preventDefault();
                    props.carditemclick(props.carditem.id);
                }}
            />
        </div>
    );
};

export default CardItem;