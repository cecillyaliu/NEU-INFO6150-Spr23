import cards from "./cards";
import './css/Cats.css';
import Button from "./Button";
import { useState } from 'react'
import Form from "./Form";

function Card () {
    const [clickButton, setClickButton] = useState(false);

    const handleButtonClick = () => {
        console.log("Button clicked!");
        setClickButton(true);
    }


    const cardList = cards.map ( card => {
        const showButton = card.button === "true";

        return (
        <div key={card.id} className={`events-card cat${card.id}`}>
            <img 
                className="card-picture" 
                src={card.pic} 
                alt={card.alt}/>
            <h2 className="card-title">{card.title}</h2>
            <p className="card-texts">{card.text}</p>
            {showButton && 
                <Button children={"Register"} 
                    onClick={handleButtonClick} 
                    type={"button"} 
                    visual={"button"}
                    className={"cards_button"}
                />
            }            
        </div> 
        );
    });

    return (
        <>
            {clickButton ?
                <Form setClickButton={setClickButton}/>
                : 
                <div className="events-main-container">
                    {cardList}
                </div>
            }  
        </>
        
    )
};

export default Card;